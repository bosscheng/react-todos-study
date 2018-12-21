/*
* author: wancheng
* date: 2018-12-19
* desc:
*/

import React from 'react';
import ReactDom from 'react-dom';

import {createStore} from "redux";
import {Provider} from 'react-redux';

import App from './components/App';

// reducer
import reducer from './reducers';

const store = createStore(reducer);


ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);

