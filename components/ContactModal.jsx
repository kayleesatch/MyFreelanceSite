import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactModal({ open, setOpen }) {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    if (!open) return null;

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            "service_js-email", 
            "template_kqurgon", 
            form.current,
            "5NVTWULYo2vXF3KxZ"
        )
            .then(
                () => {
                    setLoading(false);
                    setSuccess("Message sent successfully!");

                    form.current.reset();

                    setTimeout(() => {
                        setSuccess(null);
                    }, 4000);
                },
                (error) => {
                    console.error(error);
                    setLoading(false);
                    setSuccess("Oops! Something went wrong.");
                }
            );
    };

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        className="relative bg-slate-900 text-white p-6 rounded-2xl shadow-xl w-[400px] max-w-[90%]"
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 text-2xl text-white"
                            >
                            ✖
                        </button>

                        <h2 className="text-2xl mb-4">Contact Info</h2>
                        <ul className="space-y-2 mb-6">
                            <li>
                                <a href="mailto:kayleesatch@gmail.com" className="hover:underline">kayleesatch@gmail.com</a>
                            </li>
                            <li>
                                <a href="https://github.com/kayleesatch" target="_blank" rel="noreferrer" className="hover:underline">Github</a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/kaylynn-satchell-04a79a315" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                            </li>
                        </ul>

                        <h2 className="text-2xl mb-4">Send a Message</h2>
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full p-2 rounded bg-slate-700 border border-slate-600"    
                                />
                            <input 
                                type="email"
                                name="email" 
                                placeholder="Your email"
                                required
                                className="w-full p-2 rounded bg-slate-700 border border-slate-600"    
                                />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="4"
                                required
                                className="w-full p-2 rounded bg-slate-700 border border-slate-600"
                            ></textarea>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-2 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white hover:opacity-80 transition"
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </form>

                        {success && <p className="mt-4 text-center">{success}</p>}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}