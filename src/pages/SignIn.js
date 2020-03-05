import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";

import {SignInContext} from "../context/SignInContext";

const SignIn = () => {

    const { signInData, clickSubmit, handleChange, showError, showSuccess } = useContext(SignInContext);
    const {email, password, error, success} = signInData;

    return (
        <div>


            {showSuccess()}

            {showError()}

            <form action="" className="container col-8 offset-2">
                <div className="form-group">

                </div>
                <div className="form-group">
                    {/*<label className="text-muted">Email</label>*/}
                    <input
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        type="email"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    {/*<label className="text-muted">Password</label>*/}
                    <input
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        type="password"
                        className="form-control"/>
                </div>

                <button onClick={clickSubmit} className="btn btn-primary">Sign In</button>
                <p>Don't have an account? <Link to="./signup">Register</Link></p>
            </form>

        </div>


    )
}
export default SignIn;

