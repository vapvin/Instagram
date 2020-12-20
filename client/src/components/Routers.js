import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../views/Home';
import Join from '../views/Join';
import Login from '../views/Login';
import FindPassword from '../views/FindPassword';

function Routers(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/join" component={Join}/>
                <Route path="/login" component={Login}/>
                <Route path="/findpassword" component={FindPassword}/>
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
}

export default Routers;