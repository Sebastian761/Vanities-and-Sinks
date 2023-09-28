
export const Gallery = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:mt-20 mb-8  bg-[url('https://images.unsplash.com/photo-1595514535215-8a093483610a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] h-[1240px] md:h-[640px] tablet:h-[710px]  ">
            <div className="m-auto flex flex-col items-center rounded-lg w-[85%] shadow-2xl h-[95%] tablet:h-[90%] bg-white/75">
                <article className="rounded-lg p-4 sm:p-6 w-[80%] mt-4">
                    <a href="#">
                        <h2 className="mt-0.5 text-2xl font-medium text-gray-900">
                        High quality vanities for your personal space
                        </h2>
                    </a>

                    <p className="mt-4 line-clamp-6 tablet:line-clamp-5 text-sm/relaxed text-gray-600">
                        In our selection of vanities, quality is the undisputed protagonist. Each vanity we offer is a masterpiece of craftsmanship and design, with a standard of excellence that guarantees durability and functionality. Discover vanities that reflect your style and add a touch of luxury to your personal space. Quality has never been more evident than in our top-of-the-line vanities.
                    </p>

                    <a
                        href="#"
                        className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                    >
                        Find out more
                        <span
                        aria-hidden="true"
                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                        >
                        &rarr;
                        </span>
                    </a>
                </article>
                <img
                className="h-48 tablet:h-72 lg:h-60  max-w-full shadow-md mt-6"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt=""
                />
            </div>
            <div className="m-auto flex flex-col items-center rounded-lg w-[85%] shadow-2xl h-[95%] tablet:h-[90%] bg-white/75">
                <article className="rounded-lg p-4 sm:p-6 w-[80%] mt-4">
                    <a href="#">
                        <h2 className="mt-0.5 text-2xl font-medium text-gray-900">
                        High quality vanities for your personal space
                        </h2>
                    </a>

                    <p className="mt-4 line-clamp-6 tablet:line-clamp-5 text-sm/relaxed text-gray-600">
                        In our selection of vanities, quality is the undisputed protagonist. Each vanity we offer is a masterpiece of craftsmanship and design, with a standard of excellence that guarantees durability and functionality. Discover vanities that reflect your style and add a touch of luxury to your personal space. Quality has never been more evident than in our top-of-the-line vanities.
                    </p>

                    <a
                        href="#"
                        className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                    >
                        Find out more
                        <span
                        aria-hidden="true"
                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                        >
                        &rarr;
                        </span>
                    </a>
                </article>
                <img
                className="h-48 tablet:h-72 lg:h-60 max-w-full shadow-md mt-6"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt=""
                />
            </div>
        </div>
    );
};
