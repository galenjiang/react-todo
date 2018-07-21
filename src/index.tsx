import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './Todo';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
