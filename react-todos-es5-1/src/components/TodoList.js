/*
* author: wancheng
* date: 2018-12-19
* desc:
*/
import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

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

export default TodoList;
