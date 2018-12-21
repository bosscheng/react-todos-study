/*
* author: wancheng
* date: 2018-12-19
* desc:
*/

import React from "react";
// import FilterLink from './FilterLink';
import {VisibilityFilters} from "../actions";
import Link from './Link';

const Footer = () => (
    <div>
        <span>Show:</span>
        <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
        <Link filter={VisibilityFilters.SHOW_ACTIVE}>Active</Link>
        <Link filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
    </div>
);


export default Footer;
