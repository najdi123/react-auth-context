import React, { createContext, useState } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

export const SignUpContext = createContext();

const SignUpContextProvider = (props) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        error: '',
        success: false
    });
    const {name, email, password, password2, error, success} = formData;

    const handleChange = name => event => {
        setFormData({...formData, error: false, [name]: event.target.value, success: false })
    };

    const handleSubmit = async event => {
        event.preventDefault()

        if (password !== password2) {
            setFormData({...formData, error: 'Passwords do not match'})

            return ''
        } else {
            setFormData({...formData})
            const newUser = {
                name,
                email,
                password
            };
            await axios({
                method: 'post',
                url: 'http://localhost:5001/api/user/signup',
                data: newUser,
            })
                .then(response => {
                    console.log("response");
                    console.log(response);

                    if (response.data.status===200) {
                        console.log('success');
                        setFormData({...formData, success: response.data.message, name: '', email: '', password: '', password2: ''})

                    } else {
                        setFormData({...formData, error: response.data.message, success: false});
                        console.log(response.data.message);
                    }
                })
                .catch(error => (
                    console.log('Error: ', error),
                        setFormData({...formData, error: error, success: false})
                ))
        }
    };

    const showError = () => (
        <div>
            <div className="alert alert-danger text-center" style={{display: error ? '' : 'none'}}>
                {error}
            </div>
        </div>
    );
    const showSuccess = () => (
        <div className="alert alert-success text-center" style={{display: success ? '' : 'none'}}>
            {/*New account has been created successfully. Please sign in.*/}
            {success}
        </div>
    );

    return (
        <SignUpContext.Provider value={{ ...formData, handleChange, handleSubmit, showError, showSuccess }}>
            {props.children}
        </SignUpContext.Provider>
    );
};

export default SignUpContextProvider;