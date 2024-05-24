import React, { createContext, useContext, useState } from 'react';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [selectedBook, setSelectedBook] = useState(null);
    const [requests, setRequests] = useState([]);

    return (
        <BookContext.Provider value={{ selectedBook, setSelectedBook, requests, setRequests }}>
            {children}
        </BookContext.Provider>
    );
};

export const useBook = () => useContext(BookContext);
