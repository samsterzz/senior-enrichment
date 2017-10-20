import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import history from '../history';

import store from '../store';
import { fetchSingleStudent, removeStudent } from '../reducers/students';
import ModifyStudent from './ModifyStudent';

export default class StudentItem extends Component {

    constructor() {
        super();
        this.state = store.getState();
    }

    componentDidMount() {
        const id = Number(this.props.match.params.id);
        store.dispatch(fetchSingleStudent(id));

        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleClick(event) {
        const id = Number(event.target.value);
        store.dispatch(removeStudent(id))

        history.goBack();
    }

    render() {
        const student = this.state.students.currentStudent;

        return (
            <div>
                <h3>{student.name}</h3>
                <h4>
                    <p>{student.email}</p>
                    <p><Link to={`/campuses/${student.campusId}`}>
                        {
                            student.campus ? student.campus.name : "" 
                        }
                    </Link></p>
                </h4>
                <p>---</p>
                <h4>Modify:</h4>
                { 
                    student.name.length ? <ModifyStudent name={student.name} email={student.email} campusId={student.campusId} /> : null 
                }
                <button value={student.id} onClick={this.handleClick}>Remove</button> 
            </div>
        )
    }
}