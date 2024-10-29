import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBooks, deleteBook } from "../Utils/Index";

const Read = () => {
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const { readBooks: initialReadBooks } = getBooks();
    setReadBooks(initialReadBooks);
  }, []);

  const handleDeleteBook = (bookId) => {
    deleteBook(bookId);
    setReadBooks((prevBooks) =>
      prevBooks.filter((book) => book.bookId !== bookId)
    );
  };

  return (
    <div className="md:px-24">
      <h1 className="text-2xl font-bold mb-4">Read Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {readBooks && readBooks.length > 0 ? (
          readBooks.map((book) => (
            <div
              key={book.bookId}
              className="border p-4 rounded-lg shadow hover:scale-105 hover:border-green-400"
            >
              <Link to={`/book/${book.bookId}`} className="block">
                <div className="card bg-gray-100 py-6 shadow-xl">
                  <figure>
                    <img
                      className="h-40 w-auto bg-transparent"
                      src={book.image || "default-image.jpg"}
                      alt={book.bookName || "Book cover"}
                    />
                  </figure>
                </div>
              </Link>
              <h2 className="font-bold text-2xl mb-4">{book.bookName}</h2>
              <p className="text-gray-600">By: {book.author}</p>
              <p className="text-sm mb-2">{book.category}</p>
              <p>Rating: {book.rating}</p>

              <button
                onClick={() => handleDeleteBook(book.bookId)}
                className="btn bg-red-500 text-white mt-4"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No books to read yet.</p>
        )}
      </div>
    </div>
  );
};

export default Read;
