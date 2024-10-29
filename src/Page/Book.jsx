import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { saveBookToRead, saveBookToWishlist, getBooks } from "../Utils/Index";

const Book = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const book = books.find((book) => book.bookId === Number(bookId));

  if (!book) {
    return <p>Book not found.</p>;
  }

  const {
    bookName,
    author,
    review,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const [isRead, setIsRead] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);

  useEffect(() => {
    const { readBooks, wishlistBooks } = getBooks();
    setIsRead(readBooks.some((b) => b.bookId === book.bookId));
    setIsWishlist(wishlistBooks.some((b) => b.bookId === book.bookId));
  }, [book.bookId]);

  const addToRead = () => {
    saveBookToRead(book);
    setIsRead(true);
    setIsWishlist(false);
  };

  const addToWishlist = () => {
    saveBookToWishlist(book);
    setIsWishlist(true);
  };

  return (
    <div className="mt-8 md:mx-24">
      <div className="card card-side bg-base-100 shadow-xl flex rounded-lg">
        <div className="w-[50%] bg-gray-400 rounded-lg flex justify-center items-center">
          <figure className="w-full h-full flex justify-center items-center">
            <img
              className="bg-transparent py-6 h-full object-contain"
              src={image}
              alt={bookName}
            />
          </figure>
        </div>
        <div className="card-body w-[50%] pt-0">
          <h2 className="card-title font-bold text-4xl">{bookName}</h2>
          <p className="font-semibold text-gray-600 py-2 text-xl">
            By : {author}
          </p>
          <div className="border-y-2 py-4 border-gray-400">
            <p className="text-gray-600 font-semibold text-xl">{category}</p>
          </div>
          <p className="pt-2 text-gray-500">
            <span className="font-bold text-black">Review : </span>
            {review}
          </p>
          <div className="flex flex-col md:flex-row gap-2 py-2">
            <span className="font-bold"> tag :</span>
            {tags.slice(0, 2).map((tag, index) => (
              <div
                key={index}
                className="bg-green-100 text-green-600 cursor-pointer text-xs font-semibold px-2 py-1 rounded-full"
              >
                #{tag}
              </div>
            ))}
          </div>
          <div className="flex md:gap-8">
            <div className="text-gray-500">
              <p>Total pages:</p>
              <p>Publisher:</p>
              <p>Published:</p>
              <p>Rating:</p>
            </div>
            <div className="font-semibold text-black pl-4 md:pl-16">
              <p>{totalPages}</p>
              <p>{publisher}</p>
              <p>{yearOfPublishing}</p>
              <p>{rating}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <button
              onClick={addToRead}
              className={`btn ${
                isRead
                  ? "btn-ghost bg-gray-400 cursor-not-allowed"
                  : "btn-ghost border-1 border-gray-400"
              } px-6`}
            >
              {isRead ? "Read" : "Mark as Read"}
            </button>
            <button
              onClick={addToWishlist}
              className={`btn ${
                isWishlist
                  ? "btn-accent bg-gray-400 cursor-not-allowed"
                  : "btn-accent"
              } hover:text-white`}
            >
              {isWishlist ? "In Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
