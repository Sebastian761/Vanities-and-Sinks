import { Banner } from "./Banner"
import { Nav } from "../../Global/components/Nav/Nav"
import { Cards } from "./Cards"
import { Info } from "./Info"
export const Services = () => {
    return (
        <div>
            <Nav />
            
            <div className="bg-white w-full sm:w-[90vw] md:w-[85vw] md:h-[1900px] tablet:h-[1140px] mt-24 md:mt-40 mb-16 m-auto shadow-md">
            <h1 className="bg-[#d0e8f26d] text-4xl md:text-5xl pb-5 text-gray-900 text-center md:text-left">Discover Our Sink and Vanity Services</h1>
                <Banner />
                <Cards/>
            </div>
            <div className="w-[90vw] h-[760px] tablet:h-72 tablet:mb-24 m-auto">
                <Info />
            </div>
        </div>
    )
}
