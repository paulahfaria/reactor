import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { add } from '../actions/test';

class Home extends Component {
  static propTypes = {
    test: PropTypes.number,
    add: PropTypes.func
  }

  render() {
    return (
      <div className="home-page">
        <Helmet title="Home" />
        <Link to="/blog">Go to Blog</Link>
        <p>{this.props.test}</p>
        <button onClick={() => { this.props.add(1); }}>Add</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    test: state.test
  };
}

export default connect(mapStateToProps, { add })(Home);
