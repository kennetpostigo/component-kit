import React from 'react';
import d3Shape from 'd3-shape';
import d3Axis from 'd3-axis';
import ReactFauxDOM from 'react-faux-dom';

class AreaChart extends React.Component {
  componentDidMount () {

  }

  render () {
    const { width, height, data } = this.props;

    const el = d3.select(ReactFauxDOM.createElement('svg'))
  }
}

export default AreaChart;

AreaChart.proptypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  data: React.PropTypes.array
}
