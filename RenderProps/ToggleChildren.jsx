import React, { Component } from 'react';

const App = () => (
  <div>
    <button>Click Me! (in App)</button>
    <Toggle>
      Can you see me
    </Toggle>
  </div>
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
    const { children } = this.props;
    return (
      <div>
        <button onClick={this.handleToggle}>
          Click Me! (In Toggle)
        </button>
        {visible && children}
      </div>
    );
  }
}

export default App;
