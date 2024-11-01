import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Detect route change

  return (
    <div className="navbar bg-base-100 my-6 md:px-24" key={location.pathname}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive
                      ? "border-2 border-green-500 text-green-500"
                      : "text-black"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/listedBooks"}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive
                      ? "border-2 border-green-500 text-green-500"
                      : "text-black"
                  }`
                }
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/pagesToRead"}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive
                      ? "border-2 border-green-500 text-green-500"
                      : "text-black"
                  }`
                }
              >
                Pages To Read
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to={"/"} className="btn btn-ghost text-2xl font-bold">
          BookLore
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "border-2 border-green-500 text-green-500"
                    : "text-black"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/listedBooks"}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "border-2 border-green-500 text-green-500"
                    : "text-black"
                }`
              }
            >
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/pagesToRead"}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "border-2 border-green-500 text-green-500"
                    : "text-black"
                }`
              }
            >
              Pages To Read
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        <a className="btn bg-green-500 text-white">Sign In</a>
        <a className="btn bg-blue-400 text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
