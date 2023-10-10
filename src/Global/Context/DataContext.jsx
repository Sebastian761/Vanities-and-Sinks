import { createContext, useState, useEffect } from "react";
import { PropTypes }  from "prop-types"
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    
    DataProvider.propTypes = {
        children: PropTypes.node.isRequired
    }

    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios("/src/Global/Data/Data.json")
        .then((res) => setData(res.data))
    }, [])

    return (
        <DataContext.Provider value={{ data, cart, setCart }}>
                { children }
        </DataContext.Provider>
    )
}
