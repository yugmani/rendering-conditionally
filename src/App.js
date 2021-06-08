import React, { Component } from 'react';
import './style.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isLoggedIn:false};

    this.ifLoginClicked = this.ifLoginClicked.bind(this);

    this.ifLogoutClicked = this.ifLogoutClicked.bind(this);
  }

  ifLoginClicked() {
    this.setState({isLoggedIn: true});
  }

  ifLogoutClicked() {
    this.setStte({isLoggedIn:false});
  }


render(){
  return (
    <div>
   {
     (this.state.isLoggedIn)?(<Logout clickFunc = {this.ifLogoutClicked} />
             ):(<Login clickFunc = {this.ifLoginClicked} />)
}
    </div>
  )
}
}
export default App;
