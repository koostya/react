import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { registration as Registration } from '../containers/Registration'
import { app as App } from '../containers/App'

const routes = (
    <Route path="/" component={Registration}>
        <Route path="/list" component={App} />
    </Route>
)

export default routes