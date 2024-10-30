import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [sortOption, setSortOption] = useState("rating");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="flex flex-col items-start">
      <Helmet>
        <title>Booklore | Listed Books</title>
      </Helmet>
      <div className="flex items-start -mx-4 overflow-x-auto md:px-24 overflow-y-hidden sm:justify-start w-full flex-nowrap">
        <Link
          to="/listedBooks"
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg ${
            tabIndex === 0
              ? "border border-b-0 dark:border-gray-600 dark:text-gray-900"
              : "border-b dark:border-gray-600 dark:text-gray-600"
          }`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          to="wishlist"
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg ${
            tabIndex === 1
              ? "border border-b-0 dark:border-gray-600 dark:text-gray-900"
              : "border-b dark:border-gray-600 dark:text-gray-600"
          }`}
        >
          <span>Wishlist</span>
        </Link>
      </div>

      <div className="my-4 md:px-24 flex justify-center w-full">
        <label className="font-semibold mr-2">Sort by:</label>
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="border rounded px-2 py-1"
        >
          <option value="rating">Rating</option>
          <option value="publishedYear">Published Year</option>
          <option value="totalPages">Total Pages</option>
        </select>
      </div>

      <Outlet context={{ sortOption }} />
    </div>
  );
};

export default ListedBooks;
