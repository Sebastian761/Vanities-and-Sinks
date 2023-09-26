export const Info = () => {
    return (
        <>
        <div className="flex flex-col laptop:flex-row mt-12 2xl:mt-40 laptop:mt-12 md:h-[960px] xl:h-[920px] laptop:h-[640px]">
            <div className="flex flex-col md:flex-row w-full gap-8">
                <img
                className="h-96 rounded-lg object-cover object-center w-[80%] md:w-[40%] m-auto shadow-xl"
                src="https://images.unsplash.com/photo-1584069793933-57852d7060ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="bathroom"
                />
                <img
                className="h-96 rounded-lg object-cover object-center w-[80%] md:w-[40%] m-auto shadow-xl"
                src="https://images.unsplash.com/photo-1595515106886-43b1443a2e8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1994&q=80"
                alt="bathroom"
                />
            </div>
            <div className="w-full laptop:w-[50%] mt-12 laptop:mt-0 ">
                <div className="gap-32 w-full laptop:w-auto py-8 px-4 lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 ">
                    <div className="sm:text-lg w-[80vw] lg:w-[70vw] flex flex-col md:flex-row laptop:block laptop:w-96 m-auto lg:ml-[30%] md:gap-8">
                        <div>
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-darkBlue dark:text-white">
                            Underlay Laminate Flooring Service & Wooden Floors
                            </h2>
                            <p className="mb-4 font-semibold text-darkBlue text-lg">
                            We are committed to making your floor look its best and for you to
                            be completely satisfied with our service.
                            </p>
                        </div>
                        <div className="mt-8 flex gap-8 flex-col md:ml-12 laptop:ml-0">
                            <div className="flex items-center gap-5">
                            
                                <div className=" text-gray-700">
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
                            
                                <div className=" text-gray-700">
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
