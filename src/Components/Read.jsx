import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { getBooks, deleteBook } from "../Utils/Index";
import { FaRegStar, FaRegBookmark, FaUser, FaBookOpen } from "react-icons/fa";

const Read = () => {
  const [readBooks, setReadBooks] = useState([]);
  const { sortOption } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    const { readBooks: initialReadBooks } = getBooks();
    setReadBooks(initialReadBooks);
  }, []);

  const handleDeleteBook = (bookId, event) => {
    event.stopPropagation();
    deleteBook(bookId);
    setReadBooks((prevBooks) =>
      prevBooks.filter((book) => book.bookId !== bookId)
    );
  };

  const handleViewDetails = (bookId, event) => {
    event.stopPropagation();
    navigate(`/book/${bookId}`);
  };

  // Sort readBooks based on the selected sort option
  const sortedBooks = [...readBooks].sort((a, b) => {
    if (sortOption === "rating") return b.rating - a.rating;
    if (sortOption === "publishedYear")
      return b.publishedYear - a.publishedYear;
    if (sortOption === "totalPages") return b.totalPages - a.totalPages;
    return 0;
  });

  return (
    <div className="md:px-24 py-10 w-full">
      <div className="text-2xl font-bold text-center font-playfair mb-4">
        Read Books
      </div>
      <div className="pt-8">
        {sortedBooks.length > 0 ? (
          sortedBooks.map((book) => (
            <div
              key={book.bookId}
              className="flex border p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 mb-4 bg-white"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-40 w-28 object-cover rounded-lg"
                  src={book.image || "default-image.jpg"}
                  alt={book.bookName || "Book cover"}
                />
              </div>
              <div className="flex-grow ml-4">
                <h2 className="font-bold text-2xl font-playfair tracking-wide mb-1">
                  {book.bookName}
                </h2>
                <p className="text-gray-500 flex items-center text-sm mb-1">
                  <FaUser className="mr-1 text-gray-400" />
                  Published By: {book.author}
                </p>
                <p className="text-gray-500 flex items-center text-sm mb-1">
                  <FaRegBookmark className="mr-1 text-gray-400" /> Publisher:{" "}
                  {book.publisher}
                </p>
                <p className="text-gray-500 flex items-center text-sm mb-1">
                  <FaBookOpen className="mr-1 text-gray-400" /> Pages:{" "}
                  {book.totalPages}
                </p>
                <hr className="py-2" />
                <div className="flex gap-6">
                  <p className="flex items-center bg-blue-200 text-blue-600 px-2 py-1 rounded">
                    Category: {book.category}
                  </p>
                  <p className="flex items-center bg-green-200 text-green-500 px-2 py-1 rounded">
                    <FaRegStar className="mr-1" /> Rating: {book.rating}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end ml-4">
                <button
                  onClick={(e) => handleViewDetails(book.bookId, e)}
                  className="btn bg-blue-500 text-white mb-2 rounded hover:bg-blue-600 transition-colors duration-300 px-4 py-2"
                >
                  Details
                </button>
                <button
                  onClick={(e) => handleDeleteBook(book.bookId, e)}
                  className="btn bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300 px-4 py-2"
                >
                  Remove
                </button>
              </div>
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
