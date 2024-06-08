// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BookSearchPage from './pages/BookSearchPage';
import SearchResultsPage from './pages/SearchResultsPage';
import BookshelfPage from './pages/BookshelfPage';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const addToBookshelf = (book) => {
    if (!bookshelf.find(b => b.key === book.key)) {
      const updatedBookshelf = [...bookshelf, book];
      setBookshelf(updatedBookshelf);
      localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    }
  };

  return (
      <Router>
        <div className="app">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/search">Search Books</Link>
            <Link to="/bookshelf">My Bookshelf</Link>
          </nav>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/search" element={<BookSearchPage />} />
            <Route path="/results" element={<SearchResultsPage addToBookshelf={addToBookshelf} />} />
            <Route path="/bookshelf" element={<BookshelfPage bookshelf={bookshelf} />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
