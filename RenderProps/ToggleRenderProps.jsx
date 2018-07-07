import React, { Component } from 'react';

const App = () => (
  <Toggle
    draw={({ visible, toggle }) => (
      <div>
        <button onClick={toggle}>Click Me (in App)</button>
        {visible && <p>Can you see me?</p>}
      </div>
    )}
  />
);

class Toggle extends Component {
  state = {
    visible: false,
  }

  handleToggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  }

  render() {
    const { visible } = this.state;
    // eslint-disable-next-line
    const { draw } = this.props;
    return (
      <div>
        <button onClick={this.handleToggle}>Click Me! (In Toggle)</button>
        {draw({
          visible,
          toggle: this.handleToggle,
        })}
      </div>
    );
  }
}

export default App;
