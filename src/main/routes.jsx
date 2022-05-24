import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Dashboard from '../dashboard/dashboard'
import FinancialControl from '../financialControl/financialControl'

export default props => (
    <div className="content-wrapper">
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/financialControls' component={FinancialControl} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)