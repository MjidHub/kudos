import React from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from './App';
import Login from './containers/login/login';
import Signup from './containers/signup/signup';
import NotFound from './not-found/not-found';
import TopBar from './navbar/top-bar/top-bar';

const routing = (
    <Router>
        <div>
            <TopBar/>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route th="/signup" component={Signup} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default routing;