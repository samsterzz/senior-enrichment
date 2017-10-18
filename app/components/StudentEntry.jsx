import React, { Component } from 'react';
import store from '../store';
import { createStudent } from '../reducers/students';

export default class StudentEntry extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {      
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();

        const entry = this.state;
        store.dispatch(createStudent(entry));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange = {this.handleChange} 
                />
                <input
                    type="text"
                    name="email"
                    onChange = {this.handleChange} 
                /> 
                <button type="submit">x</button>
            </form>
        )
    }
}