import Breadcrumb from "../../elements/Breadcrumb";
import React from "react";
import Fade from "react-reveal/Fade";
import PropTypes from 'prop-types';

export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="row align-items-center">
          <div className="col">
            <Breadcrumb data={breadcrumb} />
          </div>
          <div className="col-auto text-center">
            <h1 className="h2">{data.name}</h1>
            <span className="text-gray-400">
              {/* {data.address.city}, {data.address.state} */}
            </span>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </section>
  );
}

PageDetailTitle.propTypes = {
  data: PropTypes.object,
  breadcrumb: PropTypes.array
}
