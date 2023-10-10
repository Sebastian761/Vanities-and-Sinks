import { NavWithCart } from "../../Global/components/Nav/NavWithCart"
import { Banner } from "./Banner"
import { FooterBanner } from "./FooterBanner"
import { ProductsCards } from "./ProductsCards"

const Products = () => {
    return (
        <>
            <NavWithCart />
            <Banner />
            <div className="mx-24 my-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 ">
                <ProductsCards />
            </div>
            <FooterBanner />
        </>
    )
}

export default Products