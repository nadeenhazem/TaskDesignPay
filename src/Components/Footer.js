import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylling/NavBar_Footer.css';
import { BsInstagram,BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn} from 'react-icons/fa';
import Tryblinqpay from './Tryblinqpay';
function Footer(props) {
    const Services = ['Design', 'Coding', 'Development', 'Marketing', 'Digital Marketing', 'Product Design'];
    const Product = ['Hotel Management', 'Rent Management', 'Micro-Finanace', 'Industry', 'Dohoko'];
    const Company = ['Las Vegas', 'New York', 'Tokyo', 'Paris'];
    return (
        <>  
        
        <section className='section-Footer'>
        <Tryblinqpay/>
            <div className="container py-5 h-0" style={{ minWidth: '100%' }}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10 " >
                        <div className="card" style={{ backgroundColor: 'transparent', borderStyle: 'none', marginBottom: '2%' }}>
                            <div className="row g-0" >
                                <div className="col-md-6 col-lg-4  d-md-block" style={{position:'relative'}}>
                                    
                                     <p className='logo'>
                                        blinqpay
                                     </p>
                                    <div >
                                        <BsInstagram className='footer-icons'/>
                                        <BsTwitter className='footer-icons'/>
                                        <FaLinkedinIn className='footer-icons'/>
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