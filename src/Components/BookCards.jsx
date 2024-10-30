import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const BookCards = ({ books }) => {
  const [visibleBooks, setVisibleBooks] = useState(6);

  const showMoreBooks = () => {
    setVisibleBooks((prev) => prev + 6);
  };

  return (
    <div className="md:px-24">
      <div className="flex flex-col justify-center gap-6 items-center mb-10 mt-16">
        <h1 className="text-4xl text-center flex justify-center font-playfair font-bold">
          Books
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
        {books.slice(0, visibleBooks).map((book) => {
          const { bookId, bookName, author, image, rating, category, tags } =
            book;

          return (
            <Link
              to={`/book/${bookId}`}
              key={bookId}
              className="border p-4 rounded-lg shadow hover:scale-105 hover:shadow-xl transition-shadow duration-300 block"
            >
              <div className="card bg-gray-100 py-6 shadow-xl">
                <figure>
                  <img
                    className="h-40 w-auto bg-transparent"
                    src={image}
                    alt={bookName}
                  />
                </figure>
              </div>
              <div className="flex flex-wrap gap-2 my-6">
                {tags.slice(0, 2).map((tag, index) => (
                  <p
                    key={index}
                    className="bg-green-100 text-green-700 cursor-pointer text-xs font-semibold px-2 py-1 rounded-lg"
                  >
                    {tag}
                  </p>
                ))}
              </div>

              <div className="mt-4 h-auto">
                <h2
                  className="font-bold font-playfair tracking-wide text-2xl mb-4 overflow-hidden h-8"
                  title={bookName}
                >
                  {bookName}
                </h2>
                <p className="text-gray-600">By: {author}</p>
                <p className="text-sm font-semibold my-2">{category}</p>
                <hr className="my-4 border-gray-300" />
                <div className="flex justify-between items-center">
                  <p className="font-semibold">Rating:</p>
                  <div className="flex items-center">
                    <span className="mr-1">{rating}</span>
                    <FaStar className="text-yellow-500" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {visibleBooks < books.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={showMoreBooks}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            See More Books
          </button>
        </div>
      )}
    </div>
  );
};

export default BookCards;
