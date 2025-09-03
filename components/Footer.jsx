import { useState } from "react";
import TermsOfService from "./TermsOfService";

export default function Footer() {
    const [showTerms, setShowTerms] = useState(false);

    return (
        <footer className="text-center p-6 border-t border-slate-700 mt-4">
            <p>Made with 🧡 by Kaylynn Satchell</p>
            <p className="mt-2">
                <button 
                    onClick={() => setShowTerms(true)}
                    className="hover:underline hover:text-slate-200 transition"    
                >
                    Terms of Service
                </button>
            </p>

            {showTerms && <TermsOfService onClose={() => setShowTerms(false)} />}
        </footer>
    )
}