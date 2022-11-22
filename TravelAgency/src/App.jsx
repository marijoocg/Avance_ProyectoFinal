import React from 'react';
import SignIn from './components/SignIn';
import MainPage from './components/MainPage1';
import HotelRes from './components/HotelRes';
import Flight from './components/Flight';
import History from './components/History';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import {Routes } from 'react-router-dom';
/*
import { Navbar, Nav, Container, Col, Row }from 'react-bootstrap'
<Navbar class="navbar">
<Link to="/"><Navbar.Brand ></Navbar.Brand></Link>
<Link to="/Mainpage"><Navbar.Brand >Travel Agency</Navbar.Brand></Link>
<Nav className="me-auto">
<Link to="/"><Navbar.Brand ></Navbar.Brand></Link>
<Link to="/Mainpage"><Navbar.Brand href="#Home" >Home</Navbar.Brand></Link>
<Link to="/Flight"><Navbar.Brand href="#flights">Flights</Navbar.Brand></Link>
<Link to="/History"> <Navbar.Brand href="#History">History</Navbar.Brand></Link>
</Nav>
</Navbar>

<Routes>
<Route path='/' element={<SignIn/>}/>  
<Route path='/Mainpage' element={<MainPage/>}/>  
<Route path='/Reservations' element={<HotelRes/>}/> 
<Route path='/History' element={<History/>}/> 
<Route path='/Flight' element={<Flight/>}/>
</Routes>
*/
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<SignIn/>}/>  
        <Route path='/Mainpage' element={<MainPage/>}/>  
        <Route path='/Reservations' element={<HotelRes/>}/> 
        <Route path='/History' element={<History/>}/> 
        <Route path='/Flight' element={<Flight/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
