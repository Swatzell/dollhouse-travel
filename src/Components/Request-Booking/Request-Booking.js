import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./Request-Booking.css";

const BookingForm = ({ serviceID, templateID, userID, recipientEmail }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      numberOfAdults: '',
      numberOfChildren: '',
      preferredStartDate: null,
      preferredEndDate: null,
      preferredHotel: '',
      secondHotelPreference: '',
      specialRequests: '',
    });
  
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    