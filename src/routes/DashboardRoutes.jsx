import React, { Component } from 'react'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'
import { Switch, Route } from "react-router-dom";
import Welcome from '../components/Welcome';

export default class DashboardRoutes extends Component {
    render() {
        return (
            <div className="d-flex flex-column">
                <Header />
                <div>
                    <Switch>
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route path="/project" component={Welcome} />
                    </Switch>
                </div>
            </div>
        )
    }
}
