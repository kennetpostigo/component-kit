import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
import { getDividends } from './../utils/Dividends.js';

class RadarChart extends React.Component {
  render () {
    const width = this.props.width || 350,
          height = this.props.height || 300,
          data = this.props.data,
          rangeKey = this.props.rangeKey,
          labelKey = this.props.labelKey,
          barHeight = height / 2 - 40,
          tickValues = data.map((d) => d[rangeKey]),
          largestTick = Math.max(...tickValues),
          tickSpace = getDividends(largestTick, 6);

    var plane = d3.select(ReactFauxDOM.createElement('svg'))
        .attr('class', 'RadarChart')
        .attr('width', width)
        .attr('height', height)
        .style('position', 'relative')
        .style('display', 'inline-block');

    var g = plane.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2} )`);

    var numBars = data.length;

    var radius = d3.scale.linear()
        .domain([0,largestTick])
        .range([0, barHeight]);

    var line = d3.svg.line.radial()
      .interpolate('linear-closed')
      .radius((d) => radius(d[rangeKey]))
      .angle((d,i) => (i * 2 * Math.PI / numBars));

    var area = d3.svg.area.radial()
      .interpolate(line.interpolate())
      .innerRadius(radius(0))
      .outerRadius(line.radius())
      .angle(line.angle());

    tickValues.sort((a,b) => b - a);

    var tickPath = g.selectAll('.tickPath')
        .data(tickSpace).enter()

    tickPath.append('path')
      .attr('class', 'tickPath')
      .attr('d', function(d) {
        var tickArray = [], i;
        for (i = 0; i < numBars; i++) tickArray.push({[rangeKey]: d});
        return area(tickArray);
      })
      .style('fill', 'none')
      .style('stroke', (d,i) => (i === 0) ? 'rgb(102, 102, 102)' : 'rgb(102, 102, 102)')
      .style('stroke-width', (d,i) => (i === 0) ? '.8px' : '.5px');

    g.selectAll('text')
        .data(tickSpace).enter()
        .append('text')
        .text((d) => d)
        .attr('y', (d) => radius(-d) + 20)
        .attr('x', + 3)
        .style('font-size', 12)
        .style('fill', '#CFCCCC');

    var lines = g.selectAll('line')
        .data(data)
        .enter().append('g')
        .attr('class', 'lines');

    lines.append('line')
      .attr('y2', - barHeight )
      .style('stroke', '#5e5e5e')
      .style('stroke-width', '.5px')
      .attr('transform', (d, i) => `rotate(${(i * 360 / numBars)})`);

    lines.append('text')
      .attr('class', 'names')
      .attr('x', (d, i) => (barHeight + 13) * Math.sin((i * 2 * Math.PI / numBars)))
      .attr('y', (d, i) => -(barHeight + 13) * Math.cos((i * 2 * Math.PI / numBars)))
      .attr('text-anchor', function(d,i) {
      if (i === 0 || i === numBars / 2) {
          return 'middle';
        }else if (i <= numBars / 2) {
          return 'begin';
        }else {
          return 'end';
        }
      })
      .style('font-weight', 'bold')
      .style('fill', '#CFCCCC')
      .text((d) => d[labelKey]);

      return (
        <div className="XYC">
          {
            (typeof this.props.children !== 'array') ?
                 React.Children.map(this.props.children, (child, key) => {
                  return React.cloneElement(child, { zIndex: key + 1, data, rangeKey, labelKey, width, height, largestTick, numBars, barHeight});
                })
              :
                React.cloneElement(this.props.children, { zIndex: 10 , data, rangeKey, labelKey, width, height, largestTick, numBars, barHeight})
          }
          {plane.node().toReact()}
        </div>
      );
  }
}

RadarChart.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  data: React.PropTypes.array.isRequired,
  rangeKey: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
  labelKey: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired
};

export default RadarChart;
