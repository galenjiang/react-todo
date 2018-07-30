import './scss/index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/TodoApp';
import { createEpicMiddleware } from 'redux-observable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux'
import rootReducer from './store/reducers'
import { epic } from "./store/actions";

const epicMiddleware =createEpicMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
)

epicMiddleware.run(epic)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
