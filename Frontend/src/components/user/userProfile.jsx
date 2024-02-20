import { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import "../../assets/styles/userProfile.css";

import ChangePassword from "./passwordChangeModal";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reloadUser } from "../../actions/authActions";

const Profile = () => {

  const dispatch = useDispatch();

  //   const divStyle = {
  //     width: "100%",
  //     display: "flex",
  //};

  useEffect(() => {
    dispatch(reloadUser());
  }, [dispatch]);

  const { loading, user } = useSelector((state) => state.authentication);


  return (
    <>
      <div className="container profile" >
        <center>
          <h1 className="my-5 pt-2 outlined-header">My profile</h1>

          <div className="infoContainer row">
            <div className="col-4"></div>
            <div className="col-4">


              <div className="px-5 mb-4 bg-body-secondary rounded-pill">
                <p className="pt-1">
                  <span>
                    <FaUserCircle className="me-2 icn" />
                  </span>
                  Name
                </p>
                {user && <p className="info pb-2 user-details">{`${user.firstName} ${user.lastName}`}</p>}
              </div>
              <div className="px-5 mb-4 bg-body-secondary rounded-pill ">
                <p className="pt-1">
                  <span>
                    <MdMessage className="me-2 icn" />
                  </span>
                  Email
                </p>
                {user && <p className="info pb-2 user-details">{user.email}</p>}
              </div>

              {/* Do we need the country? */}
              {/* <div className="px-5 mb-4 bg-body-secondary rounded-pill">
                    <p>
                    <span>
                        <FaHome className="me-2 icn" />
                    </span>
                    Country
                    </p>
                    <p className="info">Nigeria</p>
                </div> */}
              {/* <div className="px-5 mb-4 bg-body-secondary rounded-pill ">
                    <p>
                    <span>
                        <MdMessage className="me-2 icn" />
                    </span>
                    State
                    </p>
                    <p className="info">Edo</p>
                </div> */}

              <div className="px-5 mb-4 bg-body-secondary rounded-pill ">
                <p className="pt-1">
                  <span>
                    <FaHome className="me-2 icn" />
                  </span>
                  City
                </p>
                {user && <p className="info pb-2 user-details">{user.address.city}</p>}
              </div>
              {/* <div className="px-5 mb-4 bg-body-secondary rounded-pill ">
                    <p>
                    <span>
                        <MdMessage className="me-2 icn" />
                    </span>
                    Postal Code
                    </p>
                    <p className="info">1234</p>
                </div> */}
              <div className="px-5 py-2 mb-4 bg-body-secondary rounded-pill">
                {/* <p> */}
                {/* <span>
                <RiLockPasswordFill className="me-2 icn" />
              </span> */}
                <Link className="" style={{ textDecoration: "none", fontSize: "20px", fontWeight: "600" }} to="/password">
                  Change Password
                </Link>

                {/* Password */}
                {/* </p> */}
                {/* <div style={{ justifyContent: "space-between", display: "flex" }}> */}
                {/* <p >*********** </p> */}
                <span>

                </span>
              </div>
            </div>
          </div>
        </center >


        {/* <div className="mx-5">
            <button
              id="login_button"
              type="submit"
              className="btn-primary rounded-pill shadow-none py-3 px-4 mx-5"
            >
              UPDATE PROFILE
            </button>
          </div> */}
      </div >

    </>
  );
};

export default Profile;
