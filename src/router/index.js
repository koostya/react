import React from 'react'

import Registration from '../containers/Registration'
import App from '../containers/App'

import { isUserAuthorized } from './utils/isUserAuthorized'

import { Router, Route, Redirect } from 'react-router-dom'

export const routes = (
    <div>
        <Route path="/list" component={App} />
        <Route path="/login" component={Registration} />
        {isUserAuthorized() ?
            <Redirect to="/list" />
            :
            <Redirect to="/login" />
        }
    </div>
)