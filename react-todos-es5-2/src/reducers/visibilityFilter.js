/*
* author: wancheng
* date: 2018-12-19
* desc:
*/


import {VisibilityFilters} from "../actions";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {

    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state
    }
};

export default visibilityFilter;
