import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

class LineChart extends React.Component {
  render () {
    const { data, width, height } = this.props;
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
        .orient('bottom')
        .innerTickSize(-innerH)
        .outerTickSize(0)
        .tickPadding(10);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left')
        .innerTickSize(-innerW)
        .outerTickSize(0)
        .tickPadding(10);

    var line = d3.svg.line()
        .interpolate("monotone")
        .x((d) => x(d.x))
        .y((d) => y(d.y));

    var chart = d3.select(ReactFauxDOM.createElement('svg'))
        .attr('width', width)
        .attr('height', height);

    var g = chart.append('g')
        .attr('transform', `translate(50, 20)`);

    g.append('path')
        .datum(data)
        .attr('class', 'line')
        .attr('d', line);

    g.selectAll('circle')
      .data(data)
      .enter().append('circle')
      .attr('class', 'circle')
      .attr('cx', (d) => x(d.x))
      .attr('cy', (d) => y(d.y))
      .attr('r', 3);

    g.append("g")
        .attr('class', 'x axis')
        .attr('transform', `translate(0, ${innerH})`)
        .call(xAxis)
        .append('text')
        .attr('class', 'label')
        .attr('x', innerW)
        .attr('y', -6)
        .style('text-anchor', 'end')
        .text('x-axis');

    g.append('g')
        .attr('class', 'y axis')
        .call(yAxis)
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.71em')
        .style('text-anchor', 'end')
        .text('y-axis');

    return chart.node().toReact();
  }
}

LineChart.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  data: React.PropTypes.array
}

export default LineChart;
