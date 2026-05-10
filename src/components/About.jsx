import { div, span } from 'framer-motion/client'
import { Box, CodeXml } from 'lucide-react'
import React from 'react'
import { SiExpress } from 'react-icons/si'
import { motion } from "motion/react"

const About = () => {

    const about = [
        {
            id: 1,
            title: 'Website Design',
            projects: '5+ Projects',
            logo: <CodeXml />,
        },
        {
            id: 2,
            title: 'Backend Engineering',
            projects: 'Learning',
            logo: <SiExpress />,
        },
        {
            id: 3,
            title: '3D Animation & Modeling',
            projects: '8+ Projects',
            logo: <Box />,
        },
    ]

    const colors = {
        1: '#2519A66',
        2: '#FFC94D',
        3: '#DE802B'
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='bg-white w-full min-h-screen px-4 sm:px-6 lg:px-10 py-10 flex flex-col lg:flex-row gap-10 overflow-hidden absolute'
        >

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className='w-full lg:w-1/2 flex flex-col gap-5 justify-center md:bg-gray-700 md:px-10 md:py-10 px-0 py-0 bg-transparent md:rounded-3xl'>

                {
                    about.map(items => {
                        const { title, projects, id, logo } = items;

                        return (
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: id * 0.1
                                }}
                                className='flex items-center gap-4 sm:gap-5 px-4 sm:px-5 py-5 border-2 border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300'
                                key={id}
                            >

                                <h1
                                    style={{ backgroundColor: colors[id] }}
                                    className='rounded-full min-w-14 min-h-14 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-xl bg-gray-500'
                                >
                                    {logo}
                                </h1>

                                <div className='flex flex-col justify-center'>
                                    <h1 className='text-xl sm:text-2xl lg:text-3xl font-semibold'>
                                        {title}
                                    </h1>

                                    <p className='text-sm sm:text-base font-medium text-gray-600 mt-1'>
                                        {projects}
                                    </p>
                                </div>

                            </motion.div>
                        )
                    })
                }

            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className='w-full md:rotate-3 lg:w-1/2 flex bg:transparent md:bg-yellow-500 flex-col justify-center sm:px-5 relative mt-5 md:px-5 md:py-10 px-2'
            >

                <div className="absolute top-20 left-10 w-60 h-28 bg-yellow-400/20 blur-3xl rounded-full rotate-12 pointer-events-none" />

                <h1 className='relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold inline-block'>
                    <span className='bg-gray-700 text-black px-2'>
                        What do i help ?
                    </span>
                </h1>

                <div className='h-px w-full bg-gray-800 rounded-lg mt-5' />

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='mt-8 sm:mt-10 text-base sm:text-lg lg:text-[20px] text-gray-700 leading-relaxed relative z-10'
                >
                    I help build modern and responsive web experiences with clean UI, smooth animations, and scalable frontend architecture. I also work on interactive interfaces, creative designs, and performance focused applications using modern web technologies.
                </motion.p>

                <div className='flex flex-wrap gap-10 sm:gap-20 mt-10 relative z-10'>

                    <div className='flex items-center flex-col justify-center'>

                        <motion.h1
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className='text-5xl sm:text-6xl lg:text-7xl font-semibold'
                        >
                            5+
                        </motion.h1>

                        <p className='text-sm sm:text-base text-gray-600 mt-2'>
                            Projects Completed
                        </p>

                    </div>

                    <div className='flex items-center flex-col justify-center'>

                        <motion.h1
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='text-5xl sm:text-6xl lg:text-7xl font-semibold'
                        >
                            8+
                        </motion.h1>

                        <p className='text-sm sm:text-base text-gray-600 mt-2'>
                            Technologies Used
                        </p>

                    </div>

                </div>

            </motion.div>

        </motion.div>
    )
}

export default About