import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

class PieChart extends React.Component {
  render () {
    const {width, height, radius, colors, data, donut} = this.props,
      colorFill = (donut) ? height/ 5 : height / 2;

    var arc = d3.svg.arc()
        .outerRadius(radius - 0)
        .innerRadius(radius - colorFill);

    var color = d3.scale.ordinal()
        .range(colors);

    var pie = d3.layout.pie()
        .sort(null)
        .value((d) => d.x);

    var chart = d3.select(ReactFauxDOM.createElement('svg'))
        .attr('width', width)
        .attr('height', height)
      .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

    var g = chart.selectAll('.arc')
        .data(pie(data))
        .enter().append('g')
      .attr('class', 'arc');

    g.append('path')
      .attr('d', arc)
      .style('fill', (d) => color(d.y));

    g.append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('dy', '.35em')
      .text(d => d.data.y);

      return chart.node().toReact();
  }
}

PieChart.proptypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  radius: React.PropTypes.number,
  colors: React.PropTypes.array,
  data: React.PropTypes.array
}

export default PieChart;
