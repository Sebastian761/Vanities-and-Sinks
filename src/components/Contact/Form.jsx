import { useRef } from "react";
import { Toaster, toast } from "sonner"
import emailjs from '@emailjs/browser';

export const Form = () => {

    const form = useRef();
    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ucc15y2', 'template_5ph6i7e', form.current, '0IC4VlU01dJiUhkWZ')
        .then(() => {
            toast.success('Request successfully sent')
            form.current.reset();
        }, (error) => {
            toast.error(error)
        });
    };
    return (
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
                <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Contact Us for a Better Shopping Experience!</h1>
                <p className="mt-4 leading-relaxed text-gray-700 mb-8">
                If you have any questions or comments about our products, shipping, returns or any aspect of your shopping experience, please feel free to contact us. We are here to help make your sink and vanity purchases as smooth and satisfying as possible. Contact us today.
                </p>
                <div className="rounded-lg bg-white p-8 lg:col-span-3 lg:p-12">
                    <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                        <div>
                            <label className="sr-only">Email Address</label>
                            <input required className="w-full rounded-lg border-2 border-gray-500 p-3 text-sm placeholder-gray-600" placeholder="Email address" type="Email" name="user_email"/>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="sr-only">Name</label>
                                <input required className="w-full rounded-lg border-2 border-gray-500 p-3 text-sm placeholder-gray-600" placeholder="First name" name="user_name" type="text"/>
                            </div>
                            <div>
                                <label className="sr-only">Last Name</label>
                                <input required className="w-full rounded-lg border-2 border-gray-500 p-3 text-sm placeholder-gray-600" placeholder="Last Name" type="text"/>
                            </div>
                        </div>
                        <div>
                            <label className="sr-only">Message</label>
                            <textarea required className="w-full rounded-lg border-2 border-gray-500 text-slate-900 p-3 text-sm placeholder-gray-600" placeholder="Message" name="message" rows="8"></textarea>
                        </div>
                        <div className="mt-4">
                            <Toaster position='bottom-right' richColors />
                            <button type="submit" value="Send" className="inline-block w-full rounded-lg bg-indigo-700 px-5 py-3 font-medium text-white sm:w-auto">Send Request</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
