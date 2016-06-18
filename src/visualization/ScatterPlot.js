import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

class ScatterPlot extends React.Component {
  render () {
    const data = this.props.data,
          xDataKey = this.props.xDataKey,
          yDataKey = this.props.yDataKey,
          dataKey = this.props.dataKey,
          scatterKey = this.props.scatterKey || yDataKey,
          width= this.props.width || 350,
          height = this.props.height || 300,
          innerW = width - 60,
          innerH = height - 60,
          xScale = this.props.xScale,
          yScale = this.props.yScale,
          pointRadius= this.props.pointRadius || 3.5,
          color = (this.props.colors) ? d3.scale.ordinal().range(this.props.colors) : d3.scale.category10();

    var planeElement = ReactFauxDOM.createElement('svg')
    var plane = d3.select(planeElement)
        .attr('class', 'ScatterPlot')
        .attr('width', width)
        .attr('height', height);

    var g = plane.append('g')
        .attr('class', 'plane')
        .attr('width', innerW)
        .attr('height', innerH)
        .attr('transform', `translate(50, 20)`);

    g.selectAll('.dot')
      .data(data)
      .enter().append('circle')
      .attr('class', 'dot')
      .attr('r', pointRadius)
      .attr('cx', (d) => xScale(d[xDataKey]))
      .attr('cy', (d) => yScale(d[dataKey]))
      .style('fill', (d) => color(d[scatterKey]));

    // var legend = g.selectAll('.legend')
    //     .data(color.domain())
    //     .enter().append('g')
    //     .attr('class', 'legend')
    //     .attr('transform', (d, i) => `translate(0, ${i * 20})`);
    //
    // legend.append('rect')
    //     .attr('x', innerW - 18)
    //     .attr('width', 18)
    //     .attr('height', 18)
    //     .style('fill', color);
    //
    // legend.append('text')
    //     .attr('x', width - 24)
    //     .attr('y', 9)
    //     .attr('dy', '.35em')
    //     .style('text-anchor', 'end')
    //     .text((d) => d.t);

    return plane.node().toReact();
  }
}

ScatterPlot.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  data: React.PropTypes.array,
  colors: React.PropTypes.array,
  dataKey: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  scatterKey: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  pointRadius: React.PropTypes.number
}

export default ScatterPlot;
