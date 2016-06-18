import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

class RadarChart extends React.Component {
  render () {
    const {width, height, data} = this.props,
          barHeight = height / 2 - 40;

    var tickValues = [4,8,12,16,20];

    var chart = d3.select(ReactFauxDOM.createElement('svg'))
        .attr('class', 'RadarChart')
        .attr('width', width)
        .attr('height', height);

    var g = chart.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2} )`);

    var numBars = data.data.length;

    var radius = d3.scale.linear()
        .domain([0,20])
        .range([0, barHeight]);

    var line = d3.svg.line.radial()
      .interpolate('linear-closed')
      .radius((d) => radius(d.count))
      .angle((d,i) => (i * 2 * Math.PI / numBars));

    var area = d3.svg.area.radial()
      .interpolate(line.interpolate())
      .innerRadius(radius(0))
      .outerRadius(line.radius())
      .angle(line.angle());

    tickValues.sort((a,b) => b - a);

    var tickPath = g.selectAll('.tickPath')
        .data(tickValues).enter()
      .append('path')
        .attr('class', 'tickPath')
        .attr('d', function(d) {
          var tickArray = [], i;
          for (i = 0; i < numBars; i++) tickArray.push({count : d});
          return area(tickArray);
        })
        .style('fill', 'none')
        .style('stroke', (d,i) => (i === 0) ? 'rgb(102, 102, 102)' : 'rgb(102, 102, 102)')
        .style('stroke-width', (d,i) => (i === 0) ? '.8px' : '.5px');

    var lines = g.selectAll('line')
        .data(data.data)
      .enter().append('g')
        .attr('class', 'lines');

    lines.append('line')
      .attr('y2', - barHeight )
      .style('stroke', '#5e5e5e')
      .style('stroke-width', '.5px')
      .attr('transform', (d, i) => `rotate(${(i * 360 / numBars)})`);

    lines.append('text')
      .attr('class', 'names')
      .attr('x', (d, i) => (barHeight + 15) * Math.sin((i * 2 * Math.PI / numBars)))
      .attr('y', (d, i) => -(barHeight + 15) * Math.cos((i * 2 * Math.PI / numBars)))
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
      .style('fill', 'rgb(171, 166, 166)')
      .text((d) => d.skill);

    var layer = g.selectAll('.layer')
      .data([data]).enter()
      .append('path')
      .attr('class', 'layer')
      .attr('d', (d) => area(d.data))
      .attr('fill', 'rgba(88, 201, 185, 0.7)')
      .attr('stroke', 'rgb(102, 102, 102)')
      .attr('stroke-width', '0.5px');

    return chart.node().toReact();
  }
}

export default RadarChart;
