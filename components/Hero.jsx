import { MapPin, Mouse } from "lucide-react";
import Slider from "./slider";

const Hero = () => {
    return (
        <div className="hero-bg h-screen overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-darkBlue to-[#000000]  opacity-70 z-20"></div>
            <Slider />
            <div className="container max-w-7xl mx-auto px-4 py-2 flex justify-center items-center w-full h-full text-white  z-30 absolute top-0 left-1/2 -translate-x-1/2 max-sm:mt-8">
                <div className="max-w-4xl text-center mx-auto w-full">
                    <div className="p-2 px-4 bg-darkBlue/60 rounded-full mb-4 w-fit mx-auto">
                        <p className="font-normal capitalize text-sm sm:text-base">
                            conference theme
                        </p>
                    </div>

                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4  leading-[110%]">
                        Building A Sustainable World: Tackling Barriers and
                        Exploring New Ideas.
                    </h1>

                    <div className="mt-8 flex flex-col gap-4 items-center">
                        <p className="flex flex-wrap justify-center items-center gap-2 text-lg  font-bold text-white">
                            <MapPin /> Ragibnagar, South Surma, Sylhet,
                            Bangladesh
                        </p>
                        <ul className="max-md:order-2 max-md:text-center">
                            <li className="text-lg md:text-xl font-bold text-white underline underline-offset-2">
                                Submission Deadline:
                            </li>
                            <li className="text-lg font-normal">
                                June 30, 2025
                            </li>
                        </ul>
                        <ul className="max-md:text-center">
                            <li className="text-lg md:text-xl font-bold text-white underline underline-offset-2">
                                Conference Date:
                            </li>
                            <li className="text-lg font-normal">
                                August 9, 2025
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-center items-end h-full animate-bounce mt-12">
                        <Mouse width={32} height={32} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
