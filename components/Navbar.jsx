import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full  z-50">
            <div className="container max-w-7xl mx-auto px-4 py-2 gap-4 flex justify-between items-center  text-white">
                <Link href="/" className="text-2xl pr-6 mr-5 font-bold">
                    <Image
                        src="/conference_logo.png"
                        width={700}
                        height={314}
                        alt="Logo"
                        className="max-w-40 sm:max-w-56 h-auto  object-contain"
                    />
                </Link>
                <div className="flex items-center gap-6">
                    
                    <div>
                        <Image
                            src="/Leading_University_Logo.png"
                            alt="Leading logo"
                            width={400}
                            height={400}
                            className="max-w-20 sm:max-w-28 h-auto  object-contain"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
