import { MapPin, Mouse } from "lucide-react";
import Slider from "./slider";

const HomeHero = () => {
    return (
        <div className="hero-bg h-screen overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-darkBlue to-[#000000]  opacity-70 z-20"></div>
            <Slider />
            <div className="container max-w-7xl mx-auto px-4 py-2 flex justify-center items-center w-full h-full text-white  z-30 absolute top-0 left-1/2 -translate-x-1/2 pt-32 max-sm:pt-40">
                <div className="max-w-5xl text-center mx-auto w-full">


                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 leading-[110%] drop-shadow-lg pt-15">
                        Leading University Research Society
                    </h1>

                    <p className="mt-3 text-lg sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto text-white bg-black/30 rounded-l-sm px-6 py-3 backdrop-blur-sm shadow-lg ">
                        The Leading University Research Society unites researchers, students and partners to promote rigorous, interdisciplinary scholarship.
                    </p>

                    <div className="mt-12 flex flex-col gap-6 items-center">
                        <div className="flex flex-wrap justify-center items-center gap-3 text-xl font-bold text-white bg-black/30 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
                            <MapPin className="text-[#176b98]" size={24} />
                            <span>Ragibnagar, South Surma, Sylhet, Bangladesh</span>
                        </div>

                        {/* <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                            <div className="text-center bg-black/30 rounded-lg px-6 py-4 backdrop-blur-sm shadow-lg">
                                <div className="text-lg md:text-xl font-bold text-orange-400 mb-2">
                                    Submission Deadline
                                </div>
                                <div className="text-xl font-semibold text-white">
                                    June 30, 2025
                                </div>
                            </div>

                            <div className="text-center bg-black/30 rounded-lg px-6 py-4 backdrop-blur-sm shadow-lg">
                                <div className="text-lg md:text-xl font-bold text-orange-400 mb-2">
                                    Conference Date
                                </div>
                                <div className="text-xl font-semibold text-white">
                                    August 9, 2025
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className="flex justify-center items-center animate-bounce mt-16 mb-8">
                        <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
                            <Mouse width={28} height={28} className="text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
