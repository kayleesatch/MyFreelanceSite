import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <>
        <nav className="flex justify-between items-center p-6 border-b border-slate-700">
            <div className="flex items-center space-x-3">
                <img src="/1.png" alt="KS Logo" className="h-10 w-10 border border-slate-600" />
                <span className="text-xl font-bold mx-2">Kaylynn Satchell</span>
            </div>
            <div className="space-x-4 flex items-center">
                <a 
                    onClick={() => setOpen(true)}
                    className=" px-4 py-2 rounded-xl hover:text-purple-600 hover:underline text-lg font-semibold cursor-pointer"
                >
                    Contact Me
                </a>
               
            </div>
        </nav>

        <ContactModal open={open} setOpen={setOpen} />
        </>
    );
}
