import { Component } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal');

export default class Portal extends Component {
  // Create a div that we'll render the modal into. Because each
  // Modal component has its own element, we can render multiple
  // modal components into the modal container.
  el = document.createElement('div');

  componentDidMount = () => {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    portalRoot.appendChild(this.el);
  }

  componentWillUnmount = () => {
    // Remove the element from the DOM when we unmount
    portalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    // Use a portal to render the children into the element
    return ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      children,
      // A DOM element
      this.el,
    );
  }
}
