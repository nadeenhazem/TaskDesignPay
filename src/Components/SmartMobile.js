import React from 'react';
import profile1 from '../images/profile1.jpg';
import profile2 from '../images/profile2.jpg';
import profile3 from '../images/profile3.jpg';
import profile4 from '../images/profile4.jpg';
import profile5 from '../images/profile5.jpg';
import TextParag from './TextParag';
import '../Stylling/SmartMobile.css'
function SmartMobile(props) {
    return (
        <section >
            <div className="container py-5">
                <div className="row d-flex justify-content-center " >
                    <div className="row g-2">
                        <div className=" col-md-12 col-lg-6  d-md-block" >
                            <div className='imgs-div'>
                                <img src={profile1} className='profile-img' alt='profile' />
                                <img src={profile2} className='profile-img' alt='profile' />
                                <img src={profile4} className='profile-img  P-img3 ' alt='profile' />
                                <img src={profile3} className='profile-img ' alt='profile' />
                                <img src={profile5} className='profile-img P-img5' alt='profile' />
                            </div>

                        </div>

                        <div className=" col-md-12 col-lg-6  d-md-block Smart-div-Text">
                            <TextParag redText='MOBILE TRANSACTION'
                                header='Smart Mobile' header2='Banking ' />
                        </div>


                    </div>



                </div>
            </div>



        </section>
    );
}

export default SmartMobile;