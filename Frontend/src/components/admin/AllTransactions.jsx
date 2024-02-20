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

const AllTransactions = () => {
  // const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, transactions } = useSelector((state) => state.transactions);
  // const { error: deleteError, isDeleted } = useSelector((state) => state.alterProduct)

  useEffect(() => {
    dispatch(getTransactions());

    if (error) {
      // alert.error(error);
      dispatch(clearTransactionErrors());
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

  const setTransactions = () => {
    const data = {
      columns: [
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "Payment Channel",
          field: "payment",
          sort: "asc",
        },
        {
          label: "Hotel",
          field: "hotel",
          sort: "asc",
        },
        {
          label: "Room Type",
          field: "room",
          sort: "asc",
        }
        // {
        //   label: "Address",
        //   field: "address",
        //   sort: "asc",
        // },
        // {
        //   label: "Actions",
        //   field: "actions",
        //   sort: "asc",
        // },
      ],
      rows: [],
    };

    transactions.forEach((transaction) => {
      data.rows.push({
        name: transaction.name,
        payment: transaction.payment,
        hotel: transaction.hotel,
        room: transaction.room,
        // address: (<Fragment>
        //   {hotel.address.street} <br />
        //   {`${hotel.address.city}, ${hotel.address.state}, ${hotel.address.country}`}
        // </Fragment>),
        // actions: (
        //   <div className="px-1 row">
        //     <div className="col-6 d-flex justify-content-center">
        //       <Link
        //         to={`/admin/all-transactions/${transaction.name}`}
        //         style={{ textDecoration: 'none' }}
        //       >
        //         {/* <PencilIcon /> */}
        //         <button className="btn btn-primary py-1 show-border">
        //           <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        //         </button>

        //       </Link>
        //     </div>
        //     <div className="col-6 d-flex justify-content-center">
        //       <button
        //         className="btn btn-danger py-1 px-2 ml-2"
        //         onClick={() => deleteProductHandler(transaction.name)}
        //       >
        //         {/* <DeleteIcon /> */}
        //         <i className="fa fa-trash px-1" aria-hidden="true"></i>
        //       </button>
        //     </div>

        //   </div>
        // ),
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
      <h1 className="my-5 mx-2">All Transactions</h1>
      {loading ? (
        // <Loader />
        <p>Loading...</p>
      ) : (
        <MDBDataTable
          data={setTransactions()}
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

export default AllTransactions;
