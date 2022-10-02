import React, { Component } from 'react';
import AppHeader from '../app-header';
import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    };

    //all actions with tweets 

    render() {
             return (
            <div className="app">
                <AppHeader />
            </div>
        )
    }
}