import React, {createContext, useState} from 'react';
import axios from "axios";

export const SignInContext = createContext();

const SignInContextProvider = (props) => {

    const [formData, setFormData] = useState({

        email: '',
        password: '',

        error: '',
        success: false
    })

    const {email, password, error, success} = formData;


    const clickSubmit = async event => {
        event.preventDefault()

        setFormData({...formData})

        await axios.interceptors.response.use((response) => {
            // do something with the response data
            // console.log('Response was received');

            return response;
        }, error => {
            // handle the response error
            // console.log(error.response.data.message)
            setFormData({...formData, error: error.response.data.message, success: false})
            return Promise.reject(error.response.data.message);
        });


        await axios({
            method: 'post',
            url: 'http://localhost:5001/api/user/signin',
            data: {email, password}
        })
            .then((response) => {
                    console.log(response);
                    if (response.data.status===200) {
                        setFormData({...formData, success: response.data.message});
                        localStorage.setItem('myData', response.data.token);
                        localStorage.setItem('type', response.data.type);
                    }
                    else {
                        setFormData({...formData, error: response.data.message, success: false});
                    }
                },
                (error) => (
                    console.log(error),
                        setFormData({...formData, error: error, success: false})
                ));

    }



    const handleChange = name => event => {
        setFormData({...formData, error: false, [name]: event.target.value})
    };

    const showError = () => (
        <div>
            <div className="alert alert-danger text-center" style={{display: error ? '' : 'none'}}>
                {error}
            </div>
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-success text-center" style={{display: formData.success ? '' : 'none'}}>
            {success}
        </div>
    );

    return (
        <SignInContext.Provider value={{ ...formData, clickSubmit, handleChange, showError, showSuccess }}>
            {props.children}
        </SignInContext.Provider>
    );
};

export default SignInContextProvider;