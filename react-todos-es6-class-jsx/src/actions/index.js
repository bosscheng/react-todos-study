/*
* author: wancheng
* date: 2018-12-19
* desc:
*/

let nextTodoId = 0;

// 直接返回一个 对象， 需要用 括号（）包裹起来。
// 如果是 { } ，大括号则被解释为 代码块。
export const addTodo = text => ({
    type: "ADD_TODO",
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

