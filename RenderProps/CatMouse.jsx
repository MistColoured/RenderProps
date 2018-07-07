import React, { Component } from 'react';

/* eslint-disable */

class Cat extends Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="./RenderProps/images/cat.jpeg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

class Mouse extends Component {
  state = {
    x: 0,
    y: 0
  }
  handleMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  render() {
    const { draw } = this.props;
    return (
      <div style={{ height: '800px' }} onMouseMove={this.handleMove}>
        {draw(this.state)}
      </div>
    )
  }
}

export default class MouseTracker extends Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse draw={(mouse) => (
          <Cat mouse={mouse} />
        )}
        />
      </div>
    );
  }
}
