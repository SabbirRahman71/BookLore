import React from "react";
import { Link } from "react-router-dom";
import { getBooks, deleteBook } from "../Utils/Index";

const WishList = () => {
  const { wishlistBooks } = getBooks();

  return (
    <div className="md:px-24">
      <h1 className="text-2xl font-bold mb-4">Wishlist Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlistBooks && wishlistBooks.length > 0 ? (
          wishlistBooks.map((book) => (
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
                onClick={() => deleteBook(book.bookId)}
                className="btn bg-red-500 text-white mt-4"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No books in your Wishlist.</p>
        )}
      </div>
    </div>
  );
};

export default WishList;
