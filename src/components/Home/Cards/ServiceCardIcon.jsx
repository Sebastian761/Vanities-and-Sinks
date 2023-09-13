import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { PropTypes }  from "prop-types"

export const ServiceCardIcon = ({Icon}) => {

    
    ServiceCardIcon.propTypes = {
        Icon: PropTypes.node.isRequired
    }

    return (
        <Card className="mt-6 w-auto shadow-none">
            <CardBody>
                { Icon && <Icon sx={{ fontSize: 50 }} className='mb-4'/>}

                <Typography variant="h5" color="blue-gray" className="mb-2">
                Our Services: Beyond the purchase
                </Typography>
                <Typography>
                At sinks and vanities, we are committed to providing you with much more than exceptional products. Our services go beyond the purchase, offering personalized advice and professional installation.
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Link to='/services' className="inline-block">
                    <Button size="sm" variant="text" className="flex items-center gap-2">
                        Learn More
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                        </svg>
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
