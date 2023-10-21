import { createContext, useState, useEffect } from "react";
import { PropTypes }  from "prop-types"
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    DataProvider.propTypes = {
        children: PropTypes.func.isRequired,
    };

    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios("/src/Global/Data/Data.json")
        .then((res) => setData(res.data))
    }, [])

    const AddProducts = (product) => {
        const productRepeat = cart.find((item) => item.id === product.id)
        if (productRepeat) {
            setCart(cart.map((item) => item.id === product.id 
            ? {...product, quanty: productRepeat.quanty + 1}
            : item
            ))
        } else {
            setCart([...cart, product])
        }
    }

    return (
        <DataContext.Provider value={{ data, cart, setCart, AddProducts }}>
                { children }
        </DataContext.Provider>
    )
}
