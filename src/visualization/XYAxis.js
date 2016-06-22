import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
import { determineScales } from './../utils/DynamicScales.js';

class XYAxis extends React.Component {
  scales () {
    var xScale, yScale,
    xyConfig = this.props.xyConfig || {},
    data = (xyConfig.data) ? xyConfig.data : this.props.data,
    xDataKey = (xyConfig.xDataKey) ? xyConfig.xDataKey : this.props.xDataKey || 'x',
    yDataKey = (xyConfig.yDataKey) ? xyConfig.yDataKey : this.props.yDataKey || 'y',
    width = (xyConfig.width) ? xyConfig.width : this.props.width || 350,
    height = (xyConfig.height) ? xyConfig.height : this.props.height || 300,
    innerW = width - 60,
    innerH = height - 60,
    defaultOrdinal = (xyConfig.defaultOrdinal) ? xyConfig.defaultOrdinal
                                               : this.props.defaultOrdinal,
    scaleTypes = (defaultOrdinal) ? determineScales(data, xDataKey, yDataKey, defaultOrdinal)
                                  : determineScales(data, xDataKey, yDataKey);

    if (scaleTypes.x === 'linear') {
      xScale = d3.scale.linear()
          .domain(d3.extent(data, (d) => d[xDataKey]))
          .range([0, innerW]);
    } else {
      xScale = d3.scale.ordinal()
          .domain(data.map((d) => d[xDataKey]))
          .rangeRoundBands([0, innerW], .2);
    }

    if (scaleTypes.y === 'linear') {
      yScale = d3.scale.linear()
          .domain([0, d3.max(data, (d) => d[yDataKey])])
          .range([innerH, 0]);
    } else {
      yScale = d3.scale.ordinal()
           .domain(data.map((d) => d[yDataKey]))
           .rangeRoundBands([0, innerH], 0);
    }
    return {xScale, yScale, innerH, innerW, scaleTypes};
  }

  makeGrid () {
    var xAxis, yAxis,
        scales = this.scales(),
        xScale = scales.xScale,
        yScale= scales.yScale,
        xyConfig = this.props.xyConfig || {},
        xTicks = (xyConfig.xTicks) ? xyConfig.xTicks : this.props.xTicks || 4,
        yTicks = (xyConfig.yTicks) ? xyConfig.yTicks : this.props.yTicks || 4,
        grid = (xyConfig.grid) ? xyConfig.grid : this.props.grid || true;

    if (grid) {
      if (xTicks) {
        xAxis = d3.svg.axis()
            .scale(xScale)
            .ticks(xTicks)
            .orient('bottom')
            .innerTickSize(-scales.innerH)
            .outerTickSize(0)
            .tickPadding(3);

        yAxis = d3.svg.axis()
            .scale(yScale)
            .ticks(yTicks)
            .orient('left')
            .innerTickSize(-scales.innerW)
            .outerTickSize(0)
            .tickPadding(3);
      } else {
        xAxis = d3.svg.axis()
            .scale(xScale)
            .orient('bottom')
            .innerTickSize(-scales.innerH)
            .outerTickSize(0)
            .tickPadding(3);

        yAxis = d3.svg.axis()
            .scale(yScale)
            .orient('left')
            .innerTickSize(-scales.innerW)
            .outerTickSize(0)
            .tickPadding(3);
      }

    } else {
        if (yTicks) {
          xAxis = d3.svg.axis()
              .scale(xScale)
              .ticks(xTicks)
              .orient('bottom')
              .outerTickSize(0)
              .tickPadding(3);

          yAxis = d3.svg.axis()
              .scale(yScale)
              .ticks(yTicks)
              .orient('left')
              .outerTickSize(0)
              .tickPadding(3);
        } else {
          xAxis = d3.svg.axis()
              .scale(xScale)
              .orient('bottom')
              .outerTickSize(0)
              .tickPadding(3);

          yAxis = d3.svg.axis()
              .scale(yScale)
              .orient('left')
              .outerTickSize(0)
              .tickPadding(3);
        }
    }
    return {xAxis, yAxis, xScale, yScale, scaleTypes: scales.scaleTypes};
  }

  render () {
      const xyConfig = this.props.xyConfig || {},
            data = (xyConfig.data) ? xyConfig.data : this.props.data,
            xDataKey = (xyConfig.xDataKey) ? xyConfig.xDataKey : this.props.xDataKey || 'x',
            yDataKey = (xyConfig.yDataKey) ? xyConfig.yDataKey : this.props.yDataKey || 'y',
            width = (xyConfig.width) ? xyConfig.width : this.props.width || 350,
            height = (xyConfig.height) ? xyConfig.height : this.props.height || 300,
            innerW = width - 60,
            innerH = height - 60,
            xLabel = (xyConfig.xLabel) ? xyConfig.xLabel : this.props.xLabel || 'x-axis',
            yLabel = (xyConfig.yLabel) ? xyConfig.yLabel : this.props.yLabel || 'y-axis',
            gridLineType = (xyConfig.gridLines) ? (xyConfig.gridLines !== 'solid') ? '3,3' : '' : (this.props.gridLines !== 'solid') ? '3,3' : '',
            grid = this.makeGrid(),
            xScale = grid.xScale,
            yScale = grid.yScale,
            xAxis = grid.xAxis,
            yAxis = grid.yAxis,
            scaleTypes = grid.scaleTypes;

    var planeElement = ReactFauxDOM.createElement('svg')
    var plane = d3.select(planeElement)
        .attr('class', 'XYAxis')
        .attr('width', width)
        .attr('height', height)
        .style('position', 'relative')
        .style('z-index', 0);

    var g = plane.append('g')
        .attr('class', 'plane')
        .attr('transform', `translate(50, 20)`)
        .style('display', 'inline-block');

    var xLines = g.append("g")
        .attr('class', 'x axis')
        .attr('transform', `translate(0, ${innerH})`)
        .call(xAxis)
        .style('fill', 'rgb(102, 102, 102)')
        .style('stroke', 'rgb(102, 102, 102)')
        .style('font-size', 12)
        .style('letter-spacing', 1.5)
        .style('font-weight', 100);

    xLines.selectAll('line')
    .style('stroke-width', '1')
    .style('stroke', 'rgb(102, 102, 102)')
    .style('opacity', 0.2)
    .style('stroke-dasharray', (gridLineType))
    .style('fill', 'rgb(102, 102, 102)')
    .style('font-size', 12);

    xLines.append('text')
    .attr('class', 'label')
    .attr('x', innerW)
    .attr('y', -6)
    .style('text-anchor', 'end')
    .text(xLabel)
    .style('fill', 'rgb(102, 102, 102)')
    .style('font-size', 12);

    var yLines = g.append('g')
        .attr('class', 'y axis')
        .call(yAxis)
        .style('fill', 'rgb(102, 102, 102)')
        .style('stroke', 'rgb(102, 102, 102)')
        .style('font-size', 12)
        .style('letter-spacing', 1)
        .style('font-weight', 100);

    yLines.selectAll('line')
    .style('stroke-width', '1')
    .style('stroke', 'rgb(102, 102, 102)')
    .style('opacity', 0.2)
    .style('stroke-dasharray', (gridLineType))
    .style('fill', 'rgb(102, 102, 102)')
    .style('font-size', 12);

    yLines.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '.71em')
    .style('text-anchor', 'end')
    .text(yLabel)
    .style('fill', 'rgb(102, 102, 102)')
    .style('font-size', 12);

    return (
      <div style={{display: 'inline-block'}}>
        {
          (typeof this.props.children !== 'array') ?
               React.Children.map(this.props.children, (child, key) => {
                return React.cloneElement(child, { zIndex: key + 1, data, xDataKey, yDataKey, width, height, xAxis, yAxis, xScale, yScale, scaleTypes});
              })
            :
              React.cloneElement(this.props.children, { zIndex: 10 , data, xDataKey, yDataKey, width, height, xAxis, yAxis, xScale, yScale, scaleTypes})
        }
        {plane.node().toReact()}
      </div>
    );
  }
}

XYAxis.propTypes = {
  xyConfig: React.PropTypes.object,
  width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  data: React.PropTypes.array,
  xdataKey: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  ydataKey: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  defaultOrdinal: React.PropTypes.oneOf(['x', 'y', 'xy']),
  xTicks: React.PropTypes.number,
  yTicks: React.PropTypes.number,
  xLabel: React.PropTypes.string,
  yLabel: React.PropTypes.string,
  grid: React.PropTypes.bool,
  gridLines: React.PropTypes.oneOf(['solid', 'dashed']),
}

export default XYAxis;
