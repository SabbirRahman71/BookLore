import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Page/ErrorPage";
import ListedBooks from "../Page/ListedBooks";
import PagesToRead from "../Page/PagesToRead";
import Book from "../Page/Book";
import Read from "../Components/Read";
import WishList from "../Components/WishList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/Books.JSON"),
      },
      {
        path: "/book/:bookId",
        element: <Book />,
        loader: () => fetch("/Books.JSON"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <Read />,
          },
          {
            path: "wishlist",
            element: <WishList />,
          },
        ],
      },
      {
        path: "/pagestoread",
        element: <PagesToRead />,
      },
    ],
  },
]);
