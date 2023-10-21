import { useContext } from "react"
import { PropTypes }  from "prop-types"
import { DataContext } from "../../Global/Context/DataContext"

export const CartItemCounter = ({ product }) => {
    
    CartItemCounter.propTypes = {
        product: PropTypes.node.isRequired,
        cart: PropTypes.node.isRequired,
        setCart: PropTypes.node.isRequired
    }

    const { AddProducts, cart, setCart } = useContext(DataContext)
    
    const decrease = () => {
        const productRepeat = cart.find((item) => item.id === product.id)

        productRepeat.quanty !== 1 &&
        setCart(cart.map((item) => item.id === product.id 
        ? {...product, quanty: productRepeat.quanty - 1}
        : item
        ))
    }

    const deleteProduct = (id) => {
        const foundId = cart.find((elem) => elem.id ===  id)

        const newCart = cart.filter((elem) => {
            return elem !== foundId
        })

        setCart(newCart)
    }

  return (
    <div className="flex flex-1 items-center justify-end gap-2">
        <div className='flex flex-1 items-center justify-end gap-2 m-4'>
            <div className='pt-1 mr-6 font-bold'>
                <p>$ {product.price * product.quanty}</p>
            </div>
            <p className='cursor-pointer font-bold' onClick={() => decrease(product)}>-</p>
            <form>
                <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>
            </form>
                <input  type="number" min="1" value={product.quanty} readOnly    id="Line1Qty" className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"/>
            <p className='cursor-pointer' onClick={() => AddProducts(product)} >+</p>
        </div>
        <button className="text-gray-600 transition hover:text-red-600" onClick={() => deleteProduct(product.id)}>
            <span className="sr-only" >Remove item</span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
            </svg>
        </button>
    </div>
  )
}
