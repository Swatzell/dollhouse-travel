import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./Request-Booking.css";

const BookingForm = () => {
    const form = useRef();
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

    const serviceID = 'default_service';
    const templateID = 'template_4qitqlf';
    const userID = 'cZPJCVxwrSzEluBCO';

    
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
    
        setIsSubmitting(true);
        setErrors({});
    
        const formattedData = {
            ...formData,
            preferredStartDate: formData.preferredStartDate ? formData.preferredStartDate.toLocaleDateString() : '',
            preferredEndDate: formData.preferredEndDate ? formData.preferredEndDate.toLocaleDateString() : '',
        };
    
        emailjs.send(serviceID, templateID, formattedData, userID)
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                setIsSubmitted(true);
                setFormData({
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
            })
            .catch((error) => {
                console.error('Failed to send email.', error.text);
                setErrors({ submit: 'Failed to send email. Please try again later.' });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

  return (
    <div className="container">
      <h1>Request A Booking Consultation</h1>
      <form ref={form} onSubmit={handleSubmit}>
      Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          {errors.name && <span className="error">{errors.name}</span>}
        
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          {errors.address && <span className="error">{errors.address}</span>}
        </label>
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
          {errors.city && <span className="error">{errors.city}</span>}
        </label>
        <label>
          State:
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />
          {errors.state && <span className="error">{errors.state}</span>}
        </label>
        <label>
          Zip Code:
          <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
          {errors.zipCode && <span className="error">{errors.zipCode}</span>}
        </label>
        <label>
          Number of Adults:
          <input type="number" name="numberOfAdults" value={formData.numberOfAdults} onChange={handleChange} required />
          {errors.numberOfAdults && <span className="error">{errors.numberOfAdults}</span>}
        </label>
        <label>
          Number of Children:
          <input type="number" name="numberOfChildren" value={formData.numberOfChildren} onChange={handleChange} required />
          {errors.numberOfChildren && <span className="error">{errors.numberOfChildren}</span>}
        </label>
        <label>
          Preferred Start Date:
          <DatePicker
            selected={formData.preferredStartDate}
            onChange={(date) => handleDateChange('preferredStartDate', date)}
            dateFormat="MM/dd/yyyy"
            required
          />
          {errors.preferredStartDate && <span className="error">{errors.preferredStartDate}</span>}
        </label>
        <label>
          Preferred End Date:
          <DatePicker
            selected={formData.preferredEndDate}
            onChange={(date) => handleDateChange('preferredEndDate', date)}
            dateFormat="MM/dd/yyyy"
            required
          />
          {errors.preferredEndDate && <span className="error">{errors.preferredEndDate}</span>}
        </label>
        <label>
          Preferred Hotel:
          <input type="text" name="preferredHotel" value={formData.preferredHotel} onChange={handleChange} required />
          {errors.preferredHotel && <span className="error">{errors.preferredHotel}</span>}
        </label>
        <label>
          Second Hotel Preference:
          <input type="text" name="secondHotelPreference" value={formData.secondHotelPreference} onChange={handleChange} />
        </label>
        <label>
          Special Requests:
          <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} />
        </label>
        {errors.submit && <span className="error">{errors.submit}</span>}
        {isSubmitted && <span className="success">Form submitted successfully!</span>}
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>
    </div>
  );
};


BookingForm.propTypes = {
    serviceID: PropTypes.string.isRequired,
    templateID: PropTypes.string.isRequired,
    userID: PropTypes.string.isRequired,
    recipientEmail: PropTypes.string.isRequired,
  };
  
export default BookingForm;