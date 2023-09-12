import { Nav } from "../../Global/components/Nav/Nav"
import { Banner } from "./Banner"
import { CardsContainer } from "./CardsContainer"
import { ProductsContainer } from "./ProductsContainer"

export const Home = () => {
    return (
        <>
            <Nav />
            <Banner />
            <CardsContainer />
            <ProductsContainer />
        </>
    )
}
