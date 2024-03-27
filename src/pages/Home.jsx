import { Underline, Popup } from "../components";
import { useGlobalContext } from "../context/AppContext";
import {
  Hero,
  Sales,
  Categories,
  BestSelling,
  Services,
  BigOffer,
  Arrival,
  Products,
  Subscribe,
} from "../sections";

const Home = () => {
  const { showPopup } = useGlobalContext();
  return (
    <>
      <Hero />
      <Sales />
      <Underline />
      <BestSelling />
      <Underline />
      <Categories />
      <Products />
      <Underline />
      <BigOffer />
      <Underline />
      <Services />
      <Underline />
      <Arrival />
      <Subscribe />
      {showPopup ? <Popup /> : ""}
    </>
  );
};

export default Home;
