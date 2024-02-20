import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { register } from "../../actions/authActions";
import axios from "axios";

import default_avatar from "../../assets/images/signup/default_avatar.jpg"

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    profilePictureUrl: "https://res.cloudinary.com/do5lofza7/image/upload/v1705554112/YardApp/avatars/DefaultAvatar_fnsqn3.jpg",
    confirmPassword: "",
    password: "",
    address: {
      country: "",
      state: "",
      city: "",
      street: "",
      postalCode: ""
    }
  });

  const { email, firstName, lastName, password, confirmPassword, address } = user;
  const { country, state, city, street, postalCode } = address;
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);

  // const [avatar, setAvatar] = useState("");
  // const [avatarPreview, setAvatarPreview] = useState(
  //   default_avatar
  // );

  // const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.authentication
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearAuthErrors());
  //   }
  }, [dispatch, isAuthenticated, error, navigate]);

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.set("name", name);
  //   formData.set("email", email);
  //   formData.set("password", password);
  //   formData.set("avatar", avatar);

  //   dispatch(register(formData));
  // };

  const signupHack = async (userData) => {
    try {
      const config = {
        headers: {
          'content-type': 'application/json'
        }
      }

      const { data } = await axios.post('register', userData, config);
      localStorage.setItem('token', data);

      console.log(data);

    } catch (err) {
      console.error(err);
    }
  }

  const submitWithJson = (e) => {
    e.preventDefault();

    const jsonData = JSON.stringify(user);

    console.log(jsonData);

    dispatch(register(jsonData));

    //   const newUserData = {};
    //   newUserData.name = name;
    //   newUserData.email = email;
    //   newUserData.password = password;
    //   newUserData.avatar = avatar;

    //   dispatch(register(JSON.stringify(newUserData)));
  };

  const onChange = (e) => {

    // console.log({ [e.target.name]: e.target.value })

    setUser({ ...user, [e.target.name]: e.target.value });
    //   if (e.target.name === "avatar") {
    //     const reader = new FileReader();

    //     reader.onload = () => {
    //       if (reader.readyState === 2) {
    //         setAvatarPreview(reader.result);
    //         setAvatar(reader.result);
    //       }
    //     };

    //     reader.readAsDataURL(e.target.files[0]);
    //   } else {
    //     setUser({ ...user, [e.target.name]: e.target.value });
    // }
  };

  const onChangeAddress = (e) => {
    const address = { ...user.address, [e.target.name]: e.target.value };
    setUser({ ...user, address });
  };


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePasswords = () => {
    setShowPasswords(!showPasswords);
  };

  const passwordInputType = showPassword ? "text" : "password";
  const passwordInputTypes = showPasswords ? "text" : "password";


  return (
    <Fragment>
      {/* <MetaData title={"Register User"} /> */}

      <div className="row wrapper signup" style={{color: "black"}}  >
        <div className="col-10 col-lg-5" >
          <form
            className=""
            onSubmit={submitWithJson}
            encType="application/json"
          >
            <h1 className="mb-3">Register</h1>

            <div className="form-group mt-3">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="firstname_field">First Name</label>
              <input
                type="name"
                id="firstname_field"
                className="form-control"
                name="firstName"
                value={firstName}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastname_field">Last Name</label>
              <input
                type="name"
                id="lastname_field"
                className="form-control"
                name="lastName"
                value={lastName}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="city_field">City</label>
              <input
                type="text"
                id="city_field"
                className="form-control"
                name="city"
                value={city}
                onChange={onChangeAddress}
              />
            </div>
            <p>
            <div className="form-group mt-3">
              <label htmlFor="password_field">Password  </label>
              <input
                type= {passwordInputType}
                id="password_field"
                className="form-control"
                name="password"
                value={password}
                onChange={onChange}
              />

              <input type="checkbox" onChange={handleTogglePassword} />Show Password
            </div>
            </p>

            <p>
              <div className="form-group mt-3">
                <label htmlFor="confirm_password_field">Confirm Password</label>
                <input
                type= {passwordInputTypes}
                id="confirm_password_field"
                className="form-control"
                name="confirmPassword"
                value={confirmPassword}
                onChange={onChange}
                />
                  <input type="checkbox" onChange={handleTogglePasswords} />Show Password
              </div>
            </p>

            {/* <div className="form-group">
              <label htmlFor="country_field">Country</label>
              <input
                type="text"
                id="country_field"
                className="form-control"
                name="country"
                value={country}
                onChange={onChangeAddress}
              />
            </div> */}

            {/* <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="state_field">State</label>
                  <input
                    type="text"
                    id="state_field"
                    className="form-control"
                    name="state"
                    value={state}
                    onChange={onChangeAddress}
                  />
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="city_field">City</label>
                  <input
                    type="text"
                    id="city_field"
                    className="form-control"
                    name="city"
                    value={city}
                    onChange={onChangeAddress}
                  />
                </div>
              </div>
            </div> */}

            {/* <div className="form-group">
              <label htmlFor="street_field">Street</label>
              <input
                type="text"
                id="street_field"
                className="form-control"
                name="street"
                value={street}
                onChange={onChangeAddress}
              />
            </div> */}

            {/* <div className="form-group">
              <label htmlFor="postal_code_field">Postal Code</label>
              <input
                type="text"
                id="postal_code_field"
                className="form-control"
                name="postalCode"
                value={postalCode}
                onChange={onChangeAddress}
              />
            </div> */}


            {/* <div className="form-group mt-3">
                <label htmlFor="avatar_upload">Avatar</label>
                <div className="d-flex align-items-center">
                  <div>
                    <figure className="avatar mr-3 item-rtl">
                      <img
                        src={avatarPreview}
                        className="rounded-circle img-fluid"
                        alt="Avatar Preview"
                      />
                    </figure>
                  </div>
                  <div className="custom-file mt-3">
                    <input
                      type="file"
                      name="avatar"
                      className="custom-file-input"
                      id="customFile"
                      accept="iamges/*"
                      onChange={onChange}
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Choose Avatar
                    </label>
                  </div>
                </div>
              </div> */}

            <button
              id="register_button"
              type="submit"
              className="btn btn-block py-3 px-5"
            disabled={loading ? true : false}
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;