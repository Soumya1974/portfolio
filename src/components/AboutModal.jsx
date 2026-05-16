import React, { useEffect, useState } from "react";

export default function AboutModal({ onCancel, isOpen }) {

    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        }
    }, [isOpen])

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => {
            onCancel();
        }, 500);
    }

    return (
        <>
            {isVisible && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={handleClose}
                />
            )}

            <div
                className={`fixed top-0 right-0 h-screen w-3/4 md:w-1/2 bg-white z-50 shadow-2xl
                transition-transform duration-500 ease-in-out
                ${isVisible ? "translate-x-0" : "translate-x-full"}`}
            >
                <button
                    className={`absolute top-4 right-4 text-gray-500 hover:text-black text-2xl transition-all duration-700 cursor-pointer hover:-rotate-90
                        ${
                            isVisible ? "rotate-180" : "rotate-0"
                        }`}
                    onClick={handleClose}
                >
                    ✕
                </button>

                <div className="p-8 pt-16 h-full overflow-y-auto">
                    <h2 className="text-2xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Your about content goes here...
                    </p>
                </div>
            </div>
        </>
    );
}