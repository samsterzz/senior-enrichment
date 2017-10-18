import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class CampusItem extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get(`/api/${this.props.match.url}`)
            .then(res => res.data)
            .then(campus => this.setState(campus));
    }

    render() {
        const campus = this.state;
        return (
            <div>
                <h3>{campus.name}</h3>
                <ul>
                    {   
                        campus.students ? (
                            campus.students.map(student => 
                                <li key={student.id}>
                                    <Link to={`/students/${student.id}`}>
                                        {student.name}
                                    </Link>
                                </li>
                            )
                        ) : ""
                    }
                </ul>
            </div>
        )
    }
}