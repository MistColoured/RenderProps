import React, { Component } from 'react';

export default class Toggle extends Component {
  state = {
    on: false,
  }

  handleToggle = () => {
    this.setState(prevState => ({
      on: !prevState.on,
    }));
  }

  render() {
    const { on } = this.state;
    // eslint-disable-next-line
    const { children } = this.props;
    return (
      <div>

        <button onClick={this.handleToggle}>Show/Hide</button>
        {on && children}
      </div>
    );
  }
}
