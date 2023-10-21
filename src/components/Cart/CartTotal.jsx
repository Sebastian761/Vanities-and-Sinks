import { useContext } from "react"
import { DataContext } from "../../Global/Context/DataContext"

export const CartTotal = () => {

    const { cart } = useContext(DataContext)

    const total = cart.reduce((acc, prod) => acc + prod.price * prod.quanty, 0)

    return (
        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
            <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between">
                        <dt>Subtotal</dt>
                        <dd>${total}</dd>
                    </div>

                    <div className="flex justify-between">
                        <dt>VAT</dt>
                        <dd>$25</dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>${total}</dd>
                    </div>
                </dl>
            <div className="flex justify-end">
                <a
                    href="#"
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                >
                    Checkout
                </a>
            </div>
        </div>
    </div>
    )
}
