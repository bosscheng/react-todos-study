import React, {Component} from 'react';
import { connect } from 'react-redux'
import {addTodo} from "../actions";


@connect()
export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.$input = '';
    }

    render() {
        let {dispatch} = this.props;
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    if (!this.$input.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(this.$input.value));
                    this.$input.value = '';

                }}>
                    <input type="text" ref={node => {
                        this.$input = node
                    }}/>
                    <button type='submit'>Add Todo</button>
                </form>
            </div>
        )
    }
}

