// RequestBooks.jsx
import React from 'react';
import { useBook } from './BookContext';

const RequestBooks = () => {
  const { selectedBook } = useBook();
  
  return (
    <div>
      {selectedBook && (
        <div className="card">
          <h2>Requested Book</h2>
          <p>{selectedBook.bookname}</p>
          {/* Display other book details as needed */}
        </div>
      )}
    </div>
  );
};

export default RequestBooks;
