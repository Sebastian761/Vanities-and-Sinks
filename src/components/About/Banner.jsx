import { Link } from "react-router-dom";

export const Banner = () => {
    return (
        <>
            <section className="overflow-hidden h-[580px] bg-[url(https://images.unsplash.com/photo-1538430224529-7eceed6ab252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] w-full bg-cover bg-fixed bg-bottom bg-no-repeat">
            <div className="bg-black/40 p-8 md:p-12 lg:px-16 lg:py-24 h-[1340px] md:h-[580px] flex flex-col laptop:flex-row space-between">
                <div className=" w-full md:w-1/2 text-center md:text-left sm:mt-0 ">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl xltablet:text-5xl md:pb-3">
                    Our History
                    </h2>

                    <p className="m-auto md:m-0 max-w-lg text-white mt-6 md:block md:text-lg leading-relaxed">
                    At /Store name/, we are committed to providing you with high quality products and an exceptional shopping experience. From our humble beginnings to becoming a benchmark in the sink and vanity market, our history is marked by a passion for excellence and customer satisfaction. Founded by [Founder Name], our company has been tirelessly dedicated to selecting and delivering the most elegant and functional sinks and vanities. Our mission is to transform your spaces and make every corner of your home special.
                    </p>

                    <div className="mt-4 sm:mt-8">
                        <Link
                        to='/contact'
                        className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                        Contact us now!
                        </Link>
                    </div>
                </div >
                    <img src="https://images.unsplash.com/photo-1595428773960-5bea2830b067?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80" alt="sink"  className="hidden 2xl:block h-[540px] w-[full] w-1/2 m-auto shadow-xl absolute opacity-90 top-42 right-12"/>
            </div>
        </section>
        </>
    );
};
