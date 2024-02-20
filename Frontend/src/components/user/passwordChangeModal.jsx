import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/changePassword.css";
import { changePassword } from "../../actions/authActions";
import { useDispatch } from "react-redux";

const ChangePassword = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: ""
  });

  const handleOldPassword = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePasswords = () => {
    setShowPasswords(!showPasswords);
  };
  const handleToggleOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };

  const passwordInputType = showPassword ? "text" : "password";
  const passwordInputTypes = showPasswords ? "text" : "password";
  const oldPasswordInputType = showOldPassword ? "text" : "password";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newPassword === confirmPassword) {
      // console.log("Password changed successfully!");
      dispatch(changePassword({ email, oldPassword, newPassword, confirmPassword }));


      navigate("/profile");
    } else {
      // console.error("Passwords do not match!");
      setError({
        error: true,
        message: "Passwords do not match"
      })
    }
  };

  useEffect(() => {
    setEmail(localStorage.getItem('email'));
  }, [])

  return (
    <>
      <div className="container pword" style={{}}>
        <div className="changePass">
          <h2 className="mb-4" style={{ color: "aqua" }}>
            Change Password
          </h2>
          <p className="text-danger">{error.status && error.message}</p>
          <form onSubmit={handleSubmit}>
            <p className="shadow-none p-3 mb-4 bg-body-secondary rounded">
              <label>
                Old Password:{" "}
                <input
                  type={oldPasswordInputType}
                  placeholder="**************"
                  value={oldPassword}
                  onChange={handleOldPassword}
                />
              </label>
              <input type="checkbox" onChange={handleToggleOldPassword} /> Show
              Password
            </p>
            <p className="shadow-none p-3 mb-4 bg-body-secondary rounded">
              <label>
                New Password:{" "}
                <input
                  type={passwordInputType}
                  placeholder="**************"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                />
              </label>
              <input type="checkbox" onChange={handleTogglePassword} /> Show
              Password
            </p>
            <p className="shadow-none p-3 mb-4 bg-body-secondary rounded">
              <label>
                Confirm New Password:{" "}
                <input
                  type={passwordInputTypes}
                  placeholder="**************"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </label>
              <input type="checkbox" onChange={handleTogglePasswords} /> Show
              Password
            </p>
            <br />
            <center>
              <button
                id="login_button"
                type="submit"
                className="btn py-3"
                style={{ color: "aqua", fontSize: "150%" }}
              >
                CHANGE
              </button>
            </center>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
