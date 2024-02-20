/* eslint-disable react/prop-types */
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";

import { useEffect, useState, Fragment } from "react";
import Button from "../../elements/Button";

import { useDispatch, useSelector } from "react-redux";

import { addBooking } from "../../../actions/bookingActions";


const BookingHotelDetails = ({ room, dates, idx, updateTotal }) => {

  // const dispatch = useDispatch();

  useEffect(() => {
    sessionStorage.removeItem("bookingInfo");
    sessionStorage.removeItem("total");
  }, [])

  const [count, setCount] = useState(0);

  const { id, thumbnail, name, description, price, hotelId } = room;
  const { startDate, endDate } = dates;
  // const idx = props.idx;

  const addRoom = (booking) => {
    let bookingInfo = sessionStorage.getItem('bookingInfo');

    bookingInfo = JSON.parse(bookingInfo);
    setCount(count + 1);
    if (bookingInfo) {

      const isItemExist = bookingInfo.find(
        (i) => i.roomId === booking.roomId
      );

      if (isItemExist) {
        bookingInfo = bookingInfo.map((i) => {
         return (i.roomId === isItemExist.roomId ? booking : i);
      });
      } else {
        bookingInfo = [...bookingInfo, booking];
      }

      let total = bookingInfo.reduce((acc, curr) => {
        return acc + (curr.price * curr.quantity);
      }, 0);

      sessionStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));
      sessionStorage.setItem("total", total);
    }
    else {
      sessionStorage.setItem("bookingInfo", JSON.stringify([booking]));
      sessionStorage.setItem("total", booking.price * booking.quantity);
    }

  };

  const removeRoom = (id) => sessionStorage.removeItem(id);

  return (
    <Fragment>
      <div
        className="hotelDetails"
        style={{ display: "flex" }}
      >
        <div style={{ display: "flex" }} className="">
          <img
            src={thumbnail}
            alt=""
            style={{ width: "120px", height: "70px", marginRight: "5px" }}
          />
          <div style={{ display: "block", width: "100%" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "600" }}>{name}</h2>
            <p style={{ fontSize: "14px" }}>
              ₦{price.toLocaleString()} <span style={{ fontSize: "10px" }}>avg/Night</span>
            </p>
          </div>
        </div>
        <div style={{ display: "block", alignItems: "center", width: "100%" }} className="">
          <div
            style={{
              alignItems: "center",
              justifyContent: "end",
              display: "flex",
            }}
            className="mb-2"
          >
            <span onClick={removeRoom}>
              <FaSquareMinus className="minus" />
            </span>
            <span className="text-black text-l font-normal font-Inter leading-7 counter-style">
              {count}
            </span>
            <span
              onClick={() => addRoom({
                hotelId,
                name,
                thumbnail,
                checkIn: startDate,
                checkOut: endDate,
                roomId: id,
                quantity: count + 1,
                price

              })}>
              <FaSquarePlus className="plus" />
            </span>
          </div>
          <Button
            className="btn"
            hasShadow
            isPrimary
            isBlock
          onClick={updateTotal}
          >
            Add Room
          </Button>
        </div>
      </div>
      <p style={{ fontSize: "15px", fontWeight: "600" }} className="mt-1">{description}</p>
    </Fragment >
  );
};

export default BookingHotelDetails;
