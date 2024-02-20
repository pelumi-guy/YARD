import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Fragment>
      {/* <MetaData title={"Admin Dashboard"} /> */}

      <div className="row pr-4">
        <div className="col-xl-12 col-sm-12 mb-3">
          <div className="card text-white bg-primary o-hidden h-100">
            <div className="card-body">
              <div className="text-center card-font-size">
                Total Amount
                <br />
                <b>
                  {/* ₦{totalAmount && totalAmount.toLocaleString()} */}
                  ₦500,000
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row pr-4">
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-success o-hidden h-100">
            <div className="card-body">
              <div className="text-center card-font-size">
                Hotels
                <br />{" "}
                <b>
                  {/* {products && products.length} */}
                  10
                </b>
              </div>
            </div>
            <Link
              className="card-footer text-white clearfix small z-1"
              to="/admin/products"
            >
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </Link>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-danger o-hidden h-100">
            <div className="card-body">
              <div className="text-center card-font-size">
                Bookings
                <br />{" "}
                <b>
                  {/* {orders && orders.length} */}
                  5
                </b>
              </div>
            </div>
            <Link
              className="card-footer text-white clearfix small z-1"
              to="/admin/orders"
            >
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </Link>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-info o-hidden h-100">
            <div className="card-body">
              <div className="text-center card-font-size">
                Users
                <br />{" "}
                <b>
                  {/* {users && users.length} */}
                  3
                </b>
              </div>
            </div>
            <Link
              className="card-footer text-white clearfix small z-1"
              to="/admin/users"
            >
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </Link>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-warning o-hidden h-100">
            <div className="card-body">
              <div className="text-center card-font-size">
                All booked
                <br />{" "}
                <b>
                  {/* {outOfStock} */}
                  3
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Dashboard