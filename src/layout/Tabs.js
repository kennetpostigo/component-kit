import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Tabs extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTab: 0
    }
  }

  toggle (tab) {
    this.setState({activeTab: tab});
  }
  render () {
    const styles = StyleSheet.create({
      tabs: {
        width: this.props.width || 300,
        height: this.props.height || 500,
        backgroundColor: this.props.backGroundColor || '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
      },
      tabList: {
        margin: 0,
        padding: 0,
        width: '100%'
      },
      tabItem: {
        textAlign: 'center',
        display: 'inline-block',
        listStyle: 'none',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
      },
      activeTab: {
        textAlign: 'center',
        display: 'inline-block',
        listStyle: 'none',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        borderBottom: `2px solid ${this.props.tabColor || '#3949AB'}`
      },
      component: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: 20
      }
    })
    const cols = Math.round(12 / this.props.tabs.length);
    const TabComponent = this.props.tabs[this.state.activeTab].component;
    return (
      <div className={`Tabs ${css(styles.tabs)}`}>
          <ul className={`row ${css(styles.tabList)}`}>
            {
              this.props.tabs.map((tab, key) => {
                return (
                  <li onClick={e => this.toggle(key)}
                    key={key}
                    className={(this.state.activeTab === key)
                      ? `${css(styles.activeTab)} col-xs-${cols}`
                      : `${css(styles.tabItem)} col-xs-${cols}`
                    }
                  >
                    <p>{tab.title}</p>
                  </li>
                )
              })
            }
          </ul>
          <div className={css(styles.component)}>
            {TabComponent}
          </div>

      </div>
    );
  }
}

Tabs.propTypes = {
  width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  backGroundColor: React.PropTypes.string,
  tabColor: React.PropTypes.string,
  tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string,
    component: React.PropTypes.element
  }))
};

export default Tabs;
