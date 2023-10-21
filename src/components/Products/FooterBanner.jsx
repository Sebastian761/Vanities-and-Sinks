import './Banner.css'
export const FooterBanner = () => {
    return (
        <section className="overflow-hidden h-[490px] bg-[url(https://images.unsplash.com/photo-1538430224529-7eceed6ab252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] w-full bg-cover bg-center bg-no-repeat">
            <div className="bg-black/20 p-8 md:p-12 h-[490px] flex flex-col laptop:flex-row space-between items-center justify-center">
                <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl xltablet:text-5xl" id="h2">
                    Our History
                </h2>
            </div>
        </section>
    )
}
