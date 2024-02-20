import { useEffect, useState } from "react";
import "../../assets/styles/home.css";
import MostPicked from "./MostPicked";
import HotelRow from "./HotelRow";
import { LightSpeed, Fade } from "react-reveal";

import { useDispatch, useSelector } from 'react-redux';

import travellers from "/images/icons/travellers.svg";
import treasure from "/images/icons/treasure.svg";
import cities from "/images/icons/cities.svg";
// import coverPhoto from "../../assets/images/home/coverPhoto.jpg";
import coverPhoto from "../../assets/images/home/TranscorpCover.jpg"
import coverFrame from "../../assets/images/home/coverFrame.svg";
// import coverPhoto from "../../assets/images/home/img-hero.jpg";
// import coverFrame from "../../assets/images/home/img-hero-frame.jpg"
import blueOriginFams from "../../assets/images/home/blueOriginFams.svg";
import oceanLand from "../../assets/images/home/oceanLand.svg";
import happyFamily from "../../assets/images/home/happyFamily.svg";
import stars from "../../assets/images/home/stars.svg";
import { getHotels } from "../../actions/hotelActions";


const hotelsList = [
    {
        name: "Blue Origin Fams",
        price: 50,
        img: blueOriginFams,
        city: "Jakarta, indonesia"
    },
    {
        name: "Ocean Land",
        price: 22,
        img: oceanLand,
        city: "Bandung, indonesia"
    },
    {
        name: "Ocean Land",
        price: 22,
        img: oceanLand,
        city: "Bandung, indonesia"
    },
    {
        name: "Ocean Land",
        price: 22,
        img: oceanLand,
        city: "Bandung, indonesia"
    },
]

const hotels2 = [

    {
        name: "Ocean Land",
        price: 22,
        img: oceanLand,
        city: "Bandung, indonesia"
    },
    {
        name: "Ocean Land",
        price: 22,
        img: oceanLand,
        city: "Bandung, indonesia"
    },
    {
        name: "Ocean Land",
        price: 22,
        img: oceanLand,
        city: "Bandung, indonesia"
    },
    {
        name: "Ocean Land",
        price: 22,
        img: oceanLand,
        city: "Bandung, indonesia"
    },

]


const Home = () => {
    const [edoHotels, setEdoHotels] = useState([]);
    const [lagosHotels, setLagosHotels] = useState([]);
    const [abujaHotels, setAbujaHotels] = useState([]);
    const [mostPickedHotels, setMostPickedHotels] = useState([]);

    const dispatch = useDispatch();

    const { loading, hotels, error } = useSelector(state => state.hotels);

    useEffect(() => {
        dispatch(getHotels());
    }, [dispatch]);

    useEffect(() => {
        const sortHotels = () => {
            let edoHotels = [];
            let lagosHotels = [];
            let abujaHotels = [];
            let mostPicked = []

            hotels.forEach((hotel) => {
                if (hotel.address.state === 'Edo') edoHotels.push(hotel);
                else if (hotel.address.state === 'Lagos') lagosHotels.push(hotel);
                else if (hotel.address.state === 'Abuja') abujaHotels.push(hotel);

                if (hotel.popular && mostPicked.length < 5) mostPicked.push(hotel);
            });

            setEdoHotels(edoHotels);
            setLagosHotels(lagosHotels);
            setAbujaHotels(abujaHotels);
            setMostPickedHotels(mostPicked);
        };

        sortHotels();
    }, [hotels]);


    return (
        <div id="home-container">
            <div className="row mt-5 pt-5">
                <div className="col-6">
                    <LightSpeed left>
                        <div id="top-header"
                            className="">Forget Busy Work,<br />Start Next Vacation</div>
                        <div className="my-2 text-muted" id="top-text">
                            We provide what you need to enjoy your <br />holiday with family. Time to make another <br />memorable
                            moments.
                        </div>

                        <a href="#most-picked"
                            style={{ textDecoration: "none" }}
                        >
                            <button className="btn btn-primary px-4 my-3">Show Me Now</button>
                        </a>
                        <br />
                    </LightSpeed>

                    <Fade bottom>
                        <div className="row mt-5">
                            <div className="col-4">
                                <img src={travellers} alt="travellers" className="" />
                                <div><span
                                    className="counter">20</span>&nbsp;
                                    <span className="counter-label">travelers</span></div>
                            </div>

                            <div className="col-4">
                                <img src={treasure} alt="treasure" className="" />
                                <div><span className="counter">{hotels && hotels.length}</span>&nbsp;
                                    <span className="counter-label">
                                        treasure</span></div>
                            </div>

                            <div className="col-4">
                                <img src={cities} alt="cities" className="" />
                                <div><span className="counter">6</span>&nbsp;<span className="counter-label">
                                    cities</span></div>
                            </div>
                        </div>
                    </Fade>


                </div>

                <LightSpeed right>
                    <div className="col-6">
                        {/* <div className="cover-container">
                        <img src={coverPhoto} alt="cover" className="img-fluid cover mb-5" />
                        <div id="cover-rect"></div>
                    </div> */}

                        <div style={{ width: 520, height: 410 }}>
                            <img
                                src={coverPhoto}
                                alt="Room with couches"
                                className="img-fluid position-absolute cover mb-5"

                                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
                            />
                            <img
                                src={coverFrame}
                                alt="Room with couches frame"
                                className="img-fluid position-absolute cover-frame"
                                style={{ margin: "0 -15px -15px 0" }}
                            />
                        </div>

                    </div>
                </LightSpeed>
            </div>

            <section id="most-picked">
                <div
                    className="mt-5 mb-2 home-title">Most Picked
                </div>

                {hotels && <MostPicked hotels={mostPickedHotels} />}
            </section>


            <div
                className="mt-5 mb-2 home-title">Hotels in Edo
            </div>

            {hotels && <HotelRow hotels={edoHotels} />}


            <div
                className="mt-5 mb-2 home-title">Hotels in Lagos
            </div>

            {hotels && <HotelRow hotels={lagosHotels} />}

            <div
                className="mt-5 mb-2 home-title">Hotels in Abuja
            </div>

            {hotels && <HotelRow hotels={abujaHotels} />}


            <div className="row px-5 mb-5">
                <div className="col-12 col-md-4">
                    <div className="fam-container">
                        <img src={happyFamily} className="fam" />
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-12 col-xl-7 py-5 px-5">
                    <div>
                        <div style={{ fontSize: "24px", fontWeight: 500 }}>Happy Family</div>

                        <img src={stars} alt="stars" className="mx-0 pt-5" />

                        <div
                            style={{ fontSize: "32px", fontWeight: 400 }}>
                            What a great trip with my family and I should try again next time soon ...</div>
                        <div
                            style={{ fontSize: "18px", fontWeight: 300 }} className="dim-text">
                            Anjola, Product Designer</div>

                        <button className="btn btn-primary px-4 my-5 py-2">Read Their Story</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;