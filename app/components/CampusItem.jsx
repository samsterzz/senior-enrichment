import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import store from '../store';
import { fetchSingleCampus, removeStudentFromCampus } from '../reducers/campuses';

export default class CampusItem extends Component {

    constructor() {
        super();
        this.state = store.getState();
    }

    componentDidMount() {
        const id = Number(this.props.match.params.id);
        store.dispatch(fetchSingleCampus(id));

        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleClick(event) {
        const id = Number(event.target.value);
        store.dispatch(removeStudentFromCampus(id))
    }

    render() {
        const campus = this.state.campuses.currentCampus;

        return (
            <div>
                <h3>{campus.name}</h3>
                <ul>
                    {   
                        campus.students ? (
                            campus.students.map(student => 
                                <li key={student.id}>
                                    <Link to={`/students/${student.id}`}>
                                        {student.name}
                                    </Link>
                                    <button 
                                        value={student.id}
                                        onClick={this.handleClick}>x
                                    </button>  
                                </li>
                            )
                        ) : ""
                    }
                </ul>
                <img src={campus.image} />
            </div>
        )
    }
}