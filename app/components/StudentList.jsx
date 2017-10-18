import React, { Component } from 'react';
import axios from 'axios';
import store from '../store';
import { getStudentsFromServer } from '../reducers/students';
import { Link } from 'react-router-dom';

export default class StudentList extends Component {

    constructor() {
        super();
        this.state = store.getState();
    }

    componentDidMount() {
        axios.get('/api/students')
            .then(res => res.data)
            .then(students => {
                const action = getStudentsFromServer(students);
                store.dispatch(action);
            });
        
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const students = this.state.students.students;

        return (
            <div>
                <ul>
                    {
                        students.map(student => 
                            <li key={student.id}>
                                <Link to={`/students/${student.id}`}>
                                    {student.name}
                                </Link>
                            </li>
                        )
                    }   
                </ul>  
            </div>
        )
    }
}