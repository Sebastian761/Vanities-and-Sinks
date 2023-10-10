import { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
    Navbar,
    Typography,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const NavWithCart = () => {

    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-semibold"
            >
                <Link to='/services' className="flex items-center">
                    Services
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-semibold"
            >
                <Link to='/about' className="flex items-center">
                    About Us
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-semibold"
            >
                <Link to='/contact' className="flex items-center">
                    Contact
                </Link>
            </Typography>
        </ul>
        
    );

    return (
        <div className=" max-h-[768px] w-full sticky top-0 z-40">
            <Navbar className="bg-gray-800/75 z-40 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 border-none">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Link
                        to='/'
                        className="mr-4 cursor-pointer py-1.5 font-medium text-white"
                    >
                        Company Logo
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:block">{navList}</div>
                        <div>
                            <Link to="/cart" className="mx-4 flex gap-2 text-white">
                                <ShoppingCartOutlinedIcon/>
                                <p>Cart</p>
                            </Link>
                        </div>
                        <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                                </svg>
                                ) : (
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    {navList}
                </Collapse>
            </Navbar>
        </div>
    );
}
