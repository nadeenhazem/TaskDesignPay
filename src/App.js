import { BrowserRouter } from "react-router-dom";
import NavBarpay from "./Components/NavBarpay";
import Footer from "./Components/Footer";
import PayFaster from "./Components/PayFaster";
import './Stylling/PayFaster.css';
import Image from "./Components/Image";
import MakePay from "./Components/MakePay";
import CredtiCard from "./Components/CredtiCard";
import Customer from "./Components/Customer";
function App() {
 return(
  <div style={{backgroundColor:'#e9e9e9',overflow:'hidden'}}>
  <BrowserRouter>

  <div className='section-PayFaster'>
    {/* <div className="bg-2"></div> */}
  <NavBarpay/>
  <PayFaster/>
  </div>
  <Image/>
  <MakePay/>
  <CredtiCard/>
  
  <Customer/>
  <Footer/>
  </BrowserRouter>
  
  </div>
 )
}

export default App;
