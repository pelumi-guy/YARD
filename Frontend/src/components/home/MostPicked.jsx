import React from "react";
import Fade from "react-reveal/Fade";
import PropTypes from 'prop-types';

import Button from "../elements/Button";

export default function MostPicked({ hotels }) {

  return (
    <section className="container"
    // ref={props.refMostPicked}
    >
      <Fade bottom>
        {/* <h4 className="mb-3">Most Picked</h4> */}
        <div className="container-grid">
          {hotels.map((item, index) => {
            const images = JSON.parse(item.images);
            return (
              <div
                key={`mostpicked-${index}`}
                className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
              >
                <Fade bottom delay={500 * index}>
                  <div className="card card-featured">
                    <div className="tag">
                      {/* ${item.price} */}
                      <span className="font-weight-light">5% discount</span>
                    </div>
                    <figure className="img-wrapper">
                      <img
                        src={
                          // item.imageId[0]
                          //   ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                          //   : ""
                          images[0]
                        }
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="stretched-link d-block text-white"
                        href={`/hoteldetails/${item.id}`}
                      >
                        <h5>{item.name}</h5>
                      </Button>
                      <span>
                        {/* {item.city} */}
                        {item.address.city}, {item.address.state}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}


MostPicked.propTypes = {
  hotels: PropTypes.array,
  refMostPicked: PropTypes.object
};