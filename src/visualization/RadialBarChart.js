import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

class RadialBarChart extends React.Component {
  render () {
    const {width, height, data, colors} = this.props,
    innerW = width - 0,
    innerH = height - 40,
    radiusMax = (height / 2.2),
    xColumn = "name",
    sliceSizeColumn = "population",
    colorColumn = "religion";

    var xScale = d3.scale.ordinal().rangePoints([0, width]);

    var xAxis = d3.svg.axis().scale(xScale).orient("bottom")
        .outerTickSize(0);

    var colorScale = d3.scale.ordinal()
        .range(colors);

    var angleScale = d3.scale.linear();

    var chart = d3.select(ReactFauxDOM.createElement('svg'))
        .attr('class', 'RadialBarChart')
        .attr('width', width)
        .attr('height', height);

    var g = chart.append("g")
        .attr('class', 'plane')
        .attr("transform", "translate(" + 11 + "," + 33 + ")");

    var pieG = g.append("g");

    var pie = d3.layout.pie();
    var arc = d3.svg.arc();

      xScale.domain(data.map((d) => d.name));

      colorScale.domain(data.map((d) => d[colorColumn]));

      pie.value((d) => d[sliceSizeColumn]);

      angleScale.domain([0, d3.max(data, (d) => d[sliceSizeColumn])])
        .range([0, Math.PI]);

      var pieData = pie(data);
      pieData.forEach(function (d){
        d.startAngle = 0;
        d.endAngle = angleScale(d.value);
      });

      pieG.attr("transform", `translate(${width / 2}, ${innerH}) rotate(-90)`)
          .attr('class', `pieSlice`);

      var slices = pieG.selectAll("path")
          .data(pieData);

      slices.append('text')
          .attr('dy', '.35em')
          .text((d) => d.population);

      slices.enter().append("path")
        .attr("d", function (d, i){
          arc
            .innerRadius(function(d) {
              return i / (pieData.length - 1) * radiusMax;
            })
            .outerRadius(function(d) {
              return (i + 1) / (pieData.length - 1) * radiusMax;
            });
          return arc(d);
        })
        .attr("fill", function (d){ return colorScale(d.data[colorColumn]); });
      slices.exit().remove();

    return chart.node().toReact();
  }

}

RadialBarChart.propTypes = {
  data: React.PropTypes.array,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  colors: React.PropTypes.array
};

export default RadialBarChart;
