import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';

import Splash from "./splash/splash"
import NavBarContainer from "./nav/navbar_container";
import MainContainer from "./main/main_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import CreateGroupContainer from "./groups/create_group_form_container";

const App = () => (
    <div className="custom-body">
        
        <div className="wrapper">
            <header>
                <NavBarContainer />
            </header>
            <div className="custom-main">
                <main >
                    <Switch>

                        <ProtectedRoute exact path="/main" component={MainContainer} />
                        <ProtectedRoute exact path="/groups/new" component={CreateGroupContainer} />

                        <AuthRoute exact path="/" component={Splash} />
                        <AuthRoute exact path="/login" component={LoginFormContainer} />
                        <AuthRoute exact path="/signup" component={SignupFormContainer} />

                        <Redirect to='/' />
                        <Route path='/' component={Splash} />
                    </Switch>
                </main>
            </div>
            <footer className="page-footer teal lighten-2" style={{ bottom: "0", position: "fixed", width: "100%", height: "50px" }}>
                
            </footer>
        </div>
    </div>
);

export default App;