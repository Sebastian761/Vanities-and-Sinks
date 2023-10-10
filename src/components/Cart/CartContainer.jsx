import { useContext } from "react";
import { CartElements } from "./CartElements";
import { CartTotal } from "./CartTotal";
import { DataContext } from "../../Global/Context/DataContext";
import { Alert } from "@material-tailwind/react";

export const CartContainer = () => {

    const { cart } = useContext(DataContext)

    return (
        <section className="h-full min-h-[70vh]">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-gray-100 rounded-lg shadow-2xl m-12">
                <div className="mx-auto max-w-3xl">
                    <header className="text-center">
                        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Your Cart
                        </h1>
                    </header>
                    <div className="mt-8">
                        <ul className="space-y-4"></ul>
                        {
                            cart.length > 0 
                            ? 
                                <>
                                    <CartElements />
                                    <CartTotal />
                                </>
                            : 
                                <Alert className="text-xl font-bold text-gray-800 sm:text-2xl flex items-center justify-center pl-16 mt-16" variant="ghost">
                                    <p className="">Your cart is empty!</p>
                                </Alert>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};
