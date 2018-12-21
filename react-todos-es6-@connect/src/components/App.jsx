import React, {Component} from 'react';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AddTodo/>
                <TodoList/>
                <Footer/>
            </div>
        )
    }
}
