import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class StudentItem extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get(`/api/${this.props.match.url}`)
            .then(res => res.data)
            .then(student => this.setState(student));
    }

    render() {
        const student = this.state;

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
            </div>
        )
    }
}