import { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Form } from "./Form";

export const Contact = () => {
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    
    return (
        <>
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12 bg-gradient-to-b from-white from-30% to-BgBlue">
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 min min-h-[300px] hover:min-h-[500px] transition-all duration-1 ease-in">
                    <img alt="furniture" src="https://images.unsplash.com/photo-1531125227120-bac862d2aeb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" className="absolute inset-0 h-[95%] w-full object-cover "/>
                </aside>
                <Form />
            </div>
            <div className='relative md:h-[1020px] xl:h-[560px] laptop:h-[460px]'>
            <div className=" px-10 flex flex-col xl:flex-row-reverse w-full m-auto h-full">
                <div className="px-8 md:px-32 pt-10 md:pt-16 mx-auto xl:my-auto xl:pt-0">
                    <p className="font-bold text-sm uppercase mb-0.5">Services</p>
                    <p className="text-3xl font-bold mb-2">Frequently Asked Question</p>
                    <Accordion open={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)}>What are the shipping options available?</AccordionHeader>
                        <AccordionBody>
                        We offer several shipping options, including standard and express shipping. Details on delivery times and costs can be found on the checkout page during the purchase process.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)}>
                        How can I contact customer support?
                        </AccordionHeader>
                        <AccordionBody>
                        To contact our customer service team, please use our contact form on the &quot;Contact us&quot; page. Our team is ready to answer your questions and provide you with personalized assistance at all times. Your satisfaction and trust are paramount to us, and we are here to help you every step of the way. Feel free to write to us and we will get back to you promptly.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                        What are the return and warranty policies?
                        </AccordionHeader>
                        <AccordionBody>
                        At this time, we do not offer a return service, but we want you to have complete confidence in the quality of our products and their proper installation.  Your satisfaction remains our top priority, and we are here to make sure you are satisfied with your purchase and have a smooth experience from delivery to installation.
                        </AccordionBody>
                    </Accordion>
                </div>
                <img alt="furniture" src="https://images.unsplash.com/photo-1595515422824-a17acde1b915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" className="lg:p-10 w-full md:w-[85%] xl:w-[50%] xl:h-[75%] my-10 md:my-0 m-auto laptop:h-full"/>
            </div>  
        </div>
        </>
    )
}
