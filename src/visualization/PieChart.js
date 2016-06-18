import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

class PieChart extends React.Component {
  render () {
    // const {width, height, radius, colors, data, donut} = this.props;
    const data = this.props.data,
          width= this.props.width || 350,
          height = this.props.height || 300,
          radius = this.props.radius,
          donut = this.props.donut,
          colorFill = (donut) ? radius - radius / donut : 0,
          colors = this.props.colors || ["#e1eef6","#ff5f2e","#fcbe32","#004e66",
          "#ff7473","#ffc952","#47b8e0","#34314c","#47b8e0","#47b8e0"],
          color = d3.scale.ordinal()
            .range(colors);

    var arc = d3.svg.arc()
        .outerRadius(radius - 10)
        .innerRadius(colorFill);

    var labelArc = d3.svg.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    var pie = d3.layout.pie()
        .sort(null)
        .value((d) => d.y);

    var chart = d3.select(ReactFauxDOM.createElement('svg'))
        .attr('class', 'PieChart')
        .attr('width', width)
        .attr('height', height)

    var g = chart.append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

    var slice = g.selectAll('.arc')
        .data(pie(data))
        .enter().append('g')
        .attr('class', 'arc');

    slice.append('path')
        .attr('d', arc)
        .style('fill', (d) => color(d.data.x));

    slice.append('text')
        .attr('transform', (d) => `translate(${labelArc.centroid(d)})`)
        .attr('dy', '.35em')
        .text((d) => d.data.x);

      return chart.node().toReact();
  }
}

PieChart.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  radius: React.PropTypes.number,
  colors: React.PropTypes.array,
  donut: React.PropTypes.number,
  data: React.PropTypes.array
}

export default PieChart;
