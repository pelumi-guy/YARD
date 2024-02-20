import { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ResetPassword = () => {
    const params = useParams();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const email = params.email;

    const submitHandler = async (e) => {
        e.preventDefault();

        // Add validation for password and confirmPassword here

        setLoading(true);
        console.log({ password, confirmPassword });

        // Simulate an asynchronous action (e.g., API call for password reset)
        // Replace the setTimeout with your actual asynchronous action
        // setTimeout(() => {
        //     setLoading(false);
        //     // Handle the result of the password reset action
        // }, 2000);


    };

    const verifyToken = (token) => {
        
    };

    useEffect(() => {

    })

    return (
        <Fragment>
            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-3">Reset Password</h1>
                        <div className="form-group mt-3">
                            <label htmlFor="password_field">New Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="confirm_password_field">Confirm New Password</label>
                            <input
                                type="password"
                                id="confirm_password_field"
                                className="form-control"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                disabled={loading}
                            />
                        </div>

                        <div className="row mt-3">
                            <div className="col-8">
                                <button type="submit" className="btn px-5 py-2 btn-custom my-0" disabled={loading}>
                                    {loading ? 'Resetting...' : 'Reset Password'}
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

export default ResetPassword;
