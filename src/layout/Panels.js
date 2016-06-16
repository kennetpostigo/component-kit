import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Panels extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle () {
    this.setState({open: !this.state.open});
  }

  render () {
    const styles = StyleSheet.create({
      panels: {
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        width: this.props.width || 400,
        minHeight: this.props.height || 35,
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15
      },
      title: {
        color: '#212121',
        fontSize: 15,
        padding: 0,
        margin: 0,
        float: 'left'
      },
      toggle: {
        color: '#212121',
        fontSize: 15,
        padding: 0,
        margin: 0,
        float: 'right'
      },
    });
    console.log(this.state.open);
    return (
      <div className={`Panels ${css(styles.panels)}`}>
          {
            (!this.state.open)
                ?
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-sm-9'>
                      <h3 className={css(styles.title)}>{this.props.title}</h3>
                    </div>
                    <div className='col-sm-3'>
                      <p className={css(styles.toggle)} onClick={this.toggle}>V</p>
                    </div>
                  </div>
                </div>

              :
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-sm-9'>
                      <h3 className={css(styles.title)}>{this.props.title}</h3>
                    </div>
                    <div className='col-sm-3'>
                      <p className={css(styles.toggle)} onClick={this.toggle}>^</p>
                    </div>
                  </div>
                  <div className='row'>
                    {this.props.children}
                  </div>
                </div>
          }
      </div>
    );
  }
}

export default Panels;
