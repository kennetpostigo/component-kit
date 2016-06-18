import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

class Legend extends React.Component {
  render () {
    return (
      <p>LEGEND UNDER CONSTRUCTION</p>
    );
  }
}

export default Legend;

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
