import React, { Component } from 'react';
import './style.css';
import Message from './components/Message';
import Login from './components/Login';
import Logout from './components/Logout';
import Toggle from './components/Toggle';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoggedIn: false };

    this.ifLoginClicked = this.ifLoginClicked.bind(this);

    this.ifLogoutClicked = this.ifLogoutClicked.bind(this);
  }

  ifLoginClicked() {
    this.setState({ isLoggedIn: true });
  }

  ifLogoutClicked() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    return (
      <div className="app">
        <Message isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout clickFunc={this.ifLogoutClicked} />
        ) : (
          <Login clickFunc={this.ifLoginClicked} />
        )}
        <Toggle />
      </div>
    );
  }
}
export default App;
