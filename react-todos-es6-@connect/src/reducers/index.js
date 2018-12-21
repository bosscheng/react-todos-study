/*
* author: wancheng
* date: 2018-12-19
* desc:
*/

import {combineReducers} from "redux";
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
    todos,
    visibilityFilter
})
