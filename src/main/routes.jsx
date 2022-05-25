import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Dashboard from '../dashboard/dashboard'
import FinancialControl from '../financialControl/financialControl'
import Payment from "../payment/payment";

export default props => (
    <div className="content-wrapper">
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/financialControls' component={FinancialControl} />
            <Route path='/payments' component={Payment} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)