import { Component } from 'react';

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
    const { children } = this.props;
    const { on } = this.state;
    return children({
      on,
      toggle: this.handleToggle,
    });
  }
}
