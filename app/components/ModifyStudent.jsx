import React, { Component } from 'react';

export default class ModifyStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            campusId: null,
            campuses: []
        }
        console.log('this props', this.props)
        console.log(props)
    }

    render() {
        return (
            <div>Modify</div>
        )
    }
}