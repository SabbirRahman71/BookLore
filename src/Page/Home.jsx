import React from "react";
import { useLoaderData } from "react-router-dom";
import BookCards from "../Components/BookCards";
import HeroCard from "../Components/HeroCard";

const Home = () => {
  const books = useLoaderData();

  return (
    <>
      <HeroCard></HeroCard>
      <div>
        <BookCards books={books} />
      </div>
    </>
  );
};

export default Home;
