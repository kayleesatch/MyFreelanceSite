import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Hero() {
    const [open, setOpen] = useState(false)
    return (
        <section className="text-center py-20">
            <h1 className="text-6xl font-bold mb-4 mx-24 text-slate-600 shadow-white-lg">Need a Website?<br />I would love to make one for you!</h1>
            <h1 className="text-5xl font-bold mb-4 text-yellow-300 shadow-white-lg">Hi, I'm Kaylynn</h1>
            <p className="text-2xl font-semibold">Freelance Web Developer & Designer</p>
            <p className="text-xl px-8">Take a look and see what works best for you and if you have any questions just reach out and
                <a 
                    onClick={() => setOpen(true)}
                    className="px-2 hover:text-purple-600 hover:underline text-lg font-bold cursor-pointer"
                >
                    Contact Me!
                </a>
                
            </p>
            <ContactModal open={open} setOpen={setOpen} />
        </section>
    )
}