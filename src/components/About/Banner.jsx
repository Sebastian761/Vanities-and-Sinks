import { Link } from "react-router-dom";

export const Banner = () => {
    return (
        <>
            <section className="overflow-hidden h-[580px] bg-[url(https://images.unsplash.com/photo-1595514535215-8a093483610a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] w-full bg-cover bg-fixed bg-top bg-no-repeat">
            <div className="bg-black/40 p-8 md:p-12 lg:px-16 lg:py-24 h-[1020px] lg:h-[580px] flex flex-col laptop:flex-row space-between">
                <div className=" w-full md:w-1/2 text-center md:text-left mt-[25%] sm:mt-[15%] md:mt-0 ">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl xtablet:text-5xl">
                        Our Services at Your Disposal
                    </h2>

                    <p className="max-w-lg text-white mt-6 md:block md:text-lg leading-relaxed">
                        At /Your Store Name/ we not only offer you the best sinks and vanities, but we also provide you with a full suite of services to make your experience exceptional. From expert sink installation to personalized bathroom design advice and fast, secure deliveries, we are here to meet your every need. Trust us to make your bathroom project a reality - find out how we can help you below!
                    </p>

                    <div className="mt-4 sm:mt-8">
                        <Link
                        to='/contact'
                        className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                        Contact us now!
                        </Link>
                    </div>
                </div>
                    <img src="https://images.unsplash.com/photo-1595514535215-8a093483610a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="sink"  className="hidden 2xl:block h-[540px] w-[full] w-1/2 m-auto shadow-xl absolute top-42 right-12"/>
            </div>
        </section>
        </>
    );
};
