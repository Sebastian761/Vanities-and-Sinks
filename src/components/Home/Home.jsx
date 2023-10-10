import { Banner } from "./Banner"
import { CardsContainer } from "./Cards/CardsContainer"
import { Gallery } from "./Gallery"
import { ProductsContainer } from "./Products-Cards/ProductsContainer"
import { Nav } from "../../Global/components/Nav/Nav"

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
