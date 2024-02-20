import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';


const UserLayout = ({ children }) => {
  return (
    <div className='container'>
        <Header />
            <div className='mt-3'>
                {children}
            </div>
        <Footer />
    </div>
  )
}

UserLayout.propTypes = {
    children: PropTypes.object
};

export default UserLayout;