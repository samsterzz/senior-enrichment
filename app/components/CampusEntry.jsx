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

        this.setState({ name: '', image: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Name: <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange = {this.handleChange} 
                />
                Image: <input
                    type="text"
                    name="image"
                    value={this.state.image}
                    onChange = {this.handleChange} 
                /> 
                <button type="submit">+</button>
            </form>
        )
    }
}