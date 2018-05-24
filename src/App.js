import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { updateApp } from './actions';

class App extends Component {
  render() {
    return (
      <div>
        <input onChange={this.props.onUpdateApp} />
        {this.props.app}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  onUpdateApp: updateApp
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
