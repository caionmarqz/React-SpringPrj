import { CRUD } from 'pages/CRUD/Index'
import Dashboard from 'pages/Dashboard'
import { Edit } from 'pages/Edit'
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
                    <Route path="/crud">
                        <CRUD />
                    </Route>
                    <Route path="/edit">
                        <Edit />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
