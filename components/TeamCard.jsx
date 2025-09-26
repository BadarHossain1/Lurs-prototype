import { committeeData } from "@/data/committeeData";
import Image from "next/image";
import Link from "next/link";

const TeamCard = () => {
    const member1 = committeeData[0];
    return (
        <div className="rounded-lg border border-gray-100 shadow-md mb-4 bg-gray-50 break-inside-avoid transition-all hover:border-darkBlue relative overflow-hidden mt-6">
            <h2 className="text-xl p-3 md:text-2xl text-white bg-darkBlue font-bold mb-3 shadow-md text-center">
                Conference Committee
            </h2>

            <div className="p-4">
                <div className="flex flex-col items-center md:w-fit mx-auto justify-center text-center bg-white p-4 rounded-lg shadow-md transition-all hover:shadow-lg">
                    <Image
                        src={member1.image}
                        alt={member1.name}
                        width={150}
                        height={150}
                        className="rounded-2xl mb-4 aspect-square object-cover p-2 border border-gray-200 shadow-md"
                    />
                    <h3 className="text-lg font-semibold">{member1.name}</h3>
                    <p className="text-sm text-gray-500">
                        {member1.designation}
                    </p>
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
                </div>
            </div>

            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
                {committeeData.slice(1).map((member) => (
                    <div
                        key={member.id}
                        className="flex flex-col items-center justify-center text-center bg-white p-4 rounded-lg shadow-md transition-all hover:shadow-lg"
                    >
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={150}
                            height={150}
                            className="rounded-2xl mb-4 aspect-square object-cover p-2 border border-gray-200 shadow-md"
                        />
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <p className="text-sm text-gray-500">
                            {member.designation}
                        </p>
                        <div className="flex gap-2 mt-4">
                            {member.social.map((social, index) => (
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamCard;
