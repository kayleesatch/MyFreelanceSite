import React from "react";

export default function LearnMoreModal({ open, onClose, name, details }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                    ✕
                </button>
                <h3 className="text-3xl text-slate-700 font-bold mb-4">{name}</h3>
                <p className="text-gray-700 whitespace-pre-line">{details}</p>
            </div>
        </div>
    )
}