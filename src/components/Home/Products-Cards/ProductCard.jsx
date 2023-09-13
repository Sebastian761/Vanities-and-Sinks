import { useContext } from "react";
import { DataContext } from "../../../Global/Context/DataContext";

export const ProductCard = () => {
    const { data } = useContext(DataContext);

    return data
        .filter((product) => product.id <= 4)
        .map((product) => {
        return (
            <div className="group relative block bg-black" key={product.id}>
            <img
                alt="Developer"
                src={product.image}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase font-semibold tracking-widest text-gray-200">
                {product.category}
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                {product.title}
                </p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">
                    {product.description}
                    </p>
                </div>
                </div>
            </div>
            </div>
        );
    });
};
