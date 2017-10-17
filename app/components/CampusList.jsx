import React, { Component } from 'react';
import axios from 'axios';
import store from '../store';
import { getCampusesFromServer } from '../reducers';

export default class CampusList extends Component {

    constructor() {
        super();
        this.state = store.getState();
    }

    componentDidMount() {
        axios.get('/api/campuses')
            .then(res => res.data)
            .then(campuses => {
                const action = getCampusesFromServer(campuses);
                store.dispatch(action);
            });
        
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const campuses = this.state.campuses;
        {console.log(campuses)}
        return (
            <div>
                <ul>
                     {campuses.map(campus => <li key={campus.id}>{campus.name}</li>)} 
                </ul>  
            </div>
        )
    }
}