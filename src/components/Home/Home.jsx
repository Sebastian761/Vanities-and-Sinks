import { Nav } from "../../Global/components/Nav/Nav"
import { Banner } from "./Banner"
import { CardsContainer } from "./Cards/CardsContainer"
import { Gallery } from "./Gallery"
import { ProductsContainer } from "./Products-Cards/ProductsContainer"

export const Home = () => {
    return (
        <>
            <Nav />
            <Banner />
            <CardsContainer />
            <ProductsContainer />
            <Gallery />
        </>
    )
}
