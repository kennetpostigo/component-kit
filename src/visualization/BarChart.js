import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

class BarChart extends React.Component {
  render () {
    const data = this.props.data,
          xDataKey = this.props.xDataKey,
          yDataKey = this.props.yDataKey,
          dataKey = this.props.dataKey || yDataKey,
          width= this.props.width || 350,
          height = this.props.height || 300,
          innerW = width - 60,
          innerH = height - 60,
          xScale = this.props.xScale,
          yScale = this.props.yScale,
          scaleTypes = this.props.scaleTypes;

    var planeElement = ReactFauxDOM.createElement('svg')
    var plane = d3.select(planeElement)
        .attr('class', 'BarChart')
        .attr('width', width)
        .attr('height', height);

    var g = plane.append('g')
        .attr('class', 'plane')
        .attr('width', innerW)
        .attr('height', innerH)
        .attr('transform', `translate(50, 20)`);
if (scaleTypes.x === 'ordinal') {
  g.selectAll('.bar')
    .data(data)
    .enter().append('rect')
    .attr('class', 'bar')
    .attr('x', (d) => xScale(d[xDataKey]))
    .attr('y', (d) => yScale(d[dataKey]))
    .attr('height', (d) => innerH - yScale(d[dataKey]))
    .attr('width', xScale.rangeBand());
} else {
  g.selectAll('.bar')
    .data(data)
    .enter().append('rect')
    .attr('class', 'bar')
    .attr('x', (d) => xScale(d[xDataKey]))
    .attr('y', (d, i) => yScale.rangeBand(d[dataKey]) * i)
    .attr('height', (d, i) => innerH - yScale(d[dataKey]))
    .attr('width', '7');
}
    // console.log('lin yScale: ', )

    return plane.node().toReact();
  }
}

BarChart.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  data: React.PropTypes.array,
  barGap: React.PropTypes.number,
  barSize: React.PropTypes.number
}

export default BarChart;
