import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Navbar";
import HeroCard from "./Components/HeroCard";
import "@fontsource/playfair-display";

function App() {
  return (
    <>
      <Navbar />
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <HeroCard />
    </>
  );
}

export default App;
