import './scss/index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/TodoApp';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux'
import rootReducer from './store/reducers'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
