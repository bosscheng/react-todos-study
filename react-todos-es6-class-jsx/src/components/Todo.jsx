import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {onClick, completed, text} = this.props;
        return (
            <li onClick={onClick} style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}>
                {text}

            </li>
        )
    }
}


//
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};
