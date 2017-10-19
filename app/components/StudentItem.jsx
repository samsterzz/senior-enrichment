import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import store from '../store';
import { fetchSingleStudent, removeStudent } from '../reducers/students';

export default class StudentItem extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
    }

    componentDidMount() {
        console.log(this.props)
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
    }

    render() {
        const student = this.state.students.currentStudent;

        return (
            <div>
                <h3>{student.name}</h3>
                <h4>
                    <Link to={`/campuses/${student.campusId}`}>
                        {
                            student.campus ? student.campus.name : "" 
                        }
                    </Link>
                </h4>
                <h4>
                    <button value={student.id} onClick={this.handleClick}>x</button>  
                </h4>
            </div>
        )
    }
}