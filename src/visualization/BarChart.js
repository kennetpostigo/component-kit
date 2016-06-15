import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

class BarChart extends React.Component {
  render () {
    const {data, width, height} = this.props;
    const innerW = width - 60,
          innerH = height - 60;

    var x = d3.scale.ordinal()
        .domain(data.map((d) => d.name))
        .rangeRoundBands([0, innerW], .1);

    var y = d3.scale.linear()
        .domain([0, d3.max(data, (d) => d.value)])
        .range([innerH, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom');

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left');

    var chart = d3.select(ReactFauxDOM.createElement('svg'))
      .attr('width', width)
      .attr('height', height)

      chart.append('g')
           .attr('transform', `translate(${40}, ${20})`);

      chart.append('g')
           .attr('class', 'x axis')
           .attr('transform', `translate(0, ${innerH})`)
           .call(xAxis)

      chart.append('g')
           .attr('class', 'y axis')
           .call(yAxis);

      chart.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', (d) => x(d.name))
        .attr('y', (d) => y(d.value))
        .attr('height', (d) => innerH - y(d.value))
        .attr('width', x.rangeBand());

    return chart.node().toReact();
  }
}

BarChart.proptypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  data: React.PropTypes.array,
  barGap: React.PropTypes.number,
  barSize: React.PropTypes.number
}

export default BarChart;
