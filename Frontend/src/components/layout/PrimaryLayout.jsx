import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';


const PrimaryLayout = ({ children }) => {
  return (
    <div className='container container-lg'>
        <Header />
            <div className='container container-sm mb-4 mt-2'>
                {children}
            </div>
        <Footer />
    </div>
  )
}

PrimaryLayout.propTypes = {
    children: PropTypes.object
};

export default PrimaryLayout;