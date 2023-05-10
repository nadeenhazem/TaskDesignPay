import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylling/NavBar_Footer.css';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import Tryblinqpay from './Tryblinqpay';
function Footer(props) {
    const Services = ['Design', 'Coding', 'Development', 'Marketing', 'Digital Marketing', 'Product Design'];
    const Product = ['Hotel Management', 'Rent Management', 'Micro-Finanace', 'Industry', 'Dohoko'];
    const Company = ['Las Vegas', 'New York', 'Tokyo', 'Paris'];
    return (
        <>

            <section className='section-Footer'>
                <Tryblinqpay />
                <div className="container" style={{ minWidth: '100%' }}>
                    <div className="row  justify-content-center align-items-center h-100">
                        <div className="col col-xl-10 " >
                            <div className="card" style={{ backgroundColor: 'transparent', borderStyle: 'none', marginBottom: '2%' }}>
                                <div className="row g-0" >
                                    <div className="col-md-6 col-lg-4  d-md-block" style={{ position: 'relative' }}>
                                        
                                        <p className='logo logo-footer'>
                                        <svg width="39" height="30" viewBox="0 0 39 42" >
                                            <path d="M38.653 20.9008C38.653 22.0504 38.294 23.1717 37.6255 24.1096C36.9571 25.0475 36.0122 25.7557 34.9215 26.1363C34.6277 26.1983 34.3362 26.2751 34.0481 26.3619C32.052 26.9809 30.2935 28.1911 29.0075 29.8308C27.7215 31.4705 26.9694 33.4616 26.8516 35.538C26.8288 35.9589 26.8314 36.3808 26.8596 36.8014C26.7514 37.7919 26.3769 38.7351 25.7756 39.5319C25.1743 40.3287 24.3683 40.9498 23.4423 41.3297C22.5163 41.7097 21.5045 41.8346 20.5133 41.6913C19.522 41.548 18.5878 41.1418 17.8089 40.5153C17.03 39.8889 16.4351 39.0654 16.0867 38.1313C15.7383 37.1972 15.6493 36.187 15.829 35.2068C16.0088 34.2267 16.4506 33.3128 17.1081 32.5611C17.7656 31.8095 18.6145 31.2479 19.5656 30.9353C19.7818 30.8864 19.9973 30.8296 20.2121 30.7649C22.2705 30.1495 24.0826 28.9067 25.3927 27.212C26.7029 25.5172 27.4449 23.456 27.514 21.3193C27.5223 21.0598 27.5223 20.8003 27.514 20.5409C27.4202 18.4404 26.6766 16.4199 25.3849 14.7556C24.0932 13.0912 22.3164 11.8641 20.2971 11.2419C20.0419 11.1618 19.7833 11.0941 19.5236 11.0366C18.5742 10.7099 17.7311 10.1342 17.0834 9.3703C16.4358 8.6064 16.0076 7.68267 15.8442 6.69673C15.6808 5.71079 15.7882 4.69925 16.155 3.76901C16.5219 2.83876 17.1346 2.02435 17.9283 1.41184C18.7221 0.799325 19.6675 0.411458 20.6646 0.289221C21.6617 0.166983 22.6735 0.314916 23.593 0.717388C24.5126 1.11986 25.3057 1.76192 25.8887 2.57573C26.4717 3.38953 26.8228 4.34486 26.905 5.34076C26.8947 5.62053 26.897 5.90482 26.905 6.1812C27.008 8.28834 27.7645 10.312 29.0706 11.9743C30.3767 13.6365 32.1682 14.8557 34.199 15.4644C34.4024 15.5253 34.6065 15.5791 34.8114 15.6257C35.9289 15.9902 36.9021 16.6965 37.592 17.6438C38.2819 18.5911 38.6532 19.731 38.653 20.9008Z" fill="white" />
                                            <path d="M0.323936 35.0326C0.39852 33.8869 0.828398 32.7924 1.55437 31.8998C2.28033 31.0072 3.26668 30.3604 4.37756 30.0486C4.68001 30.0057 4.97793 29.9485 5.27131 29.8771C7.51536 29.3367 9.51073 28.0596 10.9351 26.2521C12.3594 24.4447 13.1295 22.2124 13.1211 19.9159C13.293 18.9348 13.7272 18.0178 14.3783 17.2612C15.0294 16.5046 15.8733 15.9363 16.8214 15.6159C17.7694 15.2956 18.7867 15.235 19.7664 15.4406C20.7462 15.6462 21.6521 16.1104 22.3893 16.7844C23.1265 17.4583 23.6676 18.3173 23.9559 19.271C24.2441 20.2248 24.269 21.2381 24.0277 22.2047C23.7864 23.1712 23.2879 24.0554 22.5846 24.7642C21.8813 25.4731 20.9991 25.9805 20.0306 26.2333C19.8038 26.2694 19.5788 26.3134 19.3558 26.3653C17.2621 26.8501 15.3743 27.9765 13.9587 29.5857C12.5432 31.1948 11.6714 33.2054 11.4663 35.3338C11.4413 35.5842 11.4277 35.8358 11.4221 36.0873C11.3206 36.8749 11.0505 37.6317 10.6299 38.3066C10.2093 38.9814 9.64802 39.5587 8.98394 39.9993C8.31986 40.44 7.56845 40.7338 6.78045 40.861C5.99245 40.9881 5.18619 40.9456 4.41612 40.7363C4.21764 40.6618 4.01802 40.5941 3.815 40.5343C2.72483 40.0996 1.80044 39.3337 1.17358 38.3458C0.546722 37.3579 0.24938 36.1984 0.323936 35.0326Z" fill="white" />
                                        </svg>
                                            blinqpay
                                        </p>
                                        <div >
                                            <BsInstagram className='footer-icons' />
                                            <BsTwitter className='footer-icons' />
                                            <FaLinkedinIn className='footer-icons' />
                                        </div>
                                        <div >
                                            <p className='footer-p'>
                                                @ Copy Right 2021.
                                                All Rights reserved
                                            </p>
                                        </div>
                                    </div>



                                    <div className="col-md-6 col-lg-3  d-md-block" >
                                        <p className='footer-title'>Services</p>
                                        {
                                            Services.map((serv) =>
                                                <Link className='footer-Links' key={serv}>{serv}</Link>
                                            )
                                        }

                                    </div>
                                    <div className="col-md-6 col-lg-3  d-md-block" >
                                        <p className='footer-title'>Product</p>
                                        {Product.map((item) =>
                                            <Link className='footer-Links' key={item}>
                                                {item}</Link>)}


                                    </div>
                                    <div className="col-md-6 col-lg-2  d-md-block" >
                                        <p className='footer-title'>Company</p>
                                        {
                                            Company.map((company) =>
                                                <Link className='footer-Links' key={company}>
                                                    {company}</Link>
                                            )
                                        }




                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    );

}

export default Footer;