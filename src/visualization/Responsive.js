import React from 'react';
import { findDOMNode } from 'react-dom';

class Responsive extends React.Component{
    constructor () {
      super();
      this.state = {
        size: {
          w: 0,
          h: 0
        }
      }
    }

    componentDidMount () {
        window.addEventListener('resize', this.fitToParentSize.bind(this));
        this.fitToParentSize();
    }

    componentWillReceiveProps () {
        this.setState({
          size: {
          w: this.props.width,
          h: this.props.height
          }
        });
        this.fitToParentSize();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.fitToParentSize.bind(this));
    }

    fitToParentSize () {
        let elem = findDOMNode(this);
        let w = elem.parentNode.offsetWidth;
        let h = elem.parentNode.offsetHeight;
        let currentSize = this.state.size;

        if (w !== currentSize.w || h !== currentSize.h) {
            this.setState({
                size: {
                    w: w,
                    h: h
                }
            });
        }
    }

    render () {

        let {width, height} = this.props;

        width = this.state.size.w;
        height = this.state.size.h;

        var Charts = React.cloneElement(this.props.children, { width, height});

        return Charts;
    }
};

export default Responsive;
