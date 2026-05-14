import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import python from '../assets/python.svg'
import c from '../assets/c.svg'
import java from '../assets/java.svg'
import js from '../assets/js.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import tailwind from '../assets/tailwind.svg'
import express from '../assets/express.svg'
import react from '../assets/react.svg'
import redux from '../assets/redux.svg'
import blender from '../assets/blender.svg'
import davinchi from '../assets/davinchi.svg'
import ofiice from '../assets/ofiice.svg'
import nodejs from '../assets/nodejs.svg'
import youtube from '../assets/youtube.svg'
import {
    ClipboardList,
    Frame,
    GalleryHorizontalEnd,
    Languages,
    LibraryBig
} from 'lucide-react';

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 14, scale: 0.95 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { type: 'spring', stiffness: 260, damping: 20 }
    },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.12 } },
}

const panelVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1, x: 0,
        transition: { type: 'spring', stiffness: 220, damping: 22 }
    },
    exit: { opacity: 0, x: -20, transition: { duration: 0.15 } },
}

const TechStackPage = () => {

    const [stackId, setStackId] = useState(1);

    const fieldOptions = [
        {
            id: 1,
            title: 'All',
            languages: [
                { logo: js, name: 'Java Script' },
                { logo: nodejs, name: 'Node Js' },
                { logo: python, name: 'Python' },
                { logo: c, name: 'C' },
                { logo: java, name: 'Java' },
                { logo: html, name: 'Html5' },
                { logo: css, name: 'Css' },
                { logo: tailwind, name: 'Tailwind' },
                { logo: express, name: 'Express Js' },
                { logo: react, name: 'React' },
                { logo: redux, name: 'Redux' },
                { logo: blender, name: 'Blender' },
                { logo: davinchi, name: 'Davinchi' },
                { logo: ofiice, name: 'Ms Office' },
                { logo: youtube, name: 'YouTube' },
            ],
            concepts: ['3D Animation', 'Video Editing', 'Data Structures', 'Routing', 'Req & Res', 'Middlewares'],
            langlogo: <GalleryHorizontalEnd className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
        },
        {
            id: 2,
            title: 'Languages',
            languages: [
                { logo: js, name: 'Java Script' },
                { logo: python, name: 'Python' },
                { logo: c, name: 'C' },
                { logo: java, name: 'Java' },
                { logo: html, name: 'Html5' },
                { logo: css, name: 'Css' },
            ],
            concepts: ['Array', 'Data Structures', 'Oops', 'CB & Promices', 'Destructuring'],
            langlogo: <Languages className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
        },
        {
            id: 3,
            title: 'Frameworks',
            languages: [
                { logo: tailwind, name: 'Tailwind' },
                { logo: express, name: 'Express Js' },
            ],
            concepts: ['Routing', 'Req & Res', 'Middlewares', 'Grid & Flex', 'Animations'],
            langlogo: <Frame className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
        },
        {
            id: 4,
            title: 'Libraries',
            languages: [
                { logo: react, name: 'React' },
                { logo: redux, name: 'Redux' },
            ],
            concepts: ['States', 'Routing', 'Redux', 'Hooks', 'Effects', 'Form'],
            langlogo: <LibraryBig className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
        },
        {
            id: 5,
            title: 'Others',
            languages: [
                { logo: blender, name: 'Blender' },
                { logo: davinchi, name: 'Davinchi' },
                { logo: ofiice, name: 'Ms Office' },
                { logo: youtube, name: 'YouTube' },
            ],
            concepts: ['3D Animation', 'Video Editing', 'Excel', 'Youtube'],
            langlogo: <ClipboardList className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
        },
    ];

    const timeline = [
        {
            unique: 1,
            para: 'Click on any category to explore the technologies, concepts, and learning journey developed throughout the timeline.',
            year: '2025-Present',
            desc: `Hello! I'm Soumya, Software Dev`
        },
        {
            unique: 2,
            para: '2024–2025: Started as a beginner and learned Python, C, and JavaScript fundamentals, including programming basics.',
            year: '2025-2026',
            desc: 'Explored langs like Python, C, Js'
        },
        {
            unique: 3,
            para: '2025 Feb-Apr: Learned Tailwind CSS and modern frontend workflows, focusing on responsive layouts and page animations',
            year: '2025-Apr',
            desc: 'Picked Tailwind as a framework'
        },
        {
            unique: 4,
            para: '2025–2026: Learned React and Redux libraries, focusing on component architecture, state management, UI development.',
            year: '2025-2026',
            desc: 'Started using React as library'
        },
        {
            unique: 5,
            para: '2025–2026: Explored Blender, video editing, and content creation workflows while learning 3D animation.',
            year: '2025-2026',
            desc: 'Expl Blender & freelancing in yt'
        }
    ]

    const active = fieldOptions.find(f => f.id === stackId);

    return (
        <section className="sm:min-h-screen h-full relative w-full bg-white px-3 sm:px-6 lg:px-10 py-8 sm:py-10 flex items-center">

            <div className="w-full max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: -80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className='flex flex-wrap gap-2 items-center mb-4 sm:mb-5'
                >
                    <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold bg-gray-800 text-gray-300 px-2 shadow-lg'>
                        Tech Stack
                    </h1>
                    <span className='text-base sm:text-2xl md:text-3xl font-semibold'>
                        i use
                    </span>
                </motion.div>

                <div className='w-full px-5 py-5 flex flex-col lg:flex-row gap-5'>

                    <div className='w-full lg:w-1/2 flex flex-col gap-5'>

                        <motion.div
                            initial={{ opacity: 0, y: -90 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className='w-full bg-gray-600 rounded-md p-4 relative h-72 md:h-90'
                        >
                            <div className='grid grid-cols-3 sm:grid-cols-3 gap-3 content-start z-10'>
                                {fieldOptions.map(({ title, id, langlogo }) => (
                                    <motion.button
                                        key={id}
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.96 }}
                                        onClick={() => setStackId(id)}
                                        className={`
                                        relative z-10 py-2 px-3 rounded-md text-[10px] sm:text-sm font-semibold h-10
                                        flex items-center justify-around cursor-pointer gap-1
                                        transition-colors duration-400 overflow-hidden shadow-lg
                                        ${stackId === id
                                                ? 'bg-gray-400 text-black shadow-[0_0_18px_rgba(234,179,8,0.5)] border border-white'
                                                : 'bg-slate-800 text-white hover:shadow-[0_0_14px_rgba(255,255,255,0.08)]'
                                            }
                                        `}
                                    >
                                        <span>{langlogo}</span>
                                        {title}
                                    </motion.button>
                                ))}
                            </div>

                            {/*tech stack here */}
                            <div className='w-full h-full inset-0 absolute z-0 flex justify-end px-4 sm:px-6 lg:px-7 py-4 sm:py-6 flex-col items-center overflow-hidden'>

                                <div className='flex flex-col lg:flex-row gap-5 h-auto lg:h-1/2 sm:mr-0 -mr-13'>

                                    <div className='flex h-full relative lg:ml-20 xl:ml-70 w-full lg:w-auto'>
                                        <motion.div
                                            key={stackId}
                                            initial={{ opacity: 0, y: -20 }}
                                            whileInView={{ opacity: 1, y: 100 }}
                                            transition={{ duration: 1 }}
                                            className='relative border border-gray-900 shadow-md px-4 sm:px-5 py-2 h-20 w-full max-w-70 sm:flex items-center'
                                        >
                                            <div className='flex flex-col w-80'>
                                                <h1 className='text-lg sm:text-[15px] font-semibold text-black'>
                                                    {timeline[stackId - 1].year}
                                                </h1>
                                                <motion.p
                                                    key={stackId}
                                                    initial={{ opacity: 0, y: -20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 1 }}
                                                    className='text-black text-sm sm:text-base'
                                                >
                                                    {timeline[stackId - 1].desc}
                                                </motion.p>
                                            </div>
                                            <motion.div
                                                key={stackId}
                                                initial={{ rotateZ: 0 }}
                                                whileInView={{ rotateZ: -360 }}
                                                transition={{ duration: 1 }}
                                                className='absolute -top-2 -right-2 w-5 h-5 bg-gray-800 rounded-full border-4 border-gray-800 flex items-center justify-center text-gray-400 text-center'
                                            >?
                                            </motion.div>
                                        </motion.div>
                                    </div>

                                    <div className='hidden md:block lg:flex w-1 bg-gray-700 h-75 justify-center lg:mr-0 xl:mr-10'>
                                        <motion.div
                                            key={stackId}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: 200 }}
                                            transition={{ duration: 1 }}
                                            className='w-1 bg-gray-900'
                                        />
                                    </div>

                                </div>

                                <motion.div
                                    key={stackId}
                                    initial={{ opacity: 0, y: -100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.1 }}
                                    className='flex relative mt-30 sm:mt-10 lg:mt-10 xl:mt-20  lg:h-auto xl:h-40 mr-0 lg:mr-7 xl:mr-7 text-black border px-3 sm:px-4 py-4 border-gray-800 shadow-md'
                                >
                                    <motion.p
                                        key={stackId}
                                        initial={{ opacity: 0, y: -15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1.1 }}
                                        className='text-sm xl:text-md'
                                    >
                                        {timeline[stackId - 1].para}

                                    </motion.p>
                                    <motion.div
                                        key={stackId}
                                        initial={{ rotateZ: 0 }}
                                        whileInView={{ rotateZ: -360 }}
                                        transition={{ duration: 1 }}
                                        className='absolute -top-2 -right-2 w-5 h-5 bg-gray-800 rounded-full border-4 border-gray-800 flex items-center justify-center text-gray-400 text-center'
                                    >A
                                    </motion.div>
                                </motion.div>

                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className='sm:flex hidden flex-1 overflow-hidden rounded-md bg-gray-900 px-2 py-2 min-h-32'
                        >
                            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-2 px-2 py-2 content-start'>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={stackId + '-concepts'}
                                        className="contents"
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        {active?.concepts.map((tag, index) => (
                                            <motion.div
                                                key={index}
                                                variants={itemVariants}
                                                className="relative px-3 sm:px-4 h-10 bg-slate-900 rounded-md flex items-center justify-center shadow-lg"
                                            >
                                                <span className="relative z-10 text-white font-semibold text-xs sm:text-sm text-center">
                                                    {tag}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>

                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='w-full lg:w-1/2 bg-slate-900 rounded-md p-4 sm:p-5 sm:h-125 h-70 flex flex-col overflow-hidden'
                    >

                        <div className='shrink-0'>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={stackId + '-header'}
                                    variants={panelVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className='flex gap-2 items-center'
                                >
                                    <span className='text-white'>{active?.langlogo}</span>
                                    <h1 className='text-white font-semibold text-xl sm:text-2xl'>{active?.title}</h1>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className='h-px w-full bg-gray-400 rounded-lg mt-4 sm:mt-5 shrink-0' />

                        <div className='py-4 sm:py-5 flex-1 overflow-y-auto no-scrollbar'>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={stackId + '-langs'}
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5 content-start'
                                >
                                    {active?.languages.map((lang, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300 } }}
                                            className='flex flex-col items-center px-1 sm:px-2 py-2 cursor-default'
                                        >
                                            <motion.div
                                                whileHover={{ rotate: [0, -6, 6, 0], transition: { duration: 0.35 } }}
                                                className='p-2 sm:p-3 bg-gray-600 rounded-lg w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-md hover:shadow-[0_0_18px_#607B8F] transition-shadow duration-300'
                                            >
                                                <img
                                                    src={lang.logo}
                                                    alt={lang.name}
                                                    className='w-8 h-8 sm:w-10 sm:h-10 object-contain'
                                                />
                                            </motion.div>
                                            <div className='text-white text-xs sm:text-sm mt-2 text-center'>
                                                {lang.name}
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    )
}

export default TechStackPage