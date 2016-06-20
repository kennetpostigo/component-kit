import React from 'react';
import { css, StyleSheet } from 'aphrodite';

function Platter (props) {
  const styles = StyleSheet.create({
    platter: {
      backgroundColor: props.backgroundColor || '#fff',
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      width: props.width || 400,
      height: props.height || 350,
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 15,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }
  });

  return (
    <div className={`Platter ${css(styles.platter)}`}>
      {props.children}
    </div>
  );
}

Platter.PropTypes = {
  width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  backgroundColor: React.PropTypes.string
};

export default Platter;
