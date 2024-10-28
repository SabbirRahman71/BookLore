import React from "react";
import { Link } from "react-router-dom";

const BookCards = ({ books }) => {
  return (
    <div className="md:px-24">
      <h1 className="text-2xl text-center mt-16 mb-6 font-bold">Books List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
        {books.map((book) => {
          const { bookId, bookName, author, image, rating, category, tags } =
            book;

          return (
            <Link
              to={`/book/${bookId}`}
              key={bookId}
              className="border p-4 rounded-lg shadow hover:scale-105 hover:border-green-400"
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
                    className="bg-green-100 text-green-600 cursor-pointer text-xs font-semibold px-2 py-1 rounded-full"
                  >
                    {tag}
                  </p>
                ))}
              </div>

              <div className="mt-4 h-auto">
                <div>
                  <h2 className="font-bold text-2xl mb-4">{bookName}</h2>
                  <p className="text-gray-600">By: {author}</p>
                </div>
                <div className="flex flex-col justify-end">
                  <div className="border-t border-gray-300 border-dashed my-4"></div>
                  <div className="flex justify-between">
                    <p className="text-sm font-semibold mb-2">{category}</p>
                    <div>{rating}</div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BookCards;
