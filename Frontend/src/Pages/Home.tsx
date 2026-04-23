import HeroSection from "../Components/Home/HeroSection";
import PopularBlogsSection from "../Components/Home/PopularBlogsSection";

const Home = () => {
    return (
        <div className="w-full">
            <HeroSection />
            <PopularBlogsSection />
        </div>
    );
};

export default Home;