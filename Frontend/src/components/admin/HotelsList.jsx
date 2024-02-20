import React, { Fragment, useEffect, useState } from "react";

// import MetaData from "../../Metadata";

import { useSelector, useDispatch } from "react-redux";
// import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
// import Loader from "../layout/Loader";
// import PencilIcon from "./icons/PencilIcon";
// import DeleteIcon from "../cart/icons/DeleteIcon";
import { MDBDataTable } from "mdbreact";

import { Link } from "react-router-dom";
// import { DELETE_PRODUCT_RESET } from "../../reducers/productReducer";
import {
  getHotels,
  clearHotelErrors,
  //   deleteProduct,
  //   clearAlterProductErrors,

} from "../../actions/hotelActions";

const HotelsList = () => {
  // const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, hotels } = useSelector((state) => state.hotels);
  // const { error: deleteError, isDeleted } = useSelector((state) => state.alterProduct)

  useEffect(() => {
    dispatch(getHotels());

    if (error) {
      // alert.error(error);
      dispatch(clearHotelErrors());
    }

    // if (deleteError) {
    //   alert.error(deleteError);
    //   // dispatch(clearAlterProductErrors());
    // }

    // if (isDeleted) {
    //   // alert.success('Product deleted successfully');
    //   navigate('/admin/hotels');
    //   // dispatch({ type: DELETE_PRODUCT_RESET });
    // }
  }, [dispatch, error, navigate]);

  const setHotels = () => {
    const data = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "Email",
          field: "email",
          sort: "asc",
        },
        {
          label: "Phone Number",
          field: "phone",
          sort: "asc",
        },
        {
          label: "Address",
          field: "address",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
          sort: "asc",
        },
      ],
      rows: [],
    };

    hotels.forEach((hotel) => {
      data.rows.push({
        id: hotel.id,
        name: hotel.name,
        email: hotel.email,
        phone: hotel.phone,
        address: (<Fragment>
          {hotel.address.street} <br />
          {`${hotel.address.city}, ${hotel.address.state}, ${hotel.address.country}`}
        </Fragment>),
        actions: (
          <div className="px-1 row">
            <div className="col-6 d-flex justify-content-center">
              <Link
                to={`/admin/hotel/${hotel.id}`}
                style={{ textDecoration: 'none' }}
              >
                {/* <PencilIcon /> */}
                <button className="btn btn-primary py-1 show-border">
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>

              </Link>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <button
                className="btn btn-danger py-1 px-2 ml-2"
                onClick={() => deleteProductHandler(hotel.id)}
              >
                {/* <DeleteIcon /> */}
                <i className="fa fa-trash px-1" aria-hidden="true"></i>
              </button>
            </div>

          </div>
        ),
      });
    });

    return data;
  };

  const deleteProductHandler = (id) => {
    console.log({ id });
    // dispatch(deleteProduct(id));
  };

  return (
    <Fragment>
      {/* <MetaData title={"All Products"} /> */}
      <Link
        to="/"
      >
        <button className="back-button">&lt; Back</button>
      </Link>
      <h1 className="my-5 mx-2">All Hotels</h1>
      {loading ? (
        // <Loader />
        <p>Loading...</p>
      ) : (
        <MDBDataTable
          data={setHotels()}
          className="px-3"
          bordered
          striped
          hover
          responsiveMd
        />
      )}
    </Fragment>
  );
};

export default HotelsList;
