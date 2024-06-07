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
    const width = 500;
    const height = 200; // Adjust height to fit text and pointer
    const margin = 20;
    const radius = Math.min(width, height * 2) / 2 - margin;
    const thickness = 80;

    const svg = d3.select(this.svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Clear previous drawings
    svg.selectAll('*').remove();

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height - margin})`); // Adjust translation for semi-circle

    const scale = d3.scaleLinear()
      .domain([0, maxValue])
      .range([-Math.PI / 2, Math.PI / 2]); // Range adjusted for 180 degrees

    // Draw the outer border arc
    const borderArc = d3.arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    g.append('path')
      .attr('d', borderArc)
      .attr('fill', 'none')
      .attr('stroke', '#2ecc71')
      .attr('stroke-width', 2);

    // Draw the background arc
    const backgroundArc = d3.arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius);

    g.append('path')
      .attr('d', backgroundArc({ startAngle: -Math.PI / 2, endAngle: Math.PI / 2 }))
      .attr('fill', '#fff');

    // Draw the foreground arc (actual value)
    const foregroundArc = d3.arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius)
      .startAngle(-Math.PI / 2);

    g.append('path')
      .datum({ endAngle: scale(value) })
      .attr('d', foregroundArc)
      .attr('fill', '#2ecc71bb'); // Green color

    // Add needle
    const needleLength = radius - thickness - 5;
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
      .attr('fill', '#1677ff');

    // Add a dot at the needle base (blending with the needle)
    g.append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 3)
      .attr('fill', '#1677ff');

    // Add text for the value
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('font-size', '18px')
      .attr('dy', '2em') // Position below the needle base
      .text(value);

    // Add text for the maximum value
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('dy', '3.5em') // Position further below
      .text(`/${maxValue}`);
  }

  render() {
    return (
      <svg ref={this.svgRef} />
    );
  }
}

export default DialGauge;

