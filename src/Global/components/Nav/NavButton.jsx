import {
    Menu,
    MenuHandler,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

    export const NavButton = () => {
        return (
        <Menu>
            <MenuHandler>
                <Link to='/products'>
                    <Button>BUY NOW</Button>
                </Link>
            </MenuHandler>
        </Menu>
        );
    }