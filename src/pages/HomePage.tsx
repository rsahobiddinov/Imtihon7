import Category from "../components/categories/category";
import Popular from "../components/Mostpopular/popular";
import ShowCase from "../components/showcase/showCase";
import Spotlight from "../components/light/faselight";
import Header from "../layouts/header/header";

const HomePage = () => {
  return (
    <>
      <Header />
      <ShowCase />
      <Category />
      <Spotlight />
      <Popular/>
    </>
  );
};
export default HomePage;
