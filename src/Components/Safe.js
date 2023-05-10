import React from 'react';
import TextParag from './TextParag';
import '../Stylling/Safe.css';
function Safe(props) {
    return (
        <>
            <section className='safe-section' >
                <div className='Safe-Title' >
                    <TextParag redText='SECURE TRANSACTION'
                        header='Safe Yours' header2='Savings' />
                </div>
                <div className="safe-main-div" >
                    <img src='https://i.ibb.co/LZ8c7GK/safe1.jpg' alt='safe' />
                    <img src='https://i.ibb.co/FVHHTPQ/safe2.jpg' alt='safe' />
                    <img src='https://i.ibb.co/gRq9KDX/safe3.jpg' alt='safe' />
                    <img src='https://i.ibb.co/PNtF6bV/safe4.jpg' alt='safe' />
                    <img src='https://i.ibb.co/x8WHMcm/safe5.jpg' alt='safe' />
                    <img src='https://i.ibb.co/6ZNfsd7/safe6.jpg' alt='safe' />
                    <img src='https://i.ibb.co/b13S2gk/safe7.jpg' alt='safe' />
                    <img src='https://i.ibb.co/QvDRYdd/safe8.jpg' alt='safe' />
                    <img src='https://i.ibb.co/bzYfVPr/safe9.jpg' alt='safe' />
                    <img src='https://i.ibb.co/Fb5zLvM/safe10.jpg' alt='safe' />
                </div>
            </section>

        </>
    );
}

export default Safe;