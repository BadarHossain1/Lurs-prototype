"use client";

import { committeeData } from "@/data/committeeData";
import Image from "next/image";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";

const CountDown = () => {
    const [isClient, setIsClient] = useState(false);
    const member1 = committeeData[0];

    useEffect(() => {
        setIsClient(true);
    }, []);
    const targetDate = new Date(new Date().getFullYear(), 7, 9);

    if (targetDate < new Date()) {
        targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return (
                <span className="font-semibold text-xl text-center">
                    🎉 It's August 9!
                </span>
            );
        } else {
            return (
                <div className="flex items-center justify-center gap-4 text-gray-800 flex-wrap">
                    <div className="border border-darkBlue p-10 py-5 rounded-2xl">
                        <div className="text-4xl font-bold text-darkBlue">
                            {days}
                        </div>
                        <span className="text-sm">Days</span>
                    </div>
                    <div className="border border-darkBlue p-10 py-5 rounded-2xl">
                        <div className="text-4xl font-bold text-darkBlue">
                            {hours}
                        </div>
                        <span className="text-sm">Hours</span>
                    </div>
                    <div className="border border-darkBlue p-10 py-5 rounded-2xl">
                        <div className="text-4xl font-bold text-darkBlue">
                            {minutes}
                        </div>
                        <span className="text-sm">Minutes</span>
                    </div>
                    <div className="border border-darkBlue p-10 py-5 rounded-2xl">
                        <div className="text-4xl font-bold text-darkBlue">
                            {seconds}
                        </div>
                        <span className="text-sm">Seconds</span>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="container max-w-7xl mx-auto px-4 py-6 flex flex-col items-center justify-center text-center my-8 rounded-lg border border-gray-100 shadow-md bg-gray-50 break-inside-avoid relative overflow-hidden">
            <div className="absolute h-1 w-full bg-darkBlue top-0 left-0"></div>
            <div className="w-2/3">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-darkBlue font-bold mb-3">
                    LURS 2<sup>nd</sup> Student Research Conference 2025
                </h2>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-darkBlue font-bold mb-3">
                    (LURSSRC-2025)
                </h2>
            </div>

            {isClient && (
                <>
                    <Countdown
                        date={targetDate.getTime()}
                        renderer={renderer}
                    />
                    <video
                        className="mt-6 w-full h-auto rounded-lg shadow-lg aspect-video max-h-[400px shadow-lg"
                        autoPlay
                        loop
                        muted
                        controls
                    >
                        <source
                            src="https://res.cloudinary.com/ddzsqf33b/video/upload/v1749200728/lurs/xmzs6lqyb2yp6ynuvozb.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </>
            )}

            <div className="p-4">
                <div className="flex flex-col items-center  justify-center text-center  p-4 rounded-lg transition-all ">
                    <Image
                        src={member1.image}
                        alt={member1.name}
                        width={150}
                        height={150}
                        className="rounded-2xl mb-4 aspect-square object-cover p-2 border border-gray-200 shadow-md"
                    />
                    <h3 className="text-lg font-semibold">{member1.name}</h3>
                    <p className="text-md text-gray-600">
                        {member1.designation}
                    </p>
                    <p className="text-sm text-gray-500">Vice Chancellor</p>
                    <p className="text-sm text-gray-500">Leading University</p>
                    <div className="flex gap-2 mt-4">
                        {member1.social.map((social, index) => (
                            <Link
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl w-10 h-10 rounded-full flex items-center justify-center bg-darkBlue text-white transition-all hover:bg-blue-600"
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                    {/* <h2 className="text-lg font-semibold underline underline-offset-4 mb-4">
                        Message
                    </h2>
                    <div className="grid gap-2 md:max-w-2/3">
                        <p className="text-sm text-gray-600">
                            It is with great pleasure that I welcome you to the
                            2nd Leading University Research Conference 2025,
                            themed “Building A Sustainable World: Tackling
                            Barriers and Exploring New Ideas.” This conference
                            stands as a testament to our commitment to fostering
                            interdisciplinary research and addressing the
                            pressing challenges of our time.
                        </p>
                        <p className="text-sm text-gray-600">
                            At Leading University, we believe that research is
                            the cornerstone of progress. By bringing together
                            students, young researchers, academics, and
                            professionals from diverse disciplines, we aim to
                            create a platform that not only showcases innovative
                            ideas but also cultivates collaborations that
                            transcend traditional academic boundaries.
                        </p>
                        <p className="text-sm text-gray-600">
                            The themes explored in this conference—ranging from
                            engineering and technology to social sciences and
                            sustainability—reflect our dedication to
                            contributing meaningful solutions to global issues.
                            I encourage all participants to engage actively,
                            exchange ideas, and build networks that will propel
                            research and innovation forward.
                        </p>
                        <p className="text-sm text-gray-600">
                            I extend my heartfelt gratitude to the Leading
                            University Research Society (LURS) for their
                            unwavering dedication in organizing this event and
                            to all contributors for their valuable research.
                            Together, let us embark on this intellectual journey
                            towards a sustainable and prosperous future.
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default CountDown;
