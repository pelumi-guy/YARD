import React, { Fragment } from 'react';
import Search from './Search';
import Button from '../elements/Button';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/authActions';
import { toast } from 'react-toastify';
import Logo from "../../assets/images/YardLogo.svg";

const Header = () => {

    const dispatch = useDispatch();

    const { loading, user } = useSelector((state) => state.authentication);

    const logoutHandler = () => {
        dispatch(logout());
        toast.success("Logged out successfully");
    };


    return (
        <header>
            <nav
                className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow my-0">
                <div className="container-fluid">
                    <div className="navbar-brand align-items-center">
                        <Link to="/" className="logo text-center h3" style={{ textDecoration: "none" }}>
                            {/* <span id="stay">YARD</span>
                            <span id="cation">cation</span> */}
                            <img src={Logo} alt="logo" className='img-fluid' style={{ width: "150px" }} />

                        </Link>

                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">

                        <div className="mt-2 mt-md-0 ms-5 col-12 col-md-4 text-center align-items-center px-0">
                            {/* <Route render={({ history }) => <Search history={history} />} /> */}
                            <Search />
                        </div>

                        <ul className="navbar-nav flex-grow-1">
                            <li className="nav-item ms-auto d-flex align-items-center">
                                <Link to="/" className="nav-link text-dark">
                                    <div className="nav-active active">Home</div>
                                </Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <Link to="/search/hotel" className="nav-link text-dark">
                                    <div className="nav-active">Browse By</div>
                                </Link>
                            </li>
                            {/* <li className="nav-item d-flex align-items-center">
                                <a className="nav-link text-dark">
                                    <div className="nav-active">Stories</div>
                                </a>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <a className="nav-link text-dark">
                                    <div className="nav-active">Agents</div>
                                </a>
                            </li> */}
                            <li className="nav-item">
                                {
                                    user ? (
                                        <div className="dropdown">
                                            <button
                                                className="btn dropdown-toggle"
                                                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                                                style={{ border: 0 }}>
                                                {/* <figure className="avatar avatar-nav">
                                                    <img
                                                        src={user && user.profilePictureUrl}
                                                        alt={user && user.firstName}
                                                        className="rounded-circle"
                                                    />
                                                </figure> */}
                                                <span className='font-weight-bold'>Hello {user && user.firstName} 👋🏾</span>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li>
                                                    <Link
                                                        className="dropdown-item"
                                                        to="/profile"
                                                    // onClick={}
                                                    >
                                                        Profile
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item"
                                                        to="/booking"
                                                    // onClick={}
                                                    >
                                                        My Booking History
                                                    </Link>
                                                </li>
                                                <li>
                                                    {user.email === "john.olaleyemi@decagon.dev" &&<Link
                                                        className="dropdown-item"
                                                        to="/admin/hotelslist"
                                                        // onClick={logoutHandler}
                                                    >
                                                        Dashboard
                                                    </Link>}
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item text-danger"
                                                        to="/"
                                                        onClick={logoutHandler}
                                                    >
                                                        Logout
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <Link to="/login" className="nav-link">
                                            <button className='btn btn-primary px-4'>Login</button>
                                        </Link>)
                                }
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header >
    )
}

export default Header;