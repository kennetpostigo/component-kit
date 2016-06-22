import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

class AreaChart extends React.Component {
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
          color = this.props.color || '#ff7473',
          colorOpacity = this.props.colorOpacity || 1;

    var area = d3.svg.area()
      .interpolate("monotone")
      .x((d) => xScale(d[xDataKey]))
      .y0(innerH)
      .y1((d) => yScale(d[dataKey]));

    var planeElement = ReactFauxDOM.createElement('svg')
    var plane = d3.select(planeElement)
        .attr('class', 'AreaChart')
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

    g.append('path')
          .datum(data)
          .attr('class', 'area')
          .attr('d', area)
          .style('fill', color)
          .style('stroke-linecap', 'round')
          .style('stroke-linehoin', 'round')
          .style('fill-opacity', colorOpacity);

    return plane.node().toReact();
  }
}

AreaChart.propTypes = {
  width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  data: React.PropTypes.array,
  dataKey: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
  color: React.PropTypes.string,
  colorOpacity: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
}

export default AreaChart;
