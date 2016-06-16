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
        height: this.props.width || 500,
        backgroundColor: this.props.BC || '#fff',
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
          <TabComponent />
      </div>
    );
  }
}

export default Tabs;
