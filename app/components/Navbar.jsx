import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {

  render () {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                     <NavLink to="/students">Students</NavLink> 
                </li>
            </ul>
        </nav>
    );
  }
}