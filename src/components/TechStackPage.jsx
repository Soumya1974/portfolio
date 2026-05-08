import React from 'react'
import profile from '../assets/profile.jpeg'

const TechStackPage = () => {

    const cards = [
        {
            id: 1,
            title: "Fitness",
            img: profile,
            className: "md:col-span-2 md:row-span-2",
        },
        {
            id: 2,
            title: "Sports",
            img: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
            className: "md:col-span-2",
        },
        {
            id: 3,
            title: "Boxing",
            img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
            className: "md:row-span-2",
        },
        {
            id: 4,
            title: "Skating",
            img: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
            className: "",
        },
        {
            id: 5,
            title: "Football",
            img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
            className: "",
        },
    ];

    return (
        <section className="min-h-screen bg-yellow-500 px-6 py-16 absolute rounded-t-4xl">
            <div className="max-w-full">

                <div className="mb-10">

                    <h1 className="text-5xl md:text-7xl font-black">
                        <span className="text-yellow-500 bg-slate-800 rounded-lg px-3">Tech stack</span>{" "}
                        <span className="text-gray-700">i use</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 auto-rows-[220px]">

                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className={`group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer ${card.className}`}
                        >

                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500" />

                            <div className="absolute bottom-5 left-5 text-white">
                                <h2 className="text-2xl font-bold">
                                    {card.title}
                                </h2>

                                <p className="text-sm text-gray-200">
                                    Modern bento layout
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechStackPage