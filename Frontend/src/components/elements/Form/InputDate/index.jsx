import React, { useState, useRef, useEffect } from "react";
import propTypes from "prop-types";

import { DateRange } from "react-date-range";

// import "./index.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import formatDate from "../../../../utils/formatDate";
import iconCalendar from "../../../../assets/images/icons/icon-calendar.svg";

export default function DatePicker(props) {
  const { value, placeholder, name } = props;
  const [isShowed, setIsShowed] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const datePickerChange = (value) => {
    // const target = {
    //   target: {
    //     startDate: value.range1.startDate ? value.range1.startDate : Date.now(),
    //     endDate: value.range1.endDate ? value.range1.endDate : Date.now(),
    //     name: name,
    //   },
    // };

    // console.log({value});

    setStartDate((prev) => value.range1.startDate || prev);
    setEndDate((prev) => value.range1.endDate || prev);


  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    props.onChange({ startDate, endDate });
    // console.log({ startDate, endDate });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [startDate, endDate]);

  const refDate = useRef(null);
  const handleClickOutside = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
    value.endDate ? " - " + formatDate(value.endDate) : ""
  }`;

  return (
    <div
      ref={refDate}
      className={["input-date mb-3", props.outerClassName].join(" ")}
    >
      <div className="input-group">
        <div className="input-group-prepend bg-gray-900">
          <span className="input-group-text">
            <img src={iconCalendar} alt="icon calendar" />
          </span>
        </div>
        <input
          readOnly
          type="text"
          className="form-control"
          value={displayDate}
          placeholder={placeholder}
          onClick={() => setIsShowed(!isShowed)}
        />

        {isShowed && (
          <div className="date-range-wrapper">
            <DateRange
              editableDateInputs={true}
              onChange={datePickerChange}
              moveRangeOnFirstSelection={false}
              onRangeFocusChange={check}
              ranges={[value]}
              minDate={new Date()}
            />
          </div>
        )}
      </div>
    </div>
  );
}

DatePicker.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  name: propTypes.string
};
