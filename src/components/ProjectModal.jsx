import { useEffect, useState } from "react";

export default function ProjectModal({ isOpen, onClose }) {
    const [visible, setVisible] = useState(false);
    const [notified, setNotified] = useState(false);

    useEffect(() => {
        if (isOpen) setVisible(true);
    }, [isOpen]);

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => { onClose(); setNotified(false); }, 500);
    };

    return (
        <>
            {visible && (
                <div
                    className="fixed inset-0 bg-black/50 z-50"
                    onClick={handleClose}
                />
            )}

            <div
                className={`fixed  top-1/2 left-1/2 -translate-x-1/2 w-[90%] max-w-md
                bg-white rounded-2xl shadow-2xl p-8 z-60
                transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
                    ${visible
                        ? "-translate-y-1/2 opacity-100 scale-100"
                        : "translate-y-[-40%] opacity-0 scale-95"
                    }`}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black
                    transition-all duration-300 hover:-rotate-90 text-xl cursor-pointer"
                >
                    ✕
                </button>

                <div className="inline-flex items-center gap-2 bg-amber-50 text-gray-600
                 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide mb-5">
                    <span className="w-2 h-2 rounded-full bg-gray-900 animate-pulse" />
                    Work in progress
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    This project isn't finished yet
                </h2>

                <p className="text-sm text-gray-500 leading-relaxed mb-2">
                    This project is currently under development and hasn't been deployed yet. You can checkout Github Repo instead.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    Estimated completion <span className="font-medium text-gray-800">15 days</span>.
                </p>

                <div className="flex gap-3">
                    <button
                        onClick={() => setNotified(true)}
                        disabled={notified}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                            ${notified
                                ? "bg-gray-100 text-gray-400 cursor-default"
                                : "bg-black text-white hover:bg-gray-800 cursor-pointer"
                            }`}
                    >
                        {notified ? "✓ Subscribed!" : "Notify me when live"}
                    </button>
                    <button
                        onClick={handleClose}
                        className="flex-1 py-2.5 rounded-xl text-sm border border-gray-200
                        text-gray-500 hover:border-gray-400 hover:text-gray-800
                        transition-all duration-200 cursor-pointer"
                    >
                        Close
                    </button>
                </div>

                <p className={`text-xs text-green-600 text-center mt-3 transition-all duration-300
                ${notified ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}>
                    You'll be notified when this goes live!
                </p>
            </div>
        </>
    );
}