"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
    "/campus-2.jpg",
    "/g_1.jpg",
    "/g_2.jpg",
    "/g_3.jpg",
    "/g_5.jpg",
    "/g_6.jpg",
    "/g_7.jpg",
    "/g_8.jpg",
    "/g_9.jpg",
];

const Slider = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            }}
            speed={1200}
            className="select-none h-full w-full relative z-10"
        >
            {images.map((image, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Image
                            src={image}
                            width={1280}
                            height={400}
                            alt="group image"
                            className="w-full  h-full object-cover object-center"
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Slider;
