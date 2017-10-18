import React, { Component } from 'react';

export default class CampusEntry extends Component {

    constructor() {
        super();
        this.state = store.getState();
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleChange(event) {
        
    }

    render() {
        return (
            <form>
            </form>
        )
    }
}