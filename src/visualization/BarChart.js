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
          scaleTypes = this.props.scaleTypes,
          color = this.props.color || 'rgb(136, 132, 216)',
          colorOpacity = this.props.colorOpacity || 0.6;

    var planeElement = ReactFauxDOM.createElement('svg')
    var plane = d3.select(planeElement)
        .attr('class', 'BarChart')
        .attr('width', width)
        .attr('height', height)
        .style('z-index', this.props.zIndex)
        .style('position', 'absolute');

    var g = plane.append('g')
        .attr('class', 'plane')
        .attr('width', innerW)
        .attr('height', innerH)
        .attr('transform', `translate(50, 20)`)
        .style('display', 'inline-block');

    if (scaleTypes.x === 'ordinal') {
      g.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', (d) => xScale(d[xDataKey]))
        .attr('y', (d) => yScale(d[dataKey]))
        .attr('height', (d) => innerH - yScale(d[dataKey]))
        .attr('width', xScale.rangeBand())
        .style('fill', color)
        .style('fill-opacity', colorOpacity);
    } else {
      g.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .style('fill', color)
        .style('fill-opacity', colorOpacity)
        .attr('x', (d) => xScale(d[xDataKey]))
        .attr('y', (d, i) => yScale.rangeBand(d[dataKey]) * i)
        .attr('height', (d, i) => innerH - yScale(d[dataKey]))
        .attr('width', '7');
    }

    return plane.node().toReact();
  }
}

BarChart.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  data: React.PropTypes.array,
  dataKey: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
  color: React.PropTypes.string,
  colorOpacity: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
}

export default BarChart;
