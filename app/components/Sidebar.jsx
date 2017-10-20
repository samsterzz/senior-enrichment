import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends Component {

    render() {
        return (
            <sidebar>
                <ul>
                    <li>
                        <NavLink activeClassName="active" to="/campuses/add">CREATE CAMPUS</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/students/add">CREATE STUDENT</NavLink>
                    </li>
                </ul>
            </sidebar>
        )
    }
}