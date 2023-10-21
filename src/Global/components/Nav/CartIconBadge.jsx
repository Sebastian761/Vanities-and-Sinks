import { Badge, IconButton } from '@material-tailwind/react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'
import { DataContext } from "../../Context/DataContext";
import { useContext } from 'react';


export const CartIconBadge = () => {

    const { cart } = useContext(DataContext)
    const itemQuanty = cart.reduce((acc, item) => acc + item.quanty, 0)

  return (
    <div>
        <Link to={'/cart'}>
            <div className='flex gap-3 text-white justify-center'>
                {cart.length > 0 
                ? <Badge content={itemQuanty} color='blue-gray'>
                    <IconButton className='bg-transparent shadow-none'>
                        <ShoppingCartOutlinedIcon />
                    </IconButton>
                </Badge>
                : null
                }
               
                <p className='m-auto'>Cart</p> 
            </div>
        </Link>
    </div>  
)
}
