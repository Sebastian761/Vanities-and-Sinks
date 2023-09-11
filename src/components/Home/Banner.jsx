import { Typography, Button } from "@material-tailwind/react";

export const Banner = () => {
    return (
    <div className="w-full">
        <div className="relative h-[760px] w-full">
            <img
            src="https://images.unsplash.com/photo-1609879937493-56540300d8cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
                <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                Sinks and Vanities. Elegance for your Bathroom
                </Typography>
                <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
                >
                Discover an exceptional selection of sinks and vanities that will completely transform your bathroom. From modern and minimalist designs to classic and sophisticated options.
                </Typography>
                <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                    Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                    Gallery
                </Button>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};
