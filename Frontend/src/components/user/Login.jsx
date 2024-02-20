import { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/authActions';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


const BASEURL = 'http://localhost:5065';

const loginHack = async (email, password) => {
    try {
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }

        const { data } = await axios.post(`${BASEURL}/Login`, { email, password }, config);
        localStorage.setItem('token', data);

        console.log(data);

    } catch (err) {
        console.error(err);
    }
};

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    // const alert = useAlert();
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const location = useLocation();

    // const firstRender = useFirstRender();

    const { isAuthenticated, error, loading } = useSelector(state => state.authentication);

    // const redirect = location.search ? `/${location.search.split('=')[1]}` : '/'

    useEffect(() => {

        // if (location.search) {
        //     if (firstRender) {
        //         dispatch(loadUser());
        //     }

        //     if (error) {
        //         // if (!firstRender) alert.error(error);
        //         alert.error(error);
        //         dispatch(clearAuthErrors());
        //     }

        //     if (redirect) {
        //         if (isAuthenticated) {
        //             navigate(redirect)
        //         }
        //     }

        //     return
        // }

        if (isAuthenticated) {
            toast.success("Logged in successfully");
            navigate('/')
        }

        // if (error) {
        //     // if (!firstRender) alert.error(error);
        //     alert.error(error);
        //     dispatch(clearAuthErrors());
        // }

    }, [dispatch, isAuthenticated, error, navigate])

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log({ email, password });
        dispatch(login(email, password));


        // login(email, password);
    }

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
      };

      const passwordInputType = showPassword ? "text" : "password";

    return (
        <Fragment>
            {/* {loading ? <Loader /> : ( */}
            <Fragment>
                {/* <MetaData title={'Login'} /> */}

                <div className="row wrapper login" style={{color:"white"}}>
                    <div className="col-10 col-lg-5">
                        <form className="" onSubmit={submitHandler}>
                            <h1 className="mb-3">Login</h1>
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

                            <div className="form-group mt-3">
                                <label htmlFor="password_field">Password</label>
                                <input
                                    type={passwordInputType}
                                    id="password_field"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <input type="checkbox" onChange={handleTogglePassword}/>Show Password

                                {/* <Link to="/password/forgot" className="float-right mb-4">Forgot Password?</Link> */}
                            </div>

                            <Link to="/admin/forgotpassword" className="float-right mb-4 text-white">Forgot Password?</Link>

                            {/*
                            <div className="row mt-3">
                                <div className="d-block show-border">
                                    <button type="submit" className="btn px-5 py-2 btn-custom my-0 ">
                                        LOGIN
                                    </button>
                                </div> */}




                            {/* <div className="show-border col-4">

                                </div> */}
                            {/* </div>

                            <Link to="/signup" className="mt-3">New User?</Link> */}


                            <button
                                id="login_button"
                                type="submit"
                                className="btn btn-block py-3"
                            >
                                LOGIN
                            </button>
                            <br/>

                            <div className=''>
                                {/* <center> */}
                                <Link to="/signup" className="link-light fs-4 fw-bold " style={{ textDecoration: "none" }}>New User?</Link>
                                {/* </center> */}
                                </div>
                        </form>
                    </div>
                </div>
            </Fragment>
            {/* )} */}
        </Fragment>
    )
}

export default Login
