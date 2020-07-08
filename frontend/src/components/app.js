import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavBarContainer from "./nav/navbar_container";
import MainContainer from "./main/main_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import CreateGroupContainer from "./groups/create_group_form_container";

const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>    
        <Switch>

            <ProtectedRoute exact path="/main" component={MainContainer} />
            <ProtectedRoute exact path="/groups/new" component={CreateGroupContainer} />
            

            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

            <Redirect to='/main' />
            <Route path='/' component={MainContainer} />
        </Switch>
    </div>
);

export default App;