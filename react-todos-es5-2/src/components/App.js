/*
* author: wancheng
* date: 2018-12-19
* desc:
*/


import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
// import VisibleTodoList from './VisibleTodoList';
import TodoList from './TodoList';

const App = () => (
    <div>
        <AddTodo/>
        <TodoList/>
        <Footer/>
    </div>
);

export default App;
