export const Info = () => {
    return (
        <>
        <div className="flex flex-row mt-12 md:mt-24 h-[640px]">
            <div className="flex flex-col lg:flex-row w-[60%] mr-20">
                <img
                className="h-96 w-full rounded-lg object-cover object-center w-[44%] m-auto"
                src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                alt="nature image"
                />
                <img
                className="h-96 w-full rounded-lg object-cover object-center w-[44%] m-auto"
                src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                alt="nature image"
                />
            </div>
            <div className="w-[40%] ">
                <div className="gap-24 py-8 px-4 mx-auto 2xl lg:grid  lg:grid-cols-2 lg:py-16 lg:px-6 h-full">
                    <div className="sm:text-lg w-96">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-darkBlue dark:text-white">
                        Underlay Laminate Flooring Service & Wooden Floors
                        </h2>
                        <p className="mb-4 font-semibold text-darkBlue text-lg">
                        We are committed to making your floor look its best and for you to
                        be completely satisfied with our service.
                        </p>
                        <div className="mt-8 flex gap-8 flex-col">
                            <div className="flex items-center gap-5">
                            
                                <div className=" text-gray-600">
                                    <h4 className="font-semibold text-darkBlue text-lg">
                                        FAST RELIABLE SERVICE
                                    </h4>
                                    <p>
                                        Experience our fast and reliable service. We are here to
                                        exceed your expectations and deliver results in record time
                                    </p>
                                </div>
                                {/* <GrPaint size={70} className="ml-2" color="" /> */}
                            </div>
                        </div>
                        <div className="mt-8 flex gap-8 flex-col">
                            <div className="flex items-center gap-5">
                            
                                <div className=" text-gray-600">
                                    <h4 className="font-semibold text-darkBlue text-lg">
                                        FAST RELIABLE SERVICE
                                    </h4>
                                    <p>
                                        Experience our fast and reliable service. We are here to
                                        exceed your expectations and deliver results in record time
                                    </p>
                                </div>
                                {/* <GrPaint size={70} className="ml-2" color="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
