import React from "react";
import PropTypes from 'prop-types';

import ReactHtmlParser from "react-html-parser";
export default function PageDetailDescription({ data, features }) {

  const capitalizeFLetter = (string) => string[0].toUpperCase() + string.slice(1);

  return (
    <main>
      <div className="lead">
        {ReactHtmlParser(data.description)}
      </div>


      <h4 className="mt-3">Available features at {data.name}</h4>
      <div className="row justify-content-center" style={{ marginTop: 30 }}>
        {/* {data.features.length === 0
          ? "No feature records"
          : ""} */}
        {
          features.map((feature, index) => {
            return (
              <div
                className="col-3 text-center "
                key={`feature-${index}`}
                style={{
                  marginBottom: 20,
                  alignItems: "center",
                  justifyContent: "end",
                  display: "flex",
                  flexDirection: "column",
                }}

              >

                <img
                  // src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
                  src={`/images/icons/${feature.icon}.svg`}
                  alt={feature.name}
                  className="d-block mb-2"
                  width="38"
                />


                {/* <span>{feature.qty}</span>{" "} */}
                <span className="text-gray-500 font-weight-light">
                  {feature.name}
                </span>
              </div>
            );
          })
        }
      </div>
    </main>
  );
}


PageDetailDescription.propTypes = {
  data: PropTypes.object,
  features: PropTypes.array
}