import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
import { getDividends } from './../utils/Dividends.js';

class RadarArea extends React.Component {
  render () {
    const width = this.props.width || 350,
          height = this.props.height || 300,
          data = this.props.data,
          rangeKey = this.props.rangeKey,
          labelKey = this.props.labelKey,
          dataKey = this.props.dataKey || rangeKey,
          largestTick = this.props.largestTick,
          numBars = this.props.numBars,
          barHeight = this.props.barHeight,
          color = this.props.color,
          colorOpacity = this.props.colorOpacity || 0.7;

    var radius = d3.scale.linear()
        .domain([0,largestTick])
        .range([0, barHeight]);

    var line = d3.svg.line.radial()
      .interpolate('linear-closed')
      .radius((d) => radius(d[dataKey]))
      .angle((d,i) => (i * 2 * Math.PI / numBars));

    var area = d3.svg.area.radial()
      .interpolate(line.interpolate())
      .innerRadius(radius(0))
      .outerRadius(line.radius())
      .angle(line.angle());

    var plane = d3.select(ReactFauxDOM.createElement('svg'))
        .attr('class', 'RadarArea')
        .attr('width', width)
        .attr('height', height)
        .style('position', 'absolute');

    var g = plane.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2} )`)
      .style('z-index', this.props.zIndex)
      .style('display', 'inline-block');

      var layer = g.selectAll('.layer')
        .data([data]).enter()
        .append('path')
        .attr('class', 'layer')
        .attr('d', (d) => area(d))
        .style('fill', color)
        .style('fill-opacity', colorOpacity)
        .style('stroke', '#CFCCCC')
        .style('stroke-width', '0.5px')
        .style('font-size', 12);

    return plane.node().toReact();
  }
}

RadarArea.propTypes = {
  dataKey: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
  color: React.PropTypes.string,
  colorOpacity: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
};

export default RadarArea;
