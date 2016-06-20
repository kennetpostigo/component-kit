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
      },
      title: {
        color: '#212121',
        fontSize: 15,
        padding: 0,
        marginTop: 15,
        float: 'left'
      },
      toggle: {
        height: 25,
        width: 25,
        textAlign: 'center',
        color: '#212121',
        fontSize: 15,
        paddingTop: 0,
        marginTop: 15,
        borderRadius: '50%',
        float: 'right',
        ':hover': {
          backgroundColor: '#f1f1f1',
        }
      },
      body:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }
    });
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
                      <p className={css(styles.toggle)} onClick={this.toggle}>&#8595;</p>
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
                      <p className={css(styles.toggle)} onClick={this.toggle}>&#8593;</p>
                    </div>
                  </div>
                  <div className={`row ${css(styles.body)}`}>
                    {this.props.children}
                  </div>
                </div>
          }
      </div>
    );
  }
}

Panels.propTypes = {
  width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  title: React.PropTypes.string
};

export default Panels;
