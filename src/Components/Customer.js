import React from 'react';
import '../Stylling/Customer.css';
import say1 from '../images/say1.jpg';
import say2 from '../images/say2.jpg';
import say3 from '../images/pexels-antonio-conte-4071709.jpg';
import say4 from '../images/say4.jpg';
import say5 from '../images/say5.jpg';
import { useWindowDimensions } from './Hooks';
import Carousel from 'react-bootstrap/Carousel';
import CustomerData, { CustomerCarousel } from './CustomerData';
function Customer(props) {
    const { width } = useWindowDimensions();


    return (
        <>
            {
                width > 700 ?
                    <div style={{ backgroundColor: '#fff' }}>
                        <section className='section-saying'>
                            <div className="container py-5">
                                <div className="row d-flex justify-content-center "  >

                                    <div className="row g-1">
                                        <div className=" col-md-12 col-lg-6  ">
                                            <h1 className='Customer-title'>What Our <span>Customer</span> Are saying</h1>
                                            <p className='Customer-p'>Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a, interdum nulla sem adipiscing inw</p>
                                        </div>


                                        <div className="col-md-12 col-lg-6  d-md-block" id='say-positon'>
                                            <div className='say-div'>
                                                <img src={say3} alt='say' className='say-img' />
                                                <div className='say-text'>
                                                    <p>Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a, interdum nulla sem adipiscing inw</p>
                                                    <h1>Leo Maynus</h1>
                                                    <p>CEO at Softpanda</p>
                                                </div>
                                            </div>
                                            <CustomerData img={say1}  name='Reem Kamal' job='Frontend Developer' />
                                            <CustomerData img={say2}  name='Joy Mark' job='Backend Developer' />
                                            <CustomerData img={say5} display='none' name='Monica geller' job=' Senior Ui/ux' />
                                            <CustomerData img={say4} display='none' name='Androw Morad' job='Manager' />
                                        </div>



                                    </div>



                                </div>
                            </div>




                        </section></div> :
                    <section className='section-saying'>
                        <div className=" col-md-12 col-lg-6  ">
                            <h1 className='Customer-title'>What Our <span>Customer</span> Are saying</h1>
                            <p className='Customer-p'>Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a, interdum nulla sem adipiscing inw</p>
                        </div>
                        <Carousel fade>
                            <Carousel.Item >
                                <CustomerCarousel img={say3} display='block' name='Leo Maynus' job='CEO at Softpanda' />

                            </Carousel.Item>

                            <Carousel.Item >

                                <CustomerCarousel img={say1} display='none' name='Reem Kamal' job='Frontend Developer' />


                            </Carousel.Item>

                            <Carousel.Item >
                                <CustomerCarousel img={say2} display='none' name='Joy Mark' job='Backend Developer' />

                            </Carousel.Item>

                            <Carousel.Item >

                                <CustomerCarousel img={say5} display='none' name='Monica geller' job=' Senior Ui/ux' />


                            </Carousel.Item>

                            <Carousel.Item >
                                <CustomerCarousel img={say4} display='none' name='Androw Morad' job='Manager' />


                            </Carousel.Item>




                        </Carousel>
                    </section>
            }

        </>
    );
}

export default Customer;
