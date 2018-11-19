import './scss/index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/Todo';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
