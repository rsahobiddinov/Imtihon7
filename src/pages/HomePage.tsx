import Category from "../components/categories/category";
import Popular from "../components/Mostpopular/popular";
import ShowCase from "../components/showcase/showCase";
import Spotlight from "../components/light/faselight";
import Gamecomment from "../components/gamecomment/news";
import Footer from "../layouts/bottom/bottom";
import Header from "../layouts/Upper/upper";
import TrendingLeft from "../components/TrendingLeft/TrendingLeft";

const HomePage = () => {
  return (
    <>
      <Header />
      <ShowCase />
      <Category />
      <Spotlight />
      <Popular />
      <TrendingLeft />
      <Gamecomment />
      <Footer />
    </>
  );
};

export default HomePage;
