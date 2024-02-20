import React, { Fragment } from "react";
import PropTypes from 'prop-types';

const Counter = ({ val, incrementer, decrementer }) => {
  return (
    <Fragment>
      <div className="stockCounter d-inline">
        <span className="btn btn-danger minus" onClick={decrementer}>
          -
        </span>

        <input
          type="number"
          className="form-control count d-inline duration-background mx-4"
          value={val}
          readOnly
        />



        <span className="btn btn-primary plus" onClick={incrementer}>
          +
        </span>
      </div>
    </Fragment>
  );
};

Counter.propTypes = {
  val: PropTypes.number.isRequired,
  incrementer: PropTypes.func,
  decrementer: PropTypes.func,
};

export default Counter;
