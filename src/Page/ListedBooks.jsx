import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="flex flex-col items-start dark:bg-gray-100 dark:text-gray-800">
      <Helmet>
        <title>Booklore | Listed Books</title>
      </Helmet>
      <div className="flex items-start -mx-4 overflow-x-auto md:px-24 overflow-y-hidden sm:justify-start flex-nowrap">
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
      <Outlet />
    </div>
  );
};

export default ListedBooks;
