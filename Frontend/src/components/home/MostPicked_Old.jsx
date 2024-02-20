// import React from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

const MostPicked = ({ hotels }) => {
    // return (<div className="container row">
    //     <div className="col-12 col-md-4">
    //         <div className="card text-white v-full">
    //             <div className='mp-img-full'>
    //                 <img className='mp-img'
    //                     src={hotels[0].img} />
    //                 {/* <div className="mp-img-overlay">
    //                         </div> */}
    //             </div>
    //             <div className="discount-container">
    //                 <div
    //                     className="discount-background">
    //                 </div>
    //                 <div className="discount-tag"><span
    //                     className="discount-price">${hotels[0].price}</span><span
    //                         className="discount-label">
    //                         per night</span></div>
    //             </div>
    //             <div
    //                 className="hotel-name">
    //                 {hotels[0].name}</div>
    //             <div
    //                 className="hotel-city">
    //                 {hotels[0].city}</div>
    //         </div>
    //     </div>

        {/* <div className="col-12 col-md-8"> */}
        return (<div className="row v-full d-flex align-content-between flex-wrap">
                {hotels.map((hotel, index) => {
                    // return index === 0 ? <Fragment key={index}></Fragment> :(<div className="col-12 col-md-6" key={index}>
                    return (<div className={`${index > 0 ? "row-2" : "row-1"} col-4 `}
                    key={`mostpicked-${index}`}
                    >
                        <div className="card text-white v-full">
                            <div className='mp-img-small'>
                                <img className='mp-img'
                                    src={hotel.img} />
                                {/* <div className="mp-img-overlay">
                            </div> */}
                            </div>
                            <div className="discount-container">
                                <div
                                    className="discount-background">
                                </div>
                                <div className="discount-tag"><span
                                    className="discount-price">${hotel.price}</span><span
                                        className="discount-label">
                                        per night</span></div>
                            </div>
                            <div
                                className="hotel-name">
                                {hotel.name}</div>
                            <div
                                className="hotel-city">
                                {hotel.city}</div>

                        </div>
                    </div>)
                })}
            </div>)
        // </div>

    // </div>)
}

MostPicked.propTypes = {
    hotels: PropTypes.array
};

export default MostPicked;