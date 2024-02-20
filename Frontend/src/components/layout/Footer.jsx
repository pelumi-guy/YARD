// import React from 'react';


const Footer = () => {
    return (
        <footer className="border-top footer text-muted">

            <div className="container row">

                <div className="col-12 col-md-5">
                    <div id="logo">
                        <span id="stay">YARD</span>
                        {/* <span id="cation">cation.</span> */}
                        <div
                            id="motto">
                            We kaboom your beauty holiday<br />instantly and memorable.
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-2 mt-2 mt-md-0">
                    <div className="footer-col">
                        <div className="footer-header">
                            For Beginners
                        </div>
                        <div className="footer-item">
                            New Account</div>
                        <div className="footer-item">
                            Start Booking a Room</div>
                        <div className="footer-item">
                            Use Payments</div>
                    </div>
                </div>

                <div className="col-12 col-md-2 mt-2 mt-md-0">
                    <div className="footer-col">
                        <div className="footer-header">
                            Explore Us</div>
                        <div className="footer-item">
                            Our Careers</div>
                        <div className="footer-item">
                            Privacy</div>
                        <div className="footer-item">
                            Terms & Conditions</div>
                    </div>
                </div>

                <div className="col-12 col-md-3 mt-2 mt-md-0">
                    <div className="footer-col">
                        <div className="footer-header">
                            Connect Us</div>
                        <div className="footer-item">
                            support@staycation.id</div>
                        <div className="footer-item">
                            +234 - 0822 - 1996</div>
                        <div className="footer-item">
                            Benin, Edo</div>
                    </div>
                </div>

                <div className="mt-5 copyright align-items-center">
                    Copyright 2023 - 2024 • All rights reserved • Staycation</div>
            </div>
        </footer>
    )
}

export default Footer;