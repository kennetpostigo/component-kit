import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Cards (props) {
  const styles = StyleSheet.create({
    cards: {
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      width: props.width || 300,
      height: props.height || 350,
    },
    img: {
      width: props.imgWidth || 300,
      height: props.imgHeight || 200
    },
    fill: {
      padding: 10
    },
    h3: {
      color: '48494c',
      fontWeight: 300,
      lineHeight: 1.5,
      font: 'helvetica, sans-serif',
      fontSize: 20,
      marginTop: 6,
      marginBottom: 0
    },
    p: {
      marginTop: 5,
      lineHeight: 1.5,
      font: 'helvetica, sans-serif',
      fontSize: 15,
      color: '#636363'
    },
    link: {
      textDecoration: 'none',
      marginRight: 20,
      font: 'helvetica, sans-serif',
      color: props.linkColor || '#505052', //6f6f6f
      padding: 5,
      ':hover': {
        backgroundColor: '#f1f1f1',

      }
    },
    userStyle: props.styles || ''
  });

  return (
    <div className={`Cards ${css(styles.cards)}`}>
      <img src={props.imgURI} className={css(styles.img)}/>
      <div className={css(styles.fill)}>
        {
          (props.children)
          ?
            props.children
          :
          <div>
            <h3 className={css(styles.h3)}>{props.header}</h3>
            <p className={css(styles.p)}>{props.detail}</p>
            {props.links.map((link, key) => {
              return <a key={key} className={css(styles.link)} href={link.href}>{link.title.toUpperCase()}</a>
            })}
          </div>
        }
      </div>
    </div>
  );
}

Cards.propTypes = {
  styles: React.PropTypes.object,
  imgURI: React.PropTypes.string.isRequired,
  height: React.PropTypes.number,
  width: React.PropTypes.number,
  imgWidth: React.PropTypes.number,
  imgHeight: React.PropTypes.number,
  header: React.PropTypes.string,
  detail: React.PropTypes.string,
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    link: React.PropTypes.string,
    title: React.PropTypes.string
  })),
  linkColor: React.PropTypes.string
};

export default Cards;
