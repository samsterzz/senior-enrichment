import React, { Component } from 'react';
import store from '../store';
import { createCampus } from '../reducers/campuses';

export default class CampusEntry extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            image: ''
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
        store.dispatch(createCampus(entry));
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
                    name="image"
                    onChange = {this.handleChange} 
                /> 
                <button type="submit">x</button>
            </form>
        )
    }
}