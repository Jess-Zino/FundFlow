import React from 'react';
import * as d3 from 'd3';

class Dialguage extends React.Component {
  constructor(props) {
    super(props);
    this.svgRef = React.createRef();
  }

  componentDidMount() {
    this.drawGauge();
  }

  componentDidUpdate() {
    this.drawGauge();
  }

  drawGauge() {
    const { maxValue, value } = this.props;
    const width = 300;
    const height = 200;
    const margin = 20;
    const radius = Math.min(width, height) / 2 - margin;

    const svg = d3.select(this.svgRef.current);

    // Clear previous drawings
    svg.selectAll('*').remove();

    // Define a gradient
    const defs = svg.append('defs');
    const gradient = defs.append('linearGradient')
      .attr('id', 'gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '0%');

    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#3b82f6');

    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#2ecc71');

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const scale = d3.scaleLinear()
      .domain([0, maxValue])
      .range([-Math.PI / 2, Math.PI / 2]);

    const backgroundArc = d3.arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    g.append('path')
      .attr('d', backgroundArc)
      .attr('fill', '#e0e0e0')
      .attr('stroke', '#333') // Add border to the background arc
      .attr('stroke-width', '1px');

    const foregroundArc = d3.arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius)
      .startAngle(-Math.PI / 2);

    g.append('path')
      .datum({ endAngle: scale(value) })
      .attr('d', foregroundArc)
      .attr('fill', 'url(#gradient)')
      .attr('stroke', '#333') // Add border to the foreground arc
      .attr('stroke-width', '1px');

    // Add needle
    const needleLength = radius * 0.9;
    const needleWidth = 2.5;
    const needleAngle = scale(value);

    const needle = g.append('g')
      .attr('class', 'needle')
      .attr('transform', `rotate(${needleAngle * (180 / Math.PI)})`);

    needle.append('rect')
      .attr('x', -needleWidth / 2)
      .attr('y', -needleLength)
      .attr('width', needleWidth)
      .attr('height', needleLength)
      .attr('fill', '#ff5722');

    // Add dot at the axis of the pointer
    g.append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 3)
      .attr('fill', '#ff5722');
  }

  render() {
    return (
      <svg ref={this.svgRef} width={300} height={200} />
    );
  }
}

export default Dialguage;
