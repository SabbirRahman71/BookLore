import { Link } from "react-router-dom";

const HeroCard = () => {
  return (
    <div className="card card-side bg-base-200 shadow-xl md:mx-24 mx-auto rounded-lg overflow-hidden">
      <div className="flex flex-between w-full md:gap-6 h-auto sm:h-80 md:h-96">
        <div className="card-body flex flex-col items-center justify-center p-10">
          <h2 className="card-title text-3xl font-bold text-center">
            Books to freshen up your bookshelf
          </h2>
          <div className="card-actions mt-4">
            <button>
              <Link
                to={"/listedBooks"}
                href="#_"
                className="inline-flex items-center justify-center w-full px-6 md:py-3 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0"
                data-primary="green-400"
                data-rounded="rounded-2xl"
                data-primary-reset="{}"
              >
                View The List
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </button>
          </div>
        </div>
        <div className="relative flex-shrink-0">
          <figure className="overflow-hidden h-full">
            <img
              className="h-40 md:h-80 w-full md:mx-14 object-cover rounded-l-lg"
              src="https://i.ibb.co/RBqyGS9/The-silent-patient.png"
              alt="The Silent Patient"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
