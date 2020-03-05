import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import SignUpContextProvider from "./context/SignUpContext";
import SignInContextProvider from "./context/SignInContext";

const App = () => {
    return (
        <SignUpContextProvider>
            <SignInContextProvider>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/admin' component={Admin}/>

                    <Route exact path='/signup' component={SignUp}/>
                    <Route exact path='/signin' component={SignIn}/>

                </Switch>
            </Router>
            </SignInContextProvider>
        </SignUpContextProvider>
    );
}

export default App;
