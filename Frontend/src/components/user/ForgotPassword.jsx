import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../services/apiService';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        // Assuming you have a backend API endpoint for sending verification email
        try {

            console.log({ email });

            const config = {
                headers: {
                    // 'content-type': 'multipart/form-data'
                    'content-type': 'application/json'
                }
            }

            const { data } = await axiosInstance.post(`/ForgotPassword?email=${email}`, config);

            navigate('/resetpassword');

        } catch (error) {

            console.error('Failed to send verification email');
            // Handle error, maybe show a message to the user
        }

        // const response = await fetch('/ForgotPassword', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ email }),
        // });

        // if (response.ok) {
        //     console.log('Verification email sent successfully');
        //     // Redirect to the reset password page
        //     navigate('/resetpassword');
        // } else {
        //     console.error('Failed to send verification email');
        //     // Handle error, maybe show a message to the user
        // }
    };

    return (
        <Fragment>
            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-3">Forgot Password</h1>
                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <p className='fw-normal' style={{ fontSize: 12 }}>
                            Please enter your registered email
                        </p>
                        <div className="row mt-3">
                            <div className="col-8">
                                <button
                                    type="submit"
                                    className="btn px-5 py-2 btn-custom my-0"
                                >
                                    SEND
                                </button>
                            </div>

                            <div className="col-4">
                                <Link to="/login" className="float-right mt-3">
                                    Login User
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default ForgotPassword;
