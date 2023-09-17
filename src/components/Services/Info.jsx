import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import CountertopsIcon from '@mui/icons-material/Countertops';

export const Info = () => {
    return (
        <>
            <h1 className="text-center text-4xl font-bold mb-6 text-gray-900">We offer you</h1>
            <div className="w-[90vw] m-auto mb-20 h-60 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3">
                <article className=" border border-gray-500 p-4 shadow-sm transition hover:shadow-lg sm:p-6 w-full text-center md:text-left">
                    <span className="inline-block rounded bg-indigo-600/70 p-2 text-white">
                        <PlumbingIcon   sx={{ fontSize:30 }}/>
                    </span>

                    <p>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">
                        Professional Sink Installation Service
                        </h3>
                    </p>

                    <p className="mt-3 line-clamp-3 text-sm/relaxed text-gray-700">
                        Our team of highly trained technicians will take care of your sink installation quickly and efficiently. We guarantee that your new sink will be properly installed and working perfectly.
                    </p>

                </article>
                <article className="border border-gray-500 p-4 shadow-sm transition hover:shadow-lg sm:p-6 w-full text-center md:text-left tablet:border-x-0 border-y-0 tablet:border-y">
                    <span className="inline-block rounded bg-indigo-600/70 p-2 text-white">
                        <DeliveryDiningIcon   sx={{ fontSize:30 }}/>
                    </span>

                    <p>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">
                        Fast and Secure Delivery Service
                        </h3>
                    </p>

                    <p className="mt-3 line-clamp-3 text-sm/relaxed text-gray-700">
                        We are proud to offer a fast and reliable delivery service. Your chosen sink or vanity will be carefully packed and delivered to your door in the shortest possible time. We make sure your purchase arrives in perfect condition, ready for installation. 
                    </p>

                </article>
                <article className="border border-gray-500 p-4 shadow-sm transition hover:shadow-lg sm:p-6 w-full text-center md:text-left">
                    <span className="inline-block rounded bg-indigo-600/70 p-2 text-white">
                        <CountertopsIcon   sx={{ fontSize:30 }}/>
                    </span>

                    <p>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">
                            Custom Bathroom Design Consulting
                        </h3>
                    </p>

                    <p className="mt-3 line-clamp-3 text-sm/relaxed text-gray-700">
                        Need help designing your ideal bathroom? We will guide you through the process, helping you select the sinks and vanities that best suit your needs and tastes, transforming your bathroom into a beautiful and functional space!
                    </p>

                </article>
            </div>
        </>
    );
};
