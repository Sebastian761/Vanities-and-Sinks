import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

    export const NavButton = () => {
        return (
        <Menu>
            <MenuHandler>
                <Button>BUY NOW</Button>
            </MenuHandler>
            <MenuList>
                <MenuItem>
                    <Link>See Vanities</Link>
                </MenuItem>
                <MenuItem>
                    <Link>See Sinks</Link>
                </MenuItem>
            </MenuList>
        </Menu>
        );
    }