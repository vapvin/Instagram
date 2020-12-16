import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../views/Home';
import Join from '../views/Join';

function Routers(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/join" component={Join}/>
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
}

export default Routers;