import React, { Fragment } from 'react';

import Toggle from './RenderProps/ToggleChildren';
import Portal from './RenderProps/Portal';

const App = () => (
  <div>
    <Toggle>
      {({ on, toggle }) => (
        <Fragment>
          {on && <h1>Shown Me</h1>}
          <button onClick={toggle}>Show/Hidden</button>
          <Portal>
            {on && <h1>Hi, I am a Portal</h1>}
          </Portal>
        </Fragment>
      )}
    </Toggle>

  </div>
);

export default App;
