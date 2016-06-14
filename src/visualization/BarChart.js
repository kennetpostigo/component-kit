import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
import {StyleSheet, css} from 'aphrodite';

class BarChart extends React.Component {
  render () {
    var styles = StyleSheet.create(this.props.styles);

    const { width, height, data } = this.props;

    var y = d3.scale.linear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    var chart = d3.select(ReactFauxDOM.createElement('svg'))
      .attr("width", width)
      .attr("height", height);

    var barWidth = width / data.length;

    var bar = chart.selectAll("g")
      .data(data)
      .enter().append("g")
      .attr("transform", (d, i) => `translate(${i * barWidth}, 0)`);

    bar.append("rect")
      .attr("y", (d) => y(d))
      .attr("height", (d) => height - y(d))
      .attr("width", barWidth - this.props.barGap)
      .attr('class', `${css(styles.rect)}`);

    bar.append("text")
      .attr("x", barWidth / 2)
      .attr("y", (d) => y(d) + 10)
      .attr("dy", ".75em")
      .text((d) => d)
      .attr('class', `${css(styles.text)}`);

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
