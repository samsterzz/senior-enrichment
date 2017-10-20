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
            <div>
                <h3>Create Campus</h3>
                <form onSubmit={this.handleSubmit}>
                    <p>Name: <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange = {this.handleChange} 
                    /></p>
                    <p>Image: <input
                        type="text"
                        name="image"
                        value={this.state.image}
                        onChange = {this.handleChange} 
                    /></p>
                    <p><button type="submit">Submit</button></p>
                </form>
            </div>
        )
    }
}