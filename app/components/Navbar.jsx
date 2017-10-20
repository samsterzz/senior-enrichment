import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {

  render () {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/home">CAMPUSES</NavLink>
                </li>
                <li>
                     <NavLink activeClassName="active" to="/students">STUDENTS</NavLink> 
                </li>
            </ul>
        </nav>
    );
  }
}