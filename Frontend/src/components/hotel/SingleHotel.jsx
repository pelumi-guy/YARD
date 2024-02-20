import React from 'react';
import '../../assets/styles/singlehotel.css';
const SingleHotel = () => {
    return (
        <div>
            <div className="section1">
                <p className="p1">BON Hotel Garden City Port Harcourt</p>
               <p className="p2">No. 1 Ordu Avenue, (Power Encounter), Opposite Omega House, East-West Road, Rumuodara, Port Harcourt, Port Harcourt, Rivers</p>
            </div>
            <div className="section2">
                <div className="img1"></div>
                <div className="img2"></div>
                <div className="img3"></div>
                <div className="img4"></div>
            </div>
            <div className="section3">
                <div className="description">
                    <p className="p3">Information about BON Hotel Garden City Port Harcourt</p>
                    <p className="p4">Bon Hotel Garden City Port Harcourt is located in the heart of the Central Business District of Port Harcourt; it embodies the very best of Nigeria in the refinements of interior design. Our beautiful edifice is eco-friendly with a fitness center, cybercafé, restaurant, bar, pool bar, terrace bar and a pharmacy for your medical needs.</p>
                </div>
                <div className="booking">
                    <p className="note">Book rooms in this hotel online</p>
                    <form action="" method="post">
                        <table > 
                            <tr className='tr1'>
                                <div className="b1">
                                    <p>Check in - Check out</p>
                                    <p className='p-b1'><input type="date" /></p>
                                </div>
                                <div className="b1">
                                    <p>Adults</p>
                                    <p className='input1'><input type="text" /></p>
                                </div>  
                            </tr>
                            <tr className="tr2">
                                <p>Enter your phone number to start the booking process</p>
                                <p className="input-2"><input type="number" /></p>
                            </tr>
                            <tr className="tr3">
                                <div className="img1"></div>
                                <p className="room">Classic room <br />₦51,750 <span>avg/night</span></p>
                            </tr>
                            <tr className="tr4">
                                <div className="img2"></div>
                                <p className="room">Deluxe room <br />₦63,250 <span>avg/night</span></p>
                            </tr>
                            <tr className="tr5">
                                <div className="img3"></div>
                                <p className="room">Suite <br />₦80,500 <span>avg/night</span></p>
                            </tr>
                            <tr className="tr6">
                                <p className="tag1"> Total Price</p>
                            </tr>

                        </table>
                    </form>
                </div>
        
            </div>
        </div>
        
       
    )
}

export default SingleHotel;