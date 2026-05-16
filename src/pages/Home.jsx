import HeroSlider from "../components/home/HeroSlider";
import CategoryCircles from "../components/home/CategoryCircles";
import TrendingProducts from "../components/home/TrendingProducts";
import OfferBanner from "../components/home/OfferBanner";

const Home = () => {
  return (
    <div className="bg-white">
      <HeroSlider />

      <CategoryCircles />

      <TrendingProducts />

      <OfferBanner />
    </div>
  );
};

export default Home;