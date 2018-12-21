import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {setVisibilityFilter} from "../actions";


// 函数允许我们将 store 的数据作为 props 绑到组件上面去。
const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

// 函数允许我们将 action 作为 props 绑到组件上面去。
const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatchStoreByProxy(type, data) {
        dispatch(type, data);
    },

    // 函数内部直接 dispatch ，做到应用的解耦。
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Link extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {onClick, active, children} = this.props;
        return (
            <button
                onClick={onClick}
                disabled={active}
                style={{marginLeft: '4px'}}
            >
                {children}
            </button>
        )
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
};


