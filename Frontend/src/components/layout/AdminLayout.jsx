import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Sidebar from '../admin/Sidebar';


const DashboardLayout = ({ children }) => {
  return (
    <Fragment>
        {/* <Header /> */}
        <div className="row my-3">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">{children}</div>
      </div>
        {/* <Footer /> */}
    </Fragment>
  )
}

DashboardLayout.propTypes = {
    children: PropTypes.object
};

export default DashboardLayout;