import React, { useState } from 'react';
import './Search-Destinations.css';

const SearchDestinations = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const handleSearch = async () => {
      setLoading(true);
      setError(null);
      setSearchResults([]);
  
      const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${searchQuery}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '052d396dabmshe6fa65472f5f95cp1fae4djsn357fdcb58e8e',
          'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        }
      };
  
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (result.status && result.data) {
          setSearchResults(result.data);
        } else {
          setError('No results found.');
        }
      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    const addToFavorites = (destination) => {
        setFavorites([...favorites, destination]);
      };
    
      const removeFromFavorites = (id) => {
        const updatedFavorites = favorites.filter((fav) => fav.dest_id !== id);
        setFavorites(updatedFavorites);
      };

      

export default SearchDestinations;