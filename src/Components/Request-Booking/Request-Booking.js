import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./Request-Booking.css";

const BookingForm = () => {
    const serviceID = 'service_id';
    const templateID = 'template_id';
    const userID = 'user_id';
  
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
    
    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email address is invalid';
        }
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.zipCode) newErrors.zipCode = 'Zip code is required';
        if (!formData.numberOfAdults) newErrors.numberOfAdults = 'Number of adults is required';
        if (!formData.numberOfChildren) newErrors.numberOfChildren = 'Number of children is required';
        if (!formData.preferredStartDate) newErrors.preferredStartDate = 'Preferred start date is required';
        if (!formData.preferredEndDate) newErrors.preferredEndDate = 'Preferred end date is required';
        if (!formData.preferredHotel) newErrors.preferredHotel = 'Preferred hotel is required';
        return newErrors;
      };


    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (name, date) => {
    setFormData({
      ...formData,
      [name]: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }