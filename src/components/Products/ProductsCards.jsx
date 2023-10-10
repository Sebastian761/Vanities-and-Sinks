import { useContext } from "react"
import { DataContext } from "../../Global/Context/DataContext"
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";

export const ProductsCards = () => {
    const { data } = useContext(DataContext)
    return data.map((product) => {
        return (
            <Card className="w-96" key={product.id}>
                <CardHeader shadow={false} floated={false} className="h-96">
                    <img
                    src={product.image}
                    className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium ">
                            {product.title}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                        $ {product.price}
                        </Typography>
                    </div>
                    <div className="line-clamp-2">
                        <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                        >
                        {product.description}
                        </Typography>
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                    Add to Cart
                    </Button>
                </CardFooter>
                </Card>
        )
    })
};
