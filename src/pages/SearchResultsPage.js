// SearchResultsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './SearchResultsPage.css';

const SearchResultsPage = ({ addToBookshelf }) => {
    const [results, setResults] = useState([]);
    const [addedToBookshelf, setAddedToBookshelf] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
                setResults(response.data.docs);
            } catch (error) {
                console.error("Error fetching data from API", error);
            }
        };

        if (query) {
            fetchData();
        }
    }, [query]);

    const handleAddToBookshelf = (book) => {
        addToBookshelf(book);
        setAddedToBookshelf((prevState) => [...prevState, book.key]);
    };

    return (
        <div className="results-page">
            <h2>Search Results for "{query}"</h2>
            <div className="results-grid">
                {results.map(book => (
                    <div key={book.key} className="book-card">
                        {book.cover_i && (
                            <img
                                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                                alt={`${book.title} cover`}
                                className="book-cover"
                            />
                        )}
                        <h3>{book.title}</h3>
                        <p>{book.author_name?.join(', ')}</p>
                        {book.edition_count && <span>Editions: {book.edition_count}</span>}
                        <button
                            onClick={() => handleAddToBookshelf(book)}
                            style={{ backgroundColor: addedToBookshelf.includes(book.key) ? '#ccc' : '#e50914' }}
                            disabled={addedToBookshelf.includes(book.key)}
                        >
                            {addedToBookshelf.includes(book.key) ? 'Added to Bookshelf' : 'Add to Bookshelf'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResultsPage;
