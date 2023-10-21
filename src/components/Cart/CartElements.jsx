import { useContext } from "react";
import { DataContext } from "../../Global/Context/DataContext";
import { CartItemCounter } from "./CartItemCounter";

export const CartElements = () => {
    const { cart } = useContext(DataContext);
    return cart.map((product) => {
        return (
            <li className="flex items-center gap-4 mb-4" key={product.id}>
                <img
                src={product.image}
                alt="product image"
                className="h-20 w-20 rounded object-cover"
                />
                <div>
                    <h3 className="text-sm text-gray-900">{product.title}</h3>
                    <dl className="mt-0.5 space-y-px text-[12px] xtext-gray-600">
                        <div>
                            <dt className="inline">Color:</dt>
                            <dd className="inline">White</dd>
                        </div>
                    </dl>
                </div>
               <CartItemCounter product={product}/>
            </li>
        );
    });
};
