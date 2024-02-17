import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Tourism/Component/Header';
import Home from './Tourism/pages/Home';
import Footer from './Tourism/Component/Footer';
import About from './Tourism/pages/About';
import Service from './Tourism/pages/Service';
import Package from './Tourism/pages/Package';
import Destination from './Tourism/pages/Destination';
import Booking from './Tourism/pages/Booking';
import Guides from './Tourism/pages/Guides';
import Testimonial from './Tourism/pages/Testimonial';
import Contact from './Tourism/pages/Contact';
import Error from './Tourism/pages/Error';



function App() {
  return (
   
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={ <> <Header/> <Home/> <Footer/> </> }></Route>
        <Route path='/About' element ={ <> <Header/> <About/> <Footer/> </> }></Route>
        <Route path='/Service' element ={ <> <Header/> <Service/> <Footer/> </> }></Route>
        <Route path='/Package' element ={ <> <Header/> <Package/> <Footer/> </> }></Route>
        <Route path='/Destination' element ={ <> <Header/> <Destination/> <Footer/> </> }></Route>
        <Route path='/Booking' element ={ <> <Header/> <Booking/> <Footer/> </> }></Route>
        <Route path='/Guides' element ={ <> <Header/> <Guides/> <Footer/> </> }></Route>
        <Route path='/Testimonial' element ={ <> <Header/> <Testimonial/> <Footer/> </> }></Route>
        <Route path='/Contact' element ={ <> <Header/> <Contact/> <Footer/> </> }></Route>
        <Route path='/Error' element ={ <> <Header/> <Error/> <Footer/> </> }></Route>

      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
