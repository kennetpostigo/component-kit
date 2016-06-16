import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

class ScatterPlot extends React.Component {
  render () {
    const { data, width, height } = this.props;
    const innerW = width - 60,
          innerH = height - 60;

    var x = d3.scale.linear()
        .domain(d3.extent(data, (d) => d.x))
        .range([0, innerW]);

    var y = d3.scale.linear()
        .domain(d3.extent(data, (d) => d.y))
        .range([innerH, 0]);

    var color = d3.scale.category10();

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom');

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left');

    var chart = d3.select(ReactFauxDOM.createElement('svg'))
        .attr('width', width)
        .attr('height', height);

    var g = chart.append('g')
        .attr('transform', `translate(${40}, ${20})`);

    g.append('g')
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
      .attr('class', 'label')
      .call(yAxis)
      .append('text')
      .attr('class', 'label')
      .attr('transform', `rotate(-90)`)
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('y-axis');

    g.selectAll('.dot')
      .data(data)
      .enter().append('circle')
      .attr('class', 'dot')
      .attr('r', 3.5)
      .attr('cx', (d) => x(d.x))
      .attr('cy', (d) => y(d.y))
      .style('fill', (d) => color(d.t));

    var legend = g.selectAll('.legend')
        .data(color.domain())
        .enter().append('g')
        .attr('class', 'legend')
        .attr('transform', (d, i) => `translate(0, ${i * 20})`);

    legend.append('rect')
        .attr('x', innerW - 18)
        .attr('width', 18)
        .attr('height', 18)
        .style('fill', color);

    legend.append('text')
        .attr('x', width - 24)
        .attr('y', 9)
        .attr('dy', '.35em')
        .style('text-anchor', 'end')
        .text((d) => d.t);



    return chart.node().toReact();
  }
}

ScatterPlot.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  data: React.PropTypes.array
}

export default ScatterPlot;
