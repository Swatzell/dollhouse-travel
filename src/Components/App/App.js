import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import About from '../About-Page/About';
import Connect from '../Connect-Page/Connect';
import PlacesToStay from '../Places-to-Stay/Places-to-Stay';
import RequestBooking from '../Request-Booking/Request-Booking';
import Blog from '../Blog/Blog';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/placestostay" element={<PlacesToStay />} />
          <Route path="/requestbooking" element={<RequestBooking />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
