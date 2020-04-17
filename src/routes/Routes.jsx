import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from '../components/Welcome';
import DashboardRoutes from './DashboardRoutes';
import '../assets/style/styles.css'
import '../assets/style/component.css'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/dashboard" component={DashboardRoutes} />
            </Switch>
        </Router>
    )
}
