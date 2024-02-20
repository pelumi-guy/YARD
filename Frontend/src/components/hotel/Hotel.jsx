/* eslint-disable react/prop-types */
import React from 'react';
import { Fade } from 'react-reveal';
import Button from '../elements/Button';


const Hotel = ({ hotel }) => {
    const images = JSON.parse(hotel.images);

    return (
        <div className='col-3'>
            <Fade bottom>
                <div className='mp-img'>
                    <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                            src={
                                // item.imageId[0]
                                //     ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                                //     : ""
                                images[0]
                            }
                            alt={hotel.name}
                            className="img-cover row-img"
                        />
                    </figure>
                    {/* <div>
                                    <div
                                        className="popular-choice-container">
                                    </div>
                                    <div className="popular-choice"><span
                                        className="popular">Popular</span><span
                                            className="choice">
                                            Choice</span></div>
                                </div> */}
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="stretched-link d-block text-white"
                        href={`/hoteldetails/${hotel.id}`}
                      >
                      </Button>
                      {/* <span>
                        {hotel.city}
                        {hotel.address.city}, {hotel.address.state}
                      </span> */}
                    </div>

                    <div className="mt-3">
                        <div
                            className="hotel-name-ex">
                            {hotel.name}</div>
                        <div className="hotel-city-ex">
                            {hotel.address.city}</div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Hotel;