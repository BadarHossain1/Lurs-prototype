import Link from "next/link";

const Footertext = () => {
    return (
        <footer className=" mt-4 bg-gray-50 border-t border-gray-200 shadow-md">
            <div className="container max-w-7xl mx-auto px-4 py-3">
                <p className="font-normal text-center">
                    &copy;All Rights Reserved to{" "}
                    <Link
                        className="text-darkBlue transition-all hover:underline mr-2"
                        href="https://www.facebook.com/lursbd"
                        target="_blank"
                    >
                        LURS
                    </Link>
                </p>
                <p className="text-xs font-normal text-center text-gray-400">
                    Developed By:{" "}
                    <Link
                        className="text-darkBlue/60 transition-all hover:underline mr-2"
                        href="https://github.com/iam-mustak-ak"
                        target="_blank"
                    >
                        Mustak Ahmed(CSE-58)
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footertext;
