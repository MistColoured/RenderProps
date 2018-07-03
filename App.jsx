import React, { Fragment } from 'react';

import Toggle from './RenderProps/ToggleChildren';

const App = () => (
  <div>
    <Toggle>
      {({ on, toggle }) => (
        <Fragment>
          {on && <h1>Shown Me</h1>}
          <button onClick={toggle}>Show/Hidden</button>
        </Fragment>
      )}
    </Toggle>
  </div>
);

export default App;
