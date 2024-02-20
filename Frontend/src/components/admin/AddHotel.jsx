import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { register } from "../../actions/authActions";
import axios from "axios";
import RoomType from "./RoomType";

import default_avatar from "../../assets/images/signup/default_avatar.jpg"

const AddHotel = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        hotelName: "",
        emailAddress: "",
        phoneNumber: "",
        address: {
            country: "",
            state: "",
            city: "",
            street: "",
            postalCode: ""
        },
        roomName: "",
        price: "",
    });

    const { hotelName, emailAddress, phoneNumber, address } = user;
    const { country, state, city, street, postalCode } = address;
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswords, setShowPasswords] = useState(false);
    // const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);
    const [description, setDescription] = useState('');

    // const [avatar, setAvatar] = useState("");
    // const [avatarPreview, setAvatarPreview] = useState(
    //   default_avatar
    // );

    // const alert = useAlert();
    const dispatch = useDispatch();

    const [roomTypes, setRoomTypes] = useState([]);

    const addRoomType = () => {
        setRoomTypes([...roomTypes, <RoomType key={roomTypes.length} onChange={onChangeRoomType} />]);
    };

    const removeRoomType = (indexToRemove) => {
        setRoomTypes(roomTypes.filter((_, index) => index !== indexToRemove));
    };

    const onChangeRoomType = (index, data) => {
        // Handle changes in room type data
        // You can update the state or perform other actions here
        console.log(`Room Type ${index} data:`, data);
    };

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

    // const handleImageChange = (event) => {
    //     const file = event.target.files[0];
    //     setSelectedImage(file);
    // };

    const handleImageChange = (event) => {
        const files = event.target.files;
        setSelectedImages([...selectedImages, ...files]);

        // Automatically trigger the upload process when images are selected
        handleUpload([...selectedImages, ...files]);
    };

    const handleChange = () => {
        // Pass the room type data to the parent component
        onChange({description });
    };

    const handleUpload = (images) => {
        // You can implement your upload logic here
        // For example, you can use FormData and send a POST request to your server
        if (images.length > 0) {
            const formData = new FormData();

            // Append each selected image to the FormData
            for (let i = 0; i < images.length; i++) {
                formData.append('images', images[i]);
            }

            // Example of sending a POST request using fetch
            fetch('your-upload-api-endpoint', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    // Handle the response from the server
                    console.log(data);
                })
                .catch(error => {
                    // Handle errors
                    console.error('Error uploading images:', error);
                });
        } else {
            // Handle case when no image is selected
            console.warn('No images selected for upload');
        }
    };

    const passwordInputType = showPassword ? "text" : "password";
    const passwordInputTypes = showPasswords ? "text" : "password";


    return (
        <Fragment>
            {/* <MetaData title={"Register User"} /> */}

            <div className="row wrapper" style={{ color: "gray" }}  >
                <div className="col-10 col-lg-7" >
                    <form
                        className=""
                        onSubmit={submitWithJson}
                        encType="application/json"
                    >
                        <div className="border bg-gradient" style={{ color: "white", backgroundColor: "#19077f" }} >
                            <h2 className="text-center p-2">Add Hotel to Yard App</h2>
                        </div>

                        <div className="">
                            <h4 className="mb-4 mt-5 " style={{ color: "black" }}>Hotel Information</h4>
                            <div className="form-group mt-3">
                                <label htmlFor="hotelname_field">Hotel Name</label>
                                <input
                                    type="hotelname"
                                    id="hotelname_field"
                                    className="form-control"
                                    name="hotelName"
                                    placeholder="Hotel Name"
                                    value={hotelName}
                                    onChange={onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="emailaddress_field">Email Address</label>
                                <input
                                    type="email"
                                    id="emailaddress_field"
                                    className="form-control"
                                    name="emailAddress"
                                    placeholder="Email Address"
                                    value={emailAddress}
                                    onChange={onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phonenumber_field">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phonenumber_field"
                                    className="form-control"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    value={phoneNumber}
                                    onChange={onChange}
                                />
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="country_field">Country</label>
                                        <input
                                            type="text"
                                            id="country_field"
                                            className="form-control"
                                            name="country"
                                            placeholder="Enter Country"
                                            value={country}
                                            onChange={onChangeAddress}
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="state_field">State</label>
                                        <input
                                            type="text"
                                            id="state_field"
                                            className="form-control"
                                            name="state"
                                            placeholder="Select State"
                                            value={state}
                                            onChange={onChangeAddress}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="city_field">City</label>
                                        <input
                                            type="text"
                                            id="city_field"
                                            className="form-control"
                                            name="city"
                                            placeholder="Enter City/Town"
                                            value={city}
                                            onChange={onChangeAddress}
                                        />
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="postalcode_field">Postal Code</label>
                                        <input
                                            type="text"
                                            id="postalcode_field"
                                            className="form-control"
                                            placeholder="Postal Code"
                                            name="postalCode"
                                            value={postalCode}
                                            onChange={onChangeAddress}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="street_field">Street</label>
                                <input
                                    type="text"
                                    id="street_field"
                                    className="form-control"
                                    name="street"
                                    value={street}
                                    onChange={onChangeAddress}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="imageUpload_field">
                                    Choose an image to upload
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="imageUpload"
                                    accept="image/*"
                                    multiple
                                    onChange={handleImageChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description_field" className="form-label">
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    id="description_field"
                                    rows="6"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    onBlur={handleChange}
                                />
                            </div>
                        </div>


                        <div className="">
                            {/* <h4 className="mb-4" style={{ color: "black" }}>Room Types</h4> */}
                            {roomTypes.map((roomType, index) => (
                                <div key={index}>
                                    {roomType}
                                    <button
                                        type="button"
                                        className="btn"
                                        style={{ color: "white", backgroundColor: "#f4172a" }}
                                        onClick={() => removeRoomType(index)}
                                    >
                                        Remove Room Type
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                className="btn"
                                style={{ color: "white", backgroundColor: "#909ee2" }}
                                onClick={addRoomType}
                            >
                                Add Room Type
                            </button>
                        </div>

                        <button
                            id="register_button"
                            type="submit"
                            className="btn btn-block py-3 px-5 "
                            style={{ color: "white", backgroundColor: "#19077f" }}
                            disabled={loading ? true : false}
                        >
                            ADD HOTEL
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default AddHotel;