import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <nav id="sidebar">
        <ul className="navbar-nav bg-gradient sidebar sidebar-dark accordion px-3 sidebar-menu" id="accordionSidebar">
          <li className="my-3">
            <Link className="text-white text-decoration-none" to="/dashboard">
              <i className="fa fa-tachometer"></i> <span>Dashboard</span>
            </Link>
          </li>
          <hr className="sidebar-divider my-0" />

          {/* Hotel Dropdown */}
          <li className="my-2">
            <div className="dropdown">
              <a className="dropdown-toggle plain-link text-white" href="#" role="button" id="hotelDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Hotel
              </a>

              <ul className="dropdown-menu" aria-labelledby="hotelDropdown">
                <li><Link className="dropdown-item" to="/admin/hotels">All Hotels</Link></li>
                <li><Link className="dropdown-item" to="/admin/add-hotel">Add Hotel</Link></li>
              </ul>
            </div>
          </li>

          {/* Bookings Dropdown */}
          <li className="my-2">
            <div className="dropdown">
              <a className="dropdown-toggle plain-link text-white" href="#" role="button" id="bookingsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Bookings
              </a>

              <ul className="dropdown-menu" aria-labelledby="bookingsDropdown">
                {/* <li><Link className="dropdown-item" to="/admin/orders">All Bookings</Link></li>
                <li><Link className="dropdown-item" to="/admin/due-checkouts">Due Checkouts</Link></li> */}
                <li><Link className="dropdown-item" to="/admin/all-transactions">All Transactions</Link></li>
              </ul>
            </div>
          </li>

          {/* Users Dropdown */}
          <li className="my-2">
            <div className="dropdown">
              <a className="dropdown-toggle plain-link text-white" href="#" role="button" id="usersDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Users
              </a>

              <ul className="dropdown-menu" aria-labelledby="usersDropdown">
                <li><Link className="dropdown-item" to="/admin/all-users">All Users</Link></li>
                <li><Link className="dropdown-item" to="/admin/all-admin">All Admin</Link></li>
              </ul>
            </div>
          </li>

          {/* Reviews Dropdown */}
          <li className="my-2">
            <div className="dropdown">
              <a className="dropdown-toggle plain-link text-white" href="#" role="button" id="reviewsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Reviews
              </a>

              <ul className="dropdown-menu" aria-labelledby="reviewsDropdown">
                <li><Link className="dropdown-item text-white" to="/admin/all-reviews">All Reviews</Link></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;