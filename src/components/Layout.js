import React, { PropTypes } from 'react';
import { style } from 'glamor';

const rule = style({
  label: 'container',
  backgroundColor: 'red',
  ':hover': {
    backgroundColor: 'pink'
  },
  '@media(min-width: 400px)': {
    backgroundColor: 'green',
    ':hover': {
      backgroundColor: 'yellow'
    }
  }
});

const Layout = (props) => {
  return (
    <div {...rule}>
      <header />
      <div className={`layout`}>{props.children}</div>
      <footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
