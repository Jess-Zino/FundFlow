import React from 'react';
import * as d3 from 'd3';

class DialGauge extends React.Component {
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
    const width = 200;
    const height = 200;
    const margin = 10;
    const radius = Math.min(width, height) / 2 - margin;
    const thickness = 40;

    const svg = d3.select(this.svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Clear previous drawings
    svg.selectAll('*').remove();

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const scale = d3.scaleLinear()
      .domain([0, maxValue])
      .range([-0.8 * Math.PI, 0.8 * Math.PI]);

    // Draw the outer border arc
    const borderArc = d3.arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius)
      .startAngle(-0.85 * Math.PI)
      .endAngle(0.85 * Math.PI);

    g.append('path')
      .attr('d', borderArc)
      .attr('fill', 'none')
      .attr('stroke', '#333')
      .attr('stroke-width', 2);

    // Draw the background arc
    const backgroundArc = d3.arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius);

    g.append('path')
      .attr('d', backgroundArc({ startAngle: -0.85 * Math.PI, endAngle: 0.85 * Math.PI }))
      .attr('fill', '#e0e0e0');

    // Draw the foreground arc (actual value)
    const foregroundArc = d3.arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius)
      .startAngle(-0.85 * Math.PI);

    g.append('path')
      .datum({ endAngle: scale(value) })
      .attr('d', foregroundArc)
      .attr('fill', '#800080'); // Purple color

    // Add needle
    const needleLength = radius - thickness -5;
    const needleWidthBase = 7;
    const needleWidthTip = 1;
    const needleAngle = scale(value);

    const needle = g.append('g')
      .attr('class', 'needle')
      .attr('transform', `rotate(${needleAngle * (180 / Math.PI)})`);

    // Draw the needle as a tapered shape
    needle.append('path')
      .attr('d', `
        M0,0
        L${needleWidthBase / 2},0
        L${needleWidthTip / 2},-${needleLength}
        L${-needleWidthTip / 2},-${needleLength}
        L${-needleWidthBase / 2},0
        Z
      `)
      .attr('fill', '#ff5722');

    // Add a dot at the needle base (blending with the needle)
    g.append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 3)
      .attr('fill', '#ff5722');

    // Add text for the value
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('font-size', '18px')
      .attr('dy', `${radius + 10}px`)
      .text(value);

    // Add text for the maximum value
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('dy', `${radius + 30}px`)
      .text(`/${maxValue}`);
  }

  render() {
    return (
      <svg ref={this.svgRef} />
    );
  }
}

export default DialGauge;
