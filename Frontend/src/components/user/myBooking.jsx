import React from "react";
import bookingImage from "../../assets/images/icons/BonHotel.jpg";

const Booking = () => {
  const BgStyle = {
    backgroundImage: `url(${bookingImage})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="container" style={BgStyle}>
        <h1 className="my-4 ms-5">My Booking</h1>
        <div>
          <table className="table">
            <thead>
              <th scope="col">Hotel</th>
              <th scope="col"> Address</th>
              <th scope="col">Room Type</th>
              <th scope="col">Room</th>
              <th scope="col">Price</th>
              <th scope="col">Payment Channel</th>
              <th scope="col"> Bookin Date</th>
            </thead>
            <tbody>
              <tr class="table-info">
                <td>Bon Hotel</td>
                <td>14 Ademola Street Wuse Abuja</td>
                <td>Deluxe</td>
                <td>214</td>
                <td>50000</td>
                <td>Transfer</td>
                <td>12-01-2024</td>
              </tr>
              <tr class="table-info">
                <td>Bon Hotel</td>
                <td>14 Ademola Street Wuse Abuja</td>
                <td>Deluxe</td>
                <td>214</td>
                <td>50000</td>
                <td>Transfer</td>
                <td>12-01-2024</td>
              </tr>

              <tr class="table-info">
                <td>Bon Hotel</td>
                <td>14 Ademola Street Wuse Abuja</td>
                <td>Deluxe</td>
                <td>214</td>
                <td>50000</td>
                <td>Transfer</td>
                <td>12-01-2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Booking;
