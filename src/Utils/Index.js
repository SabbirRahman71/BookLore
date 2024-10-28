import toast from "react-hot-toast";

export const getBooks = () => ({
  readBooks: JSON.parse(localStorage.getItem("readBooks")) || [],
  wishlistBooks: JSON.parse(localStorage.getItem("wishlistBooks")) || [],
});

export const saveBookToRead = (book) => {
  const { readBooks, wishlistBooks } = getBooks();

  if (readBooks.some((b) => b.bookId === book.bookId)) {
    return toast.info("This book is already marked as Read.");
  }

  // Remove book from wishlist if it exists there
  localStorage.setItem(
    "wishlistBooks",
    JSON.stringify(wishlistBooks.filter((b) => b.bookId !== book.bookId))
  );

  // Add book to readBooks
  localStorage.setItem("readBooks", JSON.stringify([...readBooks, book]));
  toast.success("Book marked as Read!");
};

export const saveBookToWishlist = (book) => {
  const { readBooks, wishlistBooks } = getBooks();

  if (wishlistBooks.some((b) => b.bookId === book.bookId)) {
    return toast.info("This book is already in your Wishlist.");
  }

  if (readBooks.some((b) => b.bookId === book.bookId)) {
    return toast.error(
      "This book is already marked as Read and cannot be added to Wishlist."
    );
  }

  // Add book to wishlistBooks
  localStorage.setItem(
    "wishlistBooks",
    JSON.stringify([...wishlistBooks, book])
  );
  toast.success("Book added to Wishlist!");
};

export const deleteBook = (bookId) => {
  const { readBooks, wishlistBooks } = getBooks();

  // Remove book from both readBooks and wishlistBooks
  localStorage.setItem(
    "readBooks",
    JSON.stringify(readBooks.filter((b) => b.bookId !== bookId))
  );
  localStorage.setItem(
    "wishlistBooks",
    JSON.stringify(wishlistBooks.filter((b) => b.bookId !== bookId))
  );

  toast.success("Book removed from Read list and Wishlist!");
};
