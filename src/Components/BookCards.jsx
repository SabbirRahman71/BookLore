import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { saveBookToRead, saveBookToWishlist } from "../Utils/Index"; // Adjust path as necessary

const BookCards = ({ books }) => {
  const [sortOption, setSortOption] = useState("");
  const [sortedBooks, setSortedBooks] = useState(books);

  // Sorting logic
  const sortBooks = (books, option) => {
    switch (option) {
      case "rating":
        return [...books].sort((a, b) => b.rating - a.rating);
      case "yearOfPublishing":
        return [...books].sort(
          (a, b) => b.yearOfPublishing - a.yearOfPublishing
        );
      case "totalPages":
        return [...books].sort((a, b) => b.totalPages - a.totalPages);
      default:
        return books;
    }
  };

  // Function to handle sort changes
  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
    const sortedArray = sortBooks(books, option);
    setSortedBooks(sortedArray);
  };

  useEffect(() => {
    setSortedBooks(books); // Reset to original books when component mounts
  }, [books]);

  return (
    <div className="md:px-24">
      <div className="flex justify-between items-center my-6">
        <h1 className="text-2xl text-center font-bold">Books List</h1>
        <div className="flex gap-2 items-center">
          <label htmlFor="sort" className="font-semibold text-gray-700">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className="border rounded px-2 py-1"
          >
            <option value="">Select...</option>
            <option value="rating">Rating</option>
            <option value="yearOfPublishing">Published Year</option>
            <option value="totalPages">Total Pages</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
        {sortedBooks.map((book) => {
          const { bookId, bookName, author, image, rating, category, tags } =
            book;

          return (
            <div
              key={bookId}
              className="border p-4 rounded-lg shadow hover:scale-105 hover:border-green-400"
            >
              <Link to={`/book/${bookId}`} className="block">
                <div className="card bg-gray-100 py-6 shadow-xl">
                  <figure>
                    <img
                      className="h-40 w-auto bg-transparent"
                      src={image}
                      alt={bookName}
                    />
                  </figure>
                </div>
              </Link>

              <div className="flex flex-wrap gap-2 my-6">
                {tags.slice(0, 2).map((tag, index) => (
                  <p
                    key={index}
                    className="bg-green-100 text-green-600 cursor-pointer text-xs font-semibold px-2 py-1 rounded-full"
                  >
                    {tag}
                  </p>
                ))}
              </div>

              <div className="mt-4 h-auto">
                <h2 className="font-bold text-2xl mb-4">{bookName}</h2>
                <p className="text-gray-600">By: {author}</p>
                <p className="text-sm font-semibold my-2">{category}</p>
                <p>Rating: {rating}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookCards;
