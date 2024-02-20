/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import gbImage from "../../../assets/images/icons/TheDestinationImage1.jpg";
import { InputText } from "../../elements/Form";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";
import { formatDateCustom } from "../../../utils/formatDate";

import oceanLand from "../../../assets/images/home/oceanLand.svg";
import { useSelector } from "react-redux";

export default function BookingInformation(props) {
  const { data, ItemDetails, checkout } = props;

  const dates = JSON.parse(sessionStorage.getItem("dates"));
  const bookingInfo = JSON.parse(sessionStorage.getItem("bookingInfo"));
  const nights = (new Date(dates.endDate) - new Date(dates.startDate)) / 86400000;
  const total = sessionStorage.getItem("total");

  const { hotel } = useSelector(state => state.hotelDetails);
  const { loading, user } = useSelector((state) => state.authentication);

  const [ firstName, setFirstName ] = useState(user.firstName);
  const [ lastName, setLastName ] = useState(user.lastName);
  const [email, setEmail ] = useState(user.email);

  const changeHandler = (e) => {
    props.onChange();

  }

  let totalRooms = bookingInfo.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const images = JSON.parse(hotel.images);

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 py-5">
            <Fade delay={300}>
              <div className="card" style={{ height: "100vh", width: "100%" }}>
                <div className="p-4">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={images[0]}
                        width="100%"
                      />
                    </div>
                    <div className="col">
                      {/* <h3>Wavercrest Beach Resort</h3> */}
                      {hotel && <h3>{hotel.name}</h3>}
                    </div>
                  </div>

                  <hr />

                  <div className="row">
                    <div className="col-6">
                      <p>
                        <h4>Check in</h4>
                        <span className="me-1">
                          <CiCalendarDate />
                        </span>
                        {/* Wed, 18th Nov, 2023 */}
                        {formatDateCustom(dates.startDate)}
                      </p>
                    </div>
                    <div className="col-6">
                      {/* <p > */}
                      <h4>Check Out</h4>
                      <span className="me-1">
                        <CiCalendarDate />
                      </span>
                      {/* <span> Wed, 19th Nov, 2023 </span> */}
                      {formatDateCustom(dates.endDate)}
                    </div>
                  </div>

                  <hr />

                  <div className="d-flex justify-content-between">
                    <div>
                      <li>{totalRooms} room{totalRooms > 1 ? 's' : ''}</li>
                      <li>{nights} night{nights > 1 ? 's' : ''}</li>
                    </div>
                    <div>
                      <Link
                        className="btn border border-dark-subtle link-info"
                        role="button"
                        to={`/hoteldetails/${hotel.id}`}
                      >
                        Change
                      </Link>
                    </div>
                  </div>

                  <hr />

                  <div className=" ">
                    {/* <li className="d-flex justify-content-between">
                      <span className="">1 Classic Rooms</span>
                      <span className="">
                        &#8358;
                        <span className="">53,475.00</span>
                      </span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span className="">1 Deluxe Room</span>
                      <span className="">
                        &#8358;
                        <span className="">68,425.00</span>
                      </span>
                    </li> */}
                    {bookingInfo.map((item, idx) => {
                      return (
                        <li className="d-flex justify-content-between" key={idx}>
                          <span className="">{item.name}</span>
                          <span className="">
                            &#8358;
                            <span className="">{item.price.toLocaleString()}</span>
                          </span>
                        </li>
                      )
                    })}
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-auto bg-info p-4 fw-bold">
                  <p className="">Total Payable Amount</p>
                  <span className="">
                    &#8358;
                    <span className="">{total.toLocaleString()}</span>
                  </span>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5 border-start" style={{ paddingLeft: "80px" }}>
            <Fade delay={600}>
              <label htmlFor="firstName">First Name</label>
              <InputText
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => {
                  props.onChange(e);
                  setFirstName(e.target.value);
                }}
              />

              <label htmlFor="lastName">Last Name</label>
              <InputText
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => {
                  props.onChange(e);
                  setLastName(e.target.value)
                }}
              />

              <label htmlFor="email">Email Address</label>
              <InputText
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => {
                  props.onChange(e);
                  setEmail(e.target.value);
                }}
              />

              {/* <label htmlFor="phone">Phone Number</label>
              <InputText
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={props.onChange}
        /> */}
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
