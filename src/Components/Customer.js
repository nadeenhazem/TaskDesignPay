import React from 'react';
import '../Stylling/Customer.css';
import say1 from '../images/say1.jpg';
import say2 from '../images/say2.jpg';
import say3 from '../images/pexels-antonio-conte-4071709.jpg';
import say4 from '../images/say4.jpg';
import say5 from '../images/say5.jpg';
import { useWindowDimensions } from './Hooks';
import Carousel from 'react-bootstrap/Carousel';
function Customer(props) {
    const { width } = useWindowDimensions();
    return (
        <>
            {
                width > 700 ? <section className='section-saying'>
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
                                    <div className='say-div'>
                                        <img src={say1} alt='say' className='say-img' />


                                    </div> <div className='say-div'>
                                        <img src={say2} alt='say' className='say-img' />

                                    </div>
                                    <div className='say-div'>
                                        <img src={say5} alt='say' className='say-img' />

                                    </div>
                                    <div className='say-div'>
                                        <img src={say4} alt='say' className='say-img' />

                                    </div>

                                </div>



                            </div>



                        </div>
                    </div>




                </section> :
                    <section className='section-saying'>
                        <div className=" col-md-12 col-lg-6  ">
                                    <h1 className='Customer-title'>What Our <span>Customer</span> Are saying</h1>
                                    <p className='Customer-p'>Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a, interdum nulla sem adipiscing inw</p>
                                </div>
                        <Carousel fade>
                        <Carousel.Item >
                                    <img className="d-block say-img" src={say3} alt='say'/>
                                    <div className='say-text'>
                                            <p>Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a, interdum nulla sem adipiscing inw</p>
                                            <h1>Leo Maynus</h1>
                                            <p>CEO at Softpanda</p>
                                        </div>
                                </Carousel.Item>
                            
                                <Carousel.Item >
                                    <img className="d-block say-img" src={say2} alt='say'/>
                                                                       <div className='say-text'>
                                            <p>Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a, interdum nulla sem adipiscing inw</p>
                                            <h1>Leo Maynus</h1>
                                            <p>CEO at Softpanda</p>
                                        </div>

                                </Carousel.Item>
                            
                                <Carousel.Item >
                                    <img className="d-block  say-img" src={say1} alt='say'/>
                                    <div className='say-text'>
                                            <p>Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a, interdum nulla sem adipiscing inw</p>
                                            <h1>Leo Maynus</h1>
                                            <p>CEO at Softpanda</p>
                                        </div>

                                </Carousel.Item>
                            
                                <Carousel.Item >
                                    <img className="d-block  say-img" src={say4} alt='say'/>
                                    <div className='say-text'>
                                            <p>Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a, interdum nulla sem adipiscing inw</p>
                                            <h1>Leo Maynus</h1>
                                            <p>CEO at Softpanda</p>
                                        </div>

                                </Carousel.Item>
                            
                                <Carousel.Item >
                                    <img className="d-block  say-img" src={say5} alt='say'/>
                                    <div className='say-text'>
                                            <p>Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a, interdum nulla sem adipiscing inw</p>
                                            <h1>Leo Maynus</h1>
                                            <p>CEO at Softpanda</p>
                                        </div>

                                </Carousel.Item>
                            

                           
                           
                        </Carousel>
                    </section>
            }

        </>
    );
}

export default Customer;