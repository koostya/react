import React, { Component } from 'react'

import Login from '../containers/Login'
import Registration from '../containers/Registration'
import App from '../containers/App'

import { isUserAuthorized } from './utils/isUserAuthorized'

import { Route, Redirect, Switch } from 'react-router-dom'

class Routes extends Component {
    render() {
        return(
            <Route path="/" render={() =>
                <Switch>
                    <Route path="/list" component={App} />
                    <Route path="/registration" component={Registration} />
                    <Route path="/login" component={Login} />
                    {isUserAuthorized() ?
                        <Redirect to="/list" />
                        :
                        <Redirect to="/login" />
                    }
                </Switch>
            }>
                {this.props.children}
            </Route>
        )
    }
}

export default Routes
