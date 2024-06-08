// BookshelfPage.js
import React from 'react';
import './BookshelfPage.css';

const BookshelfPage = ({ bookshelf }) => {
    return (
        <div className="bookshelf-page">
            <h2>My Bookshelf</h2>
            <div className="bookshelf-grid">
                {bookshelf.map(book => (
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookshelfPage;
