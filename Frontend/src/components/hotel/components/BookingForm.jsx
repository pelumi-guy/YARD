/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Button from "../../elements/Button";
import InputNumber from "../../elements/Form/InputNumber";
import InputDate from "../../elements/Form/InputDate";
import BookingHotelDetails from "./BookingHotelDetails";
import { useDispatch, useSelector } from "react-redux";
import { addBooking, removeBooking } from "../../../actions/bookingActions";
import Crown1 from "/images/Crown1.jpg";
import Crown2 from "/images/Crown2.jpg";
import Crown3 from "/images/Crown3.jpg";


const BookingForm = ({ dispatch }) => {

  // const dispatch = useDispatch();

  const [getItem, setItem] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [dates, setDates] = useState({ startDate: new Date(), endDate: new Date() });
  const [nights, setNights] = useState(0);

  const updateTotal = () => {
    // console.log("adding room");
    let total = sessionStorage.getItem("total");
    // const nights = (dates.endDate - dates.startDate) / 86400000;

    if (nights > 0) {
      total *= nights
      sessionStorage.setItem("total", total * nights);
    }

    setTotalPrice(total);
  };

  const updateDate = (target) => {
    console.log({target});
    const nightStays = (target.endDate - target.startDate) / 86400000;
    let total = sessionStorage.getItem("total");
    if (nightStays > 0)
    {
      total *= nightStays;
      sessionStorage.setItem("total", total);
    }

    setDates({ startDate: target.startDate, endDate: target.endDate });
    setTotalPrice(total);
    setNights(nightStays);
    sessionStorage.setItem("dates", JSON.stringify(target));

    // console.log({dateDiff: (target.endDate - target.startDate) / 86400000 });
    // console.log({target});
  };

  const removeRoom = () => {
    console.log("removing room");
    dispatch(removeBooking());
  }

  const rooms = [
    {
      id: 1,
      name: "Deluxe",
      description: "",
      thumbnail: Crown1,
      roomDetail: "avg/Night",
      price: 50000,
    },
    {
      id: 2,
      name: "Classic",
      description: "",
      thumbnail: Crown2,
      roomDetail: "avg/Night",
      price: 63000,
    },
    {
      id: 3,
      name: "Exotic",
      description: "",
      thumbnail: Crown3,
      roomDetail: "avg/Night",
      price: 54000,
    },
  ];

  const { loading, roomTypes, error } = useSelector(state => state.hotelDetails);
  const { total } = useSelector(state => state.bookings);

  useEffect(() => {
    // const total = sessionStorage.getItem("total");
     console.log({ dates });
    // if(total) setTotalPrice(total);
  }, [dates]);

  useEffect(() => {
    setTotalPrice(0);
  }, [])
  return (
    <div className="card bordered" style={{ padding: "60px 30px" }}>
      <h4 className="mb-4">START BOOKING</h4>
      <div className="hotelDetails_container">
        {roomTypes && roomTypes.map((room, index) => {

          return (
            <div key={index}>
              <BookingHotelDetails
                room={room}
                dates={dates}
                updateTotal={updateTotal}
                // total={totalPrice}
                // click={() => setItem(!getItem)}
                // click={(t) => {setTotalPrice(t)}}
                click = {() => {}}
                idx={index}
              />
              {index < rooms.length - 1 ? <hr /> : <></>}
            </div>
          );
        })}
      </div>
      <hr className="bg-dark border-2 border-top border-dark mt-4" />
      <div className="check-in m-4">
        <label htmlFor="date">Check In - Check Out</label>
        <InputDate
          onChange={updateDate}
          name="date"
          value={dates}
        />
      </div>
      <hr className="bg-danger border-2 border-top border-dark" />

      <div className="text-center mb-3">
        <h3>Total Price:</h3>
        {/* {total && <span>₦{total}</span>} */}
        <span>{totalPrice}</span>
      </div>

      <Button
        className="btn pt-2"
        hasShadow
        isPrimary
        isBlock
        type="link"
        href="/checkout"
        style={{ textDecoration: "none" }}
      >
        Book Now
      </Button>
    </div>
  );
};

export default BookingForm;
