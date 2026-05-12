import React from 'react'
import { motion } from 'motion/react'

const EducationTimeline = () => {

    const educationData = [
        {
            year: '2025-2027',
            title: 'Master of Computer Applications',
            desc: 'Currently learning full stack development and software engineering.'
        },
        {
            year: '2022-2025',
            title: 'Bachelor of Science in Chemistry',
            desc: 'Focused on analytical thinking, scientific research fundamentals.'
        }
    ];

    return (
        <section className='min-h-screen w-full bg-black px-4 sm:px-8 lg:px-20 py-20 overflow-hidden relative'>

            <div className='max-w-6xl mx-auto'>

                <div className='mb-20'>

                    <h1 className='text-4xl sm:text-5xl font-bold text-white'>
                        Education Timeline
                    </h1>

                    <p className='text-gray-400 mt-4 text-base sm:text-lg'>
                        My academic and learning journey through the years.
                    </p>

                </div>

                <div className='relative'>

                    <div className='absolute left-4 sm:left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gray-700' />

                    {
                        educationData.map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.2
                                }}
                                viewport={{
                                    once: true
                                }}
                                className={`relative flex items-center mb-20 ${
                                    index % 2 === 0
                                        ? 'sm:justify-start'
                                        : 'sm:justify-end'
                                }`}
                            >

                                <div className='w-full sm:w-[45%] ml-12 sm:ml-0'>

                                    <div className='relative border border-gray-800 bg-zinc-900 p-6 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)]'>

                                        <div className='absolute top-5 -left-10.5 sm:hidden w-5 h-5 rounded-full bg-yellow-400 border-4 border-black' />

                                        <div className={`hidden sm:block absolute top-8 w-5 h-5 rounded-full bg-yellow-400 border-4 border-black ${
                                            index % 2 === 0
                                                ? '-right-13'
                                                : '-left-13'
                                        }`} />

                                        <h1 className='text-yellow-400 text-xl font-bold'>
                                            {item.year}
                                        </h1>

                                        <h2 className='text-white text-2xl font-semibold mt-2'>
                                            {item.title}
                                        </h2>

                                        <p className='text-gray-300 mt-4 leading-relaxed'>
                                            {item.desc}
                                        </p>

                                    </div>

                                </div>

                            </motion.div>

                        ))
                    }

                </div>

            </div>

        </section>
    )
}

export default EducationTimeline