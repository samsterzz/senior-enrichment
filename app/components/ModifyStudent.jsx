import React, { Component } from 'react';

export default class ModifyStudent extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            campusId: null,
            campuses: []
        }
    }

    render() {
        return (
            <form>
            </form>
        )
    }
}