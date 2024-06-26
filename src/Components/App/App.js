import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import About from '../About-Page/About';
import Connect from '../Connect-Page/Connect';
import SearchDestinations from '../Search-Destinations-API/Search-Destinations';
import BookingForm from '../Request-Booking/Request-Booking';
import Blog from '../Blog/Blog';
import NotFound from '../Not-Found/NotFound';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/searchdestinations" element={<SearchDestinations />} />
          <Route path="/requestbooking" element={<BookingForm />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
