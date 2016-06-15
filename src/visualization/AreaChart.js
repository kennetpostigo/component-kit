import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

class AreaChart extends React.Component {
  render () {
    const {data, width, height} = this.props;
    const innerW = width - 60,
          innerH = height - 60;
    var x = d3.scale.linear()
        .domain(d3.extent(data, (d) => d.x))
        .range([0, innerW]);

    var y = d3.scale.linear()
        .domain([0, d3.max(data, (d) => d.y)])
        .range([innerH, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom');

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left');

    var area = d3.svg.area()
      .x((d) => x(d.x))
      .y0(innerH)
      .y1((d) => y(d.y));

    var chart = d3.select(ReactFauxDOM.createElement('svg'))
        .attr('width', width)
        .attr('height', height)

        chart.append('g')
             .attr('transform', `translate(50, 20)`);

        chart.append('path')
              .datum(data)
              .attr('class', 'area')
              .attr('d', area);

        chart.append("g")
            .attr('class', 'x axis')
            .attr('transform', `translate(0, ${innerH})`)
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

AreaChart.proptypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  data: React.PropTypes.array
}

export default AreaChart;
