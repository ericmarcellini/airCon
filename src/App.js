import React from 'react';
import Navbar from './components/Navbar.js';
import Button from 'react-bootstrap/Button';
import MyCard from './components/Card.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h4>-Air conditioner Repair & Installation</h4>
      <h1>We're Fridge Poppa LLC</h1>
      <Button variant="primary">FREE ESTIMATES</Button>{' '}
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-4'>
            <MyCard />
          </div>
          <div className='col-md-4'>
            <MyCard />
          </div>
          <div className='col-md-4'>
            <MyCard />
          </div>
        </div>
      </div>
      <p> 
        Welcome to Fridge Poppa LLC, your go-to source for professional air conditioner services for your home. We are a trusted and experienced company specializing in air conditioner installation, repair, maintenance, and replacement.
        At Fridge Poppa LLC, we understand the importance of a well-functioning air conditioning system. Our team of highly skilled technicians is equipped with the knowledge and tools necessary to ensure that your home's air conditioner is functioning at peak performance.  
      </p>

    { /*  content goes here -> */}
    </div>
  );
}

export default App;
