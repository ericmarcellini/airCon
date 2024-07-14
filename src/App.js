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
    { /*  content goes here -> */}
    </div>
  );
}

export default App;
