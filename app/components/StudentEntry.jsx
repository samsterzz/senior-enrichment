import React, { Component } from 'react';
import axios from 'axios';

import store from '../store';
import { createStudent } from '../reducers/students';

export default class StudentEntry extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            campusId: null,
            campuses: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.campuses = axios.get('/api/campuses')
            .then(res => res.data)
            .then(campuses => {
                this.setState({ campuses: campuses });
            })
    }

    handleChange(event) {
        if (!isNaN(event.target.value)) {
            this.setState({campusId: Number(event.target.value)})
            return;
        }

        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();

        const entry = this.state;
        store.dispatch(createStudent(entry));

        this.setState({ name: '', email: '' });
    }

    render() {
        const campuses = this.state.campuses;

        return (
            <form onSubmit={this.handleSubmit}>
                Name: <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange = {this.handleChange} 
                />
                Email: <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange = {this.handleChange} 
                /> 
                <select onChange={this.handleChange}>
                    <option value="">Select Campus</option>  
                    {
                        campuses.map(campus => 
                            <option key={campus.id} value={campus.id}>{campus.name}</option>
                        )
                    }
                </select>
                <button type="submit">+</button>
            </form>
        )
    }
}