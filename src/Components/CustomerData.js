import React,{useState} from 'react';
import '../Stylling/Customer.css';

function CustomerData(props) {
    const [displayData,setDisplayData]=useState(false);
    const Clicked=()=>{
        setDisplayData(!displayData)
        console.log(displayData)
    }
   
    return (
        
        <div className='say-div'>
            <img src={props.img} alt='say' className='say-img' onClick={Clicked}/>
            <div className='say-text' style={{display:displayData?'block':'none'}}>
                <p>Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a, interdum nulla sem adipiscing inw</p>
                <h1>{props.name}</h1>
                <p>{props.job}</p>
                
            
        </div>
        </div>
    );
}

export default CustomerData;
export function CustomerCarousel(props){
    return(
        <>
            <img src={props.img} alt='say' className='say-img' />
            <div className='say-text' >
                <p>Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a, interdum nulla sem adipiscing inw</p>
                <h1>{props.name}</h1>
                <p>{props.job}</p>
                
            
        </div>
        </>
    )
}
