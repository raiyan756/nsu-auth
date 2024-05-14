import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Librarybook = () => {
    const allBooks = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');
    const [visibleBooks, setVisibleBooks] = useState(8); // Number of initially visible books

    const handleSearchChange = event => {
        setSearchQuery(event.target.value);
        setVisibleBooks(8); // Reset visible books when search query changes
    };

    const handleShowMore = () => {
        setVisibleBooks(prevVisibleBooks => prevVisibleBooks + 8); // Increase visible books by 8
    };

    const filteredBooks = allBooks.filter(book =>
        book['book-name'].toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search books by name..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="px-4 py-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredBooks.slice(0, visibleBooks).map((book, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={book['book-image']} alt={book['book-name']} className="w-full h-40 object-cover object-center" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{book['book-name']}</h2>
                            <p className="text-gray-600 mb-2">Location: {book['book-location']}</p>
                            <p className="text-gray-600 mb-2">Author: {book['author-name']}</p>
                        </div>
                    </div>
                ))}
            </div>
            {filteredBooks.length > visibleBooks && (
                <div className="flex justify-center mt-4">
                    <button onClick={handleShowMore} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Librarybook;
