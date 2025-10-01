
import HomeHero from "./HomeHero";
import Sections from "./Sections";

const HomePage = () => {
    return (
        <div className="relative w-full overflow-visible">
            <HomeHero />
            <Sections />
        </div>
    );
};

export default HomePage;