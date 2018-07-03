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
    // eslint-disable-next-line
    const { render } = this.props;
    const { on } = this.state;
    return (
      <div>
        {render({
          on,
          toggle: this.handleToggle,
        })}
      </div>
    );
  }
}
