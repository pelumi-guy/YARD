import React, { useEffect, useState } from 'react';
import "../../assets/styles/hotelDetails.css";
import { Fade } from 'react-reveal';
import BookingForm from './components/BookingForm.jsx';
import PageDetailTitle from './components/PageDetailTitle.jsx';
import FeaturedImage from './components/FeaturedImage.jsx';
import PageDetailDescription from './components/PageDetailDescription.jsx';
import HotelRow from '../home/HotelRow.jsx';

import featured01 from "../../assets/images/hotelDetails/featured-01.svg";
import featured02 from "../../assets/images/hotelDetails/featured-02.svg";
import featured03 from "../../assets/images/hotelDetails/featured-03.svg";

import blueOriginFams from "../../assets/images/home/blueOriginFams.svg";
import oceanLand from "../../assets/images/home/oceanLand.svg";
import Activities from './components/Activities.jsx';
import Testimony from './components/Testimony.jsx';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHotelDetails, getRoomTypes } from '../../actions/hotelActions.js';


const hotelDetails = {
    title: "Village Angga",
    city: "Bogor",
    country: "Indonesia",
    images: [
        {
            _id: 1,
            image: featured01
        },
        {
            _id: 2,
            image: featured02
        },
        {
            _id: 3,
            image: featured03
        }
    ],

    description: "<p>Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.<br />Such trends saw the demise of the soul-infused techno that typified the original Detroit sound. Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era.<br />Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The national agency for design: enabling Singapore to use design for economic growth and to make lives better.</p>",

}

const hotelFeatures = [
    {
        name: "Bedroom",
        icon: "bedroom"
    },
    {
        name: "Living Room",
        icon: "livingRoom"
    },
    {
        name: "Bathroom",
        icon: "bathroom"
    },
    {
        name: "Dining Room",
        icon: "diningRoom"
    },
    {
        name: "Internet",
        icon: "wifi"
    },
    {
        name: "Refrigerator",
        icon: "refrigerator"
    },
    {
        name: "Television",
        icon: "television"
    }
];


const review = {
    content: "As a wife I can pick a great trip with my own lovely family ... thank you!",
    familyName: "Anggi",
    familyOccupation: "Product Designer"
}

const incrementCount = () => {
    console.log("incrementing...");
}


const decrementCount = () => {
    console.log("decrementing...");
}

// if (!page[match.params.id]) return null;

const breadcrumb = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "Hotel Details", pageHref: "" },
];


const HotelDetails = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id;
    const [images, setImages] =useState([]);

    const { loading, hotel, error } = useSelector(state => state.hotelDetails);

    useEffect(() => {
        dispatch(getHotelDetails(id));
        dispatch(getRoomTypes(id));
    }, [id]);

    useEffect(() => {
        console.log({images: hotel.images });
        if(hotel.images) setImages(JSON.parse(hotel.images));

    }, [hotel]);

    // useEffect(() => {}, [images]);

    return (
        <>
            <PageDetailTitle breadcrumb={breadcrumb} data={hotel} />
            <FeaturedImage data={images} />

            <section className="container">
                <div className="row">
                    <div className="col-7 pr-5">
                        <h4>About the place</h4>
                        <Fade bottom>
                            <PageDetailDescription data={hotel} features={hotelFeatures} />
                        </Fade>
                    </div>
                    <div className="col-5">.
                        <BookingForm />
                    </div>
                </div >
            </section>
            {/* <Activities data={hotels} /> */}
            <Testimony data={review} />
        </>
    )
};

export default HotelDetails