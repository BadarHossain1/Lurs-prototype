import Link from "next/link";

const InfoItem = ({ data }) => {
    const { title, type, description, note } = data;

    let content;

    if (type === "array-bulleted") {
        content = (
            <div className="p-3">
                <ul className="list-disc pl-5">
                    {description.map((item, index) => (
                        <li key={index} className="mb-2">
                            {item.includes(":") ? (
                                <>
                                    <span className="font-semibold">
                                        {item.split(":")[0]}:
                                    </span>
                                    {item.split(":")[1]}
                                </>
                            ) : (
                                item
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    if (type === "array-numbered") {
        content = (
            <div className="p-3">
                <ol className="list-decimal pl-5 ">
                    {description.map((item, index) => {
                        if (item.includes("<a")) {
                            return (
                                <li
                                    key={index}
                                    className="mb-2 form-link"
                                    dangerouslySetInnerHTML={{ __html: item }}
                                ></li>
                            );
                        } else {
                            return (
                                <li key={index} className="mb-2">
                                    {item}
                                </li>
                            );
                        }
                    })}
                </ol>

                {note && (
                    <p className="font-semibold">
                        <span className="text-red-600">*</span> {note}
                    </p>
                )}
            </div>
        );
    }
    if (type === "only-description") {
        content = (
            <p className="text-base p-3 font-normal text-justify">
                {description.includes("Microsoft-CMT") ? (
                    <>
                        {description.split("Microsoft-CMT")[0]}
                        <Link
                            href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F"
                            target="_blank"
                            className="text-darkBlue transition-all hover:underline mr-2"
                        >
                            {description.match(/Microsoft-CMT/)}
                        </Link>
                        {description.split("Microsoft-CMT")[1]}
                    </>
                ) : (
                    description
                )}
            </p>
        );
    }
    if (type === "only-submission") {
        content = (
            <p
                className="text-base p-3 font-normal text-justify"
                dangerouslySetInnerHTML={{ __html: description }}
            ></p>
        );
    }

    return (
        <article className=" rounded-lg border border-gray-100 shadow-md mb-4 bg-gray-50 break-inside-avoid transition-all hover:border-darkBlue relative overflow-hidden">
            {/* <div className="absolute h-1 w-full bg-darkBlue top-0 left-0"></div> */}
            {title && (
                <h2 className="text-xl p-3 md:text-2xl text-white bg-darkBlue font-bold mb-3 shadow-md">
                    {title}
                </h2>
            )}
            {content}
        </article>
    );
};

export default InfoItem;
