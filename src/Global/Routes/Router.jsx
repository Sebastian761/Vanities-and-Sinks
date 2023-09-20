import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../../components/Home/Home"
import { Cart } from "../../components/Cart/Cart"
import { Services } from "../../components/Services/Services"
import { About } from "../../components/About/About"
import Products from "../../components/Products/Products"
import { Contact } from "../../components/Contact/Contact"


export const Router = () => {
    return (
        <Routes>
            <>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </>
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="*" element={<Navigate to='/' />} />
        </Routes>
    )
}
