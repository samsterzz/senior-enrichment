import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends Component {

    render() {
        return (
            <sidebar>
                <ul>
                    <li>
                        <NavLink to="/campuses/add">Create Campus</NavLink>
                    </li>
                    <li>
                        <NavLink to="/students/add">Create Student</NavLink>
                    </li>
                </ul>
            </sidebar>
        )
    }
}