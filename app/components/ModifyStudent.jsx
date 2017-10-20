import React, { Component } from 'react';
import axios from 'axios';

export default class ModifyStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            email: props.email,
            campusId: props.campusId,
            campuses: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('/api/campuses')
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

        this.setState({ name: '', email: '', campusId: null });
    }

    render() {
        const campuses = this.state.campuses;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Name: <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange = {this.handleChange} 
                    /></p>
                    <p>Email: <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange = {this.handleChange} 
                    /></p>
                    <p><select onChange={this.handleChange}>
                        <option value={this.state.campusId}>{this.state.campusId}</option>  
                        {
                            campuses.map(campus => 
                                <option key={campus.id} value={campus.id}>{campus.name}</option>
                            )
                        }
                    </select></p>
                    <p><button type="submit">Submit</button></p>
                </form>
            </div>
        )
    }
}