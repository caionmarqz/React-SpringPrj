import Dashboard from 'pages/Dashboard'
import Home from 'pages/Home'
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
