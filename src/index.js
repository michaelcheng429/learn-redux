import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { UPDATE_APP } from './actions';

function reducer(state, action) {
    if (action.type === UPDATE_APP) {
        return {
            app: action.payload.appValue
        };
    }
    
    return {
        app: 'Hello, I am the state of the app.'
    };
}

const store = createStore(
    reducer,
    window.devToolsExtension()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
