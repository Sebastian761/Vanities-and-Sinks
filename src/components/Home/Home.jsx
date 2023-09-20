import { Banner } from "./Banner"
import { CardsContainer } from "./Cards/CardsContainer"
import { Gallery } from "./Gallery"
import { ProductsContainer } from "./Products-Cards/ProductsContainer"

export const Home = () => {
    return (
        <>
            <Banner />
            <CardsContainer />
            <ProductsContainer />
            <Gallery />
        </>
    )
}
