import CountDown from "@/components/CountDown";
import Footertext from "@/components/Footertext";
import Hero from "@/components/Hero";
import InfoBlocks from "@/components/InfoBlocks";
import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";

const LURSSCPage = () => {
    return (
        <>
            <Navbar />
            {/* <NavBottomInfo /> */}
            <Hero />
            <main className="container max-w-7xl mx-auto px-4 py-2">
                <CountDown />
                <InfoBlocks />

                <TeamCard />
            </main>
            <Footertext />
        </>
    );
};

export default LURSSCPage;