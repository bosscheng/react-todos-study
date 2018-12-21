/*
* author: wancheng
* date: 2018-12-19
* desc:
*/
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggleTodo} from "../actions";
import Todo from './Todo';
import {VisibilityFilters} from "../actions";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

// 类似于 getter
const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

const TodoList = ({todos, toggleTodo}) => {
    return (
        <ul>
            {todos.map(todo => {
                return (
                    <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}/>
                )
            })}
        </ul>
    )
};

TodoList.propTypes = {
    // 内部结构 判断
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired
};

// export default TodoList;

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
