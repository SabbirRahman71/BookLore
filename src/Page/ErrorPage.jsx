import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 min-h-screen flex items-center">
      <Helmet>
        <title>Booklore | Error</title>
      </Helmet>
      <div className="container mx-auto px-6 py-12 flex items-center justify-center">
        <div className="flex flex-col items-center max-w-md mx-auto text-center">
          <div className="p-4 bg-secondary bg-opacity-40 rounded-full text-primary shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </div>
          <h1 className="mt-5 text-3xl font-bold text-gray-800 md:text-4xl animate-bounce">
            Oops! Something Went Wrong.
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            We can't seem to find the page you're looking for. Here are some
            helpful links instead:
          </p>

          <div className="flex items-center w-full mt-8 gap-x-3">
            <button
              onClick={() =>
                window.history.length > 2 ? navigate(-1) : navigate("/")
              }
              className="flex items-center justify-center px-6 py-3 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 hover:bg-gray-100 hover:shadow-md transform hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span>Go Back</span>
            </button>

            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center px-6 py-3 text-sm text-white bg-primary rounded-lg shadow-md hover:bg-primary-dark transform hover:-translate-y-1 transition-transform duration-200"
            >
              Take Me Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
