import React, { Fragment, useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchHotelsByName, searchHotelsByState } from '../../actions/hotelActions';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Hotel from '../hotel/Hotel';

const SearchAndFilter = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const keyword = params.keyword;

    const [price, setPrice] = useState([0, 200000]);
    const [stateFilter, setStateFilter] = useState("");
    const [category, setCategory] = useState("");

    const { loading, hotels, error } = useSelector(state => state.hotels);

    const allStates = [
        "Edo",
        "Lagos",
        "Abuja",
        "Plateau",
        "Rivers",
        "Kano"
    ]
    useEffect(() => {
        console.log({ keyword });
        dispatch(searchHotelsByName(keyword));
    }, [keyword, dispatch]);

    // if (loading) return null;

    return (
        <Fragment>
            {/* <MetaData title={"Best prices you can ask for"} /> */}

            <div className="row">
                <h1 id="products_heading">Search Results</h1>
            </div>

            {hotels &&
                <section id="products" className="container mt-5">
                    <div className="row">

                        <Fragment>
                            <div className="col-6 col-md-3 mt-5 mb-5">
                                <div className="row">
                                    <h3> <i className="fa fa-filter my-0" aria-hidden="true"></i> Search Filters</h3>

                                    {/* ---Prices filter--- */}
                                    {/* <h4 className="mb-3">Prices</h4>
                                    <div className="px-3">
                                        <Slider
                                            range
                                            marks={{
                                                1: "₦1",
                                                200000: "₦200,000",
                                            }}
                                            min={1}
                                            max={200000}
                                            defaultValue={[1, 200000]}
                                            tipFormatter={(value) => `${value}`}
                                            tipProps={{
                                                placement: "top",
                                                visible: false,
                                            }}
                                            value={price}
                                            onChange={(price) => setPrice(price)}
                                        />
                                    </div> */}
                                </div>
                                {/* <br /> */}

                                {/* ---State filter--- */}
                                <hr className="my-5" />
                                <h4 className="mb-3">States</h4>
                                <ul className="pl-0">
                                    {allStates.map((state) => (
                                        <li
                                            key={state}
                                            style={{ cursor: "pointer", listStyleType: "none" }}
                                            onClick={() => dispatch(searchHotelsByState(state))}
                                            className='font-weight-bold'
                                        >
                                            <span className='hover-border px-3'>{state}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* ---Ratings filter--- */}
                                {/* <hr className="mb-5" />
                                <h4 className="mb-3">Ratings</h4>
                                <ul className="pl-0">
                                    {[5, 4, 3, 2, 1].map((star) => (
                                        <li
                                            key={star}
                                            style={{ cursor: "pointer", listStyleType: "none" }}
                                            onClick={() => setRating(star)}
                                        >
                                            <div className="rating-outer">
                                                <div
                                                    className="rating-inner"
                                                    style={{ width: `${star * 20}%` }}
                                                ></div>
                                            </div>
                                        </li>
                                    ))}
                                </ul> */}
                            </div>

                            <div className="col-6 col-md-9">
                                <div className="row">
                                    {hotels.map((hotel) => (
                                        <Hotel hotel={hotel} key={hotel.id} col={4} />
                                    ))}
                                </div>
                            </div>
                        </Fragment>

                    </div>
                </section>}

            {/* <div className="d-flex row text-center">
      {products &&
        products.map((product) => (
          <Product product={product} key={product._id} col={3} />
        ))}
    </div> */}
        </Fragment>
    )
}

export default SearchAndFilter;