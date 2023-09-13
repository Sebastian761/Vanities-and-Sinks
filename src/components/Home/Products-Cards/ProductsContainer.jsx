import { ProductCard } from "./ProductCard"

export const ProductsContainer = () => {
    return (
        <div className="mx-12 mb-8 grid grid-cols-1 gap-8 mt-12 tablet:mt-0 md:grid-cols-2 2xl:grid-cols-4 w-auto">
            <ProductCard />
        </div>
    )
}
