import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: false
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState(currentState => ({
      dark: !currentState.dark
    }));
  }

  render() {
    return (
      <>
        {this.state.dark ? (
          <h1 className="dark">Hello</h1>
        ) : (
          <h1 className="light">Bye Bye</h1>
        )}
        <button onClick={this.clickHandler}>Click me</button>
      </>
    );
  }
}

export default Toggle;
