// import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-reveal';
import Hotel from '../hotel/Hotel';

const HotelRow = ({ hotels }) => {
    return (
        <div className='row mb-5'>
            {hotels.map((hotel, index) => {
                if (index > 3) return null;

                const images = JSON.parse(hotel.images);
                return (
                  <Hotel hotel={hotel} key={index}/>
                )
            })
            }
        </div>

    )
};

HotelRow.propTypes = {
    hotels: PropTypes.array
};

export default HotelRow;