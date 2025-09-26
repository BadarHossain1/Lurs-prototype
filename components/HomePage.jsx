import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeNavBar from "./HomeNavBar";
import HomeHero from "./HomeHero";
import Sections from "./Sections";

const HomePage = () => {
    return (
        <div className="relative min-h-screen w-full overflow-visible">
            {/* <Navbar /> */}
            <HomeNavBar />
            <HomeHero />
            <Sections />
        </div>
    );
};

export default HomePage;