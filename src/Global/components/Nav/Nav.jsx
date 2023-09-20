import { useEffect, useState } from "react";
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { NavButton } from "./NavButton";

export const Nav = () => {
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
    <div className=" max-h-[768px] w-full">
        <Navbar className="bg-gray-800/75 z-40 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 border-none">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Link
                    to='/'
                    className="mr-4 cursor-pointer py-1.5 font-medium text-white"
                >
                    Company Logo
                </Link>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <NavButton />
                    <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
                <Button variant="gradient" size="sm" fullWidth className="mb-2">
                    <span>Buy Now</span>
                </Button>
            </Collapse>
        </Navbar>
    </div>
    );
}
