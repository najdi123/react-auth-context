import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

import SignUpContext from "../context/SignUpContext";

const SignUp = () => {

    const { formData, handleChange, handleSubmit, showError, showSuccess } = useContext(SignUpContext);
    const {name, email, password, password2, error, success} = formData;

    return (
        <div>
            {showError()}
            {showSuccess()}
            {/*{error ? <h2 className="danger">{error}</h2> : ''}*/}
            <form action="" className="container col-8 offset-2 mt-4">
                <div className="form-group">
                    {/*<label className="text-muted">Name</label>*/}
                    <input
                        placeholder="Name"
                        onChange={handleChange('name')}
                        type="text"
                        className="form-control"
                        value={name}
                    />
                </div>
                <div className="form-group">
                    {/*<label className="text-muted">Email</label>*/}
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={handleChange('email')}
                        type="email" className="form-control"
                    />
                </div>
                <div className="form-group">
                    {/*<label className="text-muted">Password</label>*/}
                    <input
                        placeholder="Password"
                        value={password}
                        onChange={handleChange('password')} type="password" className="form-control"/>
                </div>
                <div className="form-group">
                    {/*<label className="text-muted">Password</label>*/}
                    <input
                        placeholder="Repeat Password"
                        value={password2}
                        onChange={handleChange('password2')} type="password" className="form-control"/>
                </div>
                <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                <p>Already have an account? <Link to="./signin" >Sign In</Link> </p>
            </form>
        </div>
    );
};

export default SignUp;