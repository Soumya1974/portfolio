import { useState } from "react";

export default function AboutModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      

      <div
        className={`fixed top-0 right-0 h-screen w-1/2 bg-white z-50 shadow-2xl
          transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
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