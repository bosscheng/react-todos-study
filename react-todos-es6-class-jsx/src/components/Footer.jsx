import React, {Component} from 'react';
import Link from "./Link";
import {VisibilityFilters} from "../actions";

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>Show:</span>
                <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
                <Link filter={VisibilityFilters.SHOW_ACTIVE}>Active</Link>
                <Link filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
            </div>
        )

    }
}
