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

        const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('Request timeout')), 10000));

        try {
            const response = await Promise.race([fetch(url, options), timeout]);

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();

            if (result.status && result.data) {
                setSearchResults(result.data);
            } else {
                setError('No results found.');
            }
        } catch (error) {
            console.error(error);
            if (error.message === 'Request timeout') {
                setError('The request timed out. Please try again.');
            } else {
                setError('An error occurred while fetching data.');
            }
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

    return (
        <div className="searchsection-container">
            <h1>Destination Search</h1>
            <div className="search-container">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter a destination"
                />
                <button onClick={handleSearch} disabled={loading}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </div>

            {error && <div className="error">{error}</div>}

            <div className="results-container">
                <h2>Search Results</h2>
                {loading && <p>Loading...</p>}
                <ul className="destination-list">
                    {searchResults.map((destination) => (
                        <li key={destination.dest_id} className="destination-item">
                            <img src={destination.image_url} alt={destination.label} />
                            <span>{destination.label}</span>
                            <button onClick={() => addToFavorites(destination)}>Add to Favorites</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="favorites-container">
                <h2>Favorites</h2>
                <ul className="destination-list">
                    {favorites.map((favorite) => (
                        <li key={favorite.dest_id} className="destination-item">
                            <img src={favorite.image_url} alt={favorite.label} />
                            <span>{favorite.label}</span>
                            <button onClick={() => removeFromFavorites(favorite.dest_id)}>Remove from Favorites</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchDestinations;