import { Link } from "react-router-dom"

export const Banner = () => {
    return (
        <div className="w-[85vw] m-auto my-12 h-[1420px] sm:h-[1080px] md:h-[950px] lg:h-[970px] xl:h-[920px] bg-white">
         <section className="overflow-hidden h-[860px] sm:h-[620px] md:h-[580px] bg-[url(https://images.unsplash.com/photo-1538430224529-7eceed6ab252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] w-full bg-cover bg-fixed bg-bottom bg-no-repeat">
            <div className="bg-black/20 p-8 md:p-12 lg:px-16 lg:py-24 h-[1340px] md:h-[720px] flex flex-col laptop:flex-row space-between">
                <div className=" w-full text-center sm:mt-0 lg:mt-8">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl xltablet:text-5xl md:pb-3">
                    Our History
                    </h2>

                    <p className="m-auto text-white mt-6 md:block md:text-lg leading-relaxed w-2/3">
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
            </div>
        </section>
        <div className="mt-14">
            <div className="text-center w-[80%] md:w-[65%] lg:w-[50%] m-auto">
                <h3 className="mb-8 text-2xl lg:text-3xl">Explore the Distinctive Collection of Sinks and Vanities</h3>
                <p>Discover our exceptional collection of sinks and vanities, carefully selected to elevate the style and functionality of your bathroom. From modern, minimalist sinks to classic, elegant vanities, our variety of products will allow you to find the perfect piece for your space. Each item in our collection reflects our dedication to quality and design, ensuring that your bathroom is a place of unparalleled beauty and comfort.</p>
            </div>
        </div>
    </div>
    )
}
