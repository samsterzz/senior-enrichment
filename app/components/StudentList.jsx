import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import store from '../store';
import { fetchStudents, removeStudent } from '../reducers/students';

export default class StudentList extends Component {

    constructor() {
        super();
        this.state = store.getState();

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        store.dispatch(fetchStudents());
        
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
        const students = this.state.students.students;
        let event;
        return (
            <div>
                <ul>
                    {
                        students.map(student => 
                            <li key={student.id}>
                                <Link to={`/students/${student.id}`}>
                                    {student.name}
                                </Link>
                                <button value={student.id} onClick={this.handleClick}>x</button>  
                            </li>
                        )
                    }   
                </ul>  
            </div>
        )
    }
}