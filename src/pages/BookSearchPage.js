// src/pages/BookSearchPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typed from 'typed.js';
import './BookSearchPage.css';

const BookSearchPage = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Initialize Typed.js
        const options = {
            strings: ['SEARCH YOUR FAVOURITE BOOK', 'SEARCH YOUR FAVOURITE AUTHOR'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            smartBackspace: true,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true
        };
        const typed = new Typed('.typed-text', options);

        // Clean up on unmount
        return () => {
            typed.destroy();
        };
    }, []);

    const handleSearch = () => {
        navigate(`/results?query=${query}`);
    };

    return (
        <div className="search-page">
            <h1 className="typed-text"></h1>
            <input
                type="text"
                placeholder="Search for books..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">Search</button>
        </div>
    );
};

export default BookSearchPage;
