export const Cards = () => {
    return (
        <div className="md:w-[80vw] mx-auto h-auto my-20 grid gap-10 md:gap-4 grid-cols-1 md:grid-cols-1 xl:grid-cols-3">
            <article className="overflow-hidden rounded-md shadow transition hover:shadow-lg w-[90%] m-auto">
                <img
                    alt="Sink"
                    src="https://images.unsplash.com/photo-1595514535116-d0401260e7cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    className="h-56 w-full object-cover"
                />

                <div className="bg-white p-4 sm:p-6">

                    <p>
                    <h3 className="mt-0.5 text-lg text-gray-900">
                        Luxury in every detail
                    </h3>
                    </p>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        Add a touch of luxury to your bathroom with our high quality sinks. From design choice to delivery to your door, we are here for you.
                    </p>
                </div>
            </article>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg w-[90%] m-auto">
                <img
                    alt="Vanity"
                    src="https://images.unsplash.com/photo-1595514534785-44a24a4d9467?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                    className="h-56 w-full object-cover"
                />

                <div className="bg-white p-4 sm:p-6">

                    <p>
                    <h3 className="mt-0.5 text-lg text-gray-900">
                        Custom Styled Vanities in Your Style
                    </h3>
                    </p>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        Explore our range of vanities and discover how we can help you design the bathroom of your dreams. Expert services, custom design, your perfect bathroom awaits!
                    </p>
                </div>
            </article>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg w-[90%] m-auto mb-6 md:mb-0">
                <img
                    alt="Sink"
                    src="https://images.unsplash.com/photo-1595514535316-b8c85bf9bbf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    className="h-56 w-full object-cover"
                />

                <div className="bg-white p-4 sm:p-6">

                    <p>
                    <h3 className="mt-0.5 text-lg text-gray-900">
                        Worry-Free Installation
                    </h3>
                    </p>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        Leave the installation to the professionals. Our team makes sure everything is ready, so you can enjoy your new vanity or sink without worry.
                    </p>
                </div>
            </article>
        </div>
    );
};
