import React from 'react';
import { BrowserRouter as Router,Redirect, Route, Switch } from "react-router-dom";
import Sample from "components/sample/sample";
import Hello from "components/hello/hello";


const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/sample" component={Sample} />
                <Route path="/hello" component={Hello} />
                <Redirect exact to="/hello" from="/" />
            </Switch>
        </Router>
    )
}

export default AppRouter;
