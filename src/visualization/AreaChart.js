import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

class AreaChart extends React.Component {

  render () {
    var chart = d3.select(ReactFauxDOM.createElement('svg'))
    const {data, width, height} = this.props;
    const innerW = width - 70,
          innerH = height - 50;
    var x = d3.scale.linear()
        .range([0, innerW])
        .domain(d3.extent(data, (d) => d.x));

    var y = d3.scale.linear()
        .range([innerH, 0])
        .domain([0, d3.max(data, (d) => d.y)]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom');

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left');

    var area = d3.svg.area()
        .x((d) => d.x)
        .y0(innerH)
        .y1((d) => d.y);

    var chart = d3.select(ReactFauxDOM.createElement('svg'))
        . attr('width', width)
        . attr('height', height)
      .append('g')
        .attr('transform', `translate(50, 20)`);

    chart.append('path')
        .datum(data)
        .attr('class', 'area')
        .attr('d', area);

    chart.append("g")
        .attr('class', 'x axis')
        .attr('transfor', `translate(0, ${innerH})`)
        .call(xAxis);

    chart.append("g")
        .attr('class', 'y axis')
        .call(yAxis)
      .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.71em')
        .style('text-anchor', 'end')
        .text('user specified');

    return chart.node().toReact();
  }
}

export default AreaChart;

AreaChart.proptypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  data: React.PropTypes.array
}
