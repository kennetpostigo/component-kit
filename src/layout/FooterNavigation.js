import React from 'react';
import { css, StyleSheet } from 'aphrodite';

function FooterNavigation (props) {
  var cols = Math.round(12 /props.views.length);

  var styles = StyleSheet.create({
    footerNav: {
      width: '100%',
      height: props.height || 60,
      position: 'fixed',
      bottom: 0,
      backgroundColor: props.backgroundColor || '#fff',
      boxShadow: '0px 0px 5px rgba(0,0,0,.3);'
    },
    icon: {
      textDecoration: 'none',
      textAlign: 'center',
      fontSize: 20,
      marginTop: 5,
      marginBottom: 3
    },
    center: {
      textDecoration: 'none',
      textAlign: 'center'
    },
    title: {
      textAlign: 'center',
      fontSize: 16,
      marginTop: 0,
      marginBottom: 5,
      textDecoration: 'none'
    }
  });

  return (
    <div className={`FooterNavigation ${css(styles.footerNav)}`}>
      <div className="container-fluid">
        <div className="row">
          {
            (props.children)
              ?
                props.children
              :
                props.views.map((view, key) => {
                  return (
                    <div key={key} className={`col-xs-${cols}`}>
                      <a className={css(styles.center)} href={view.link}>
                        <p className={`${view.icon} ${css(styles.icon)}`}></p>
                        <p className={css(styles.title)}>{view.title}</p>
                      </a>
                    </div>
                  );
                })
          }
        </div>
      </div>
    </div>
  );
}
FooterNavigation.propTypes = {
  views: React.PropTypes.arrayOf(React.PropTypes.shape({
    link: React.PropTypes.string,
    icon: React.PropTypes.string,
    title: React.PropTypes.string
  })),
  height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
};

export default FooterNavigation;
