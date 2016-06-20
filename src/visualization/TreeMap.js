import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

class TreeMap extends React.Component {
  render () {
    const { root, width, height } = this.props;
    const innerW = width - 60,
          innerH = height - 60;

    var color = d3.scale.category20c();

    var treemap = d3.layout.treemap()
        .size([width, height])
        .sticky(true)
        .value((d) => d.size);

    var chart = d3.select(ReactFauxDOM.createElement('div'))
        .style('position', 'relative')
        .style('width', width)
        .style('height', height)
        .attr('class', 'TreeMap')
        .style('left', `10px`)
        .style('top', `40px`);

    var node = chart.datum(root)
        .selectAll('.node')
        .data(treemap.nodes)
        .enter().append('div')
        .attr('class', 'node')
        .style("left", (d) => d.x + "px")
        .style("top", (d) => d.y + "px")
        .style("width", (d) => Math.max(0, d.dx - 1) + "px")
        .style("height", (d) => Math.max(0, d.dy - 1) + "px")
        .style('background', (d) => (d.children) ? color (d.name) : null)
        .style('border', 'solid 1px white')
        .style('10px', 'sans-serif')
        .style('line-height', 12)
        .style('overflow', 'hidden')
        .style('position', 'absolute')
        .style('text-indent', 2)
        .text((d) => (d.children) ? null : d.name);

    return chart.node().toReact();
  }
}

TreeMap.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  root: React.PropTypes.object
}

export default TreeMap;
