import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../Stylling/MakePay.css';
import { VscPerson } from 'react-icons/vsc';
import { IoCashOutline,IoNewspaperOutline } from 'react-icons/io5';
import {BiStats} from 'react-icons/bi';
import Card from './Card';
import Logos from './Logos';
function MakePay(props) {
    return (
        <section className='section-Make'>
            <div className="container py-5">
                <div className="row justify-content-center " >

                    <div className="row ">
                        <div className=" col-lg-6  d-none d-sm-block" >
                            <div className="row g-2">
                                <Card Icons={<VscPerson className='Make-icon' />}
                                    Top='5%' Bottom='0%' Titel='Easy Access'/>
                                <Card Icons={<IoCashOutline className='Make-icon' />}
                                    Top='-8%' Bottom='0%' Titel='Cashflow Visiblity' />

                                <Card Icons={<BiStats className='Make-icon' />}
                                    Top='12%' Bottom='0%' Titel='Use You Connect' />
                                <Card Icons={<IoNewspaperOutline className='Make-icon' />}
                                    Top='0%' Bottom='0%' Titel='Manage Invoicing' />
                            </div>



                        </div>


                        <div className="col-md-12 col-lg-6  d-md-block" id='Make-right'>
                            
                            <h1 className='Make-Title'>
                                Make & Share <span>Payments</span> With Communityr</h1>
                            <p className='Make-p'>Hac sem ut eget tellus diam convallis<br /> lacus a, interdum nulla sem adipiscing inw</p>
                            <Link className='Learn-more-btn'>Learn more  <BsArrowRight /></Link>
                        </div>



                    </div>



                </div>
            </div>


            <Logos/>
            <div className='Make-smallbg'>
            
            </div>
  </section>
    );
}

export default MakePay;