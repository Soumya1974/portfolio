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
            concepts: ['Array', 'Data Structures', 'Oops', 'CB & Promices'],
            langlogo: <Languages className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
        },
        {
            id: 3,
            title: 'Frameworks',
            languages: [
                { logo: tailwind, name: 'Tailwind' },
                { logo: express, name: 'Express Js' },
            ],
            concepts: ['Routing', 'Req & Res', 'Middlewares', 'Grid & Flex'],
            langlogo: <Frame className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
        },
        {
            id: 4,
            title: 'Libraries',
            languages: [
                { logo: react, name: 'React' },
                { logo: redux, name: 'Redux' },
            ],
            concepts: ['States', 'Routing', 'Redux', 'Hooks'],
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
            desc: 'Hello! im Soumya, Software Dev'
        },
        {
            unique: 2,
            para: '2024–2025: Started as a beginner and learned Python, C, and JavaScript fundamentals, including programming basics, logic building, problem solving, and core development.',
            year: '2025-2026',
            desc: 'Explored langs like Python, C, Js'
        },
        {
            unique: 3,
            para: '2025 Feb-Apr: Learned Tailwind CSS and modern frontend workflows, focusing on responsive layouts, UI design systems, easy component structuring, and scalable styling techniques.',
            year: '2025-Apr',
            desc: 'Picked Tailwind as a framework'
        },
        {
            unique: 4,
            para: '2025–2026: Learned React and Redux libraries, focusing on component architecture, state management, hooks, reusable UI development, and building interactive frontend applications.',
            year: '2025-2026',
            desc: 'Started using React as library'
        },
        {
            unique: 5,
            para: '2025–2026: Explored Blender, video editing, and content creation workflows while learning 3D animation, visual storytelling, rendering, and creative media production techniques.',
            year: '2025-2026',
            desc: 'Expl Blender & freelancing in yt'
        }
    ]

    const active = fieldOptions.find(f => f.id === stackId);

    return (
        <section className="min-h-screen relative w-full bg-gray-400 px-1 sm:px-6 lg:px-10 sm:py-10 flex items-center py-2">

            <div className="w-full max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className='flex flex-wrap gap-2 items-center sm:mt-0 -mt-50'
                >
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-slate-800 text-gray-400 px-2 shadow-lg'>
                        Tech Stack
                    </h1>
                    <span className='text-lg sm:text-2xl md:text-3xl font-semibold'>
                        i use
                    </span>
                </motion.div>

                <div className='w-full flex flex-col lg:flex-row gap-5 sm:mt-5 mt-1'>

                    <div className='w-full lg:w-1/2 flex flex-col gap-5 sm:h-120 h-0'>

                        <motion.div
                            initial={{ opacity: 0, x: -90 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className='w-full bg-gray-500 rounded-md p-4 h-45 sm:h-45 lg:h-90 shrink-0 hidden sm:block relative'
                        >
                            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 content-start z-10'>
                                {fieldOptions.map(({ title, id, langlogo }) => (
                                    <motion.button
                                        key={id}
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.96 }}
                                        onClick={() => setStackId(id)}
                                        className={`
                                            relative z-10 py-2 px-3 rounded-md text-sm font-semibold h-10
                                            flex items-center justify-around cursor-pointer gap-1
                                            transition-colors duration-400 overflow-hidden
                                            shadow-lg
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

                            {/*timeline here */}
                            <div className='w-full h-full inset-0 absolute z-0 flex justify-end px-10 py-10 flex-col'>
                                <div className='flex gap-5 h-1/2'>
                                    <div className='flex items h-full relative ml-60'>
                                        <motion.div
                                            key={stackId}
                                            initial={{ opacity: -20, y: -20 }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 100
                                            }}
                                            transition={{ duration: 1 }}
                                            className='relative border border-gray-900 shadow-md px-5 py-2 h-20 w-70 flex justify-between'>

                                            <div className='flex flex-col'>
                                                <h1
                                                    // key={stackId}
                                                    // initial={{ opacity: 0, y: -20 }}
                                                    // animate={{ opacity: 1, y: 0 }}
                                                    // transition={{ duration: 1 }}
                                                    className='text-[20px] font-semibold text-black'>
                                                    {timeline[stackId - 1].year}
                                                </h1>

                                                <motion.p
                                                    key={stackId}
                                                    initial={{ opacity: 0, y: -20 }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0
                                                    }}
                                                    transition={{ duration: 1 }}
                                                    className='text-gray-black'>
                                                    {timeline[stackId - 1].desc}
                                                </motion.p>
                                            </div>

                                            <motion.div
                                                key={stackId}
                                                initial={{ rotateZ: 0 }}
                                                whileInView={{
                                                    rotateZ: -360
                                                }}
                                                transition={{ duration: 1 }}
                                                className='absolute -top-2 -right-2 w-5 h-5 bg-gray-800 rounded-full border-4 border-gray-800 flex items-center justify-center text-gray-400 text-center' >
                                                ?
                                            </motion.div>

                                        </motion.div>
                                    </div>
                                    <div className='w-1 bg-gray-600 h-75 flex justify-center' >
                                        <motion.div
                                            key={stackId}
                                            initial={{ height: 0 }}
                                            whileInView={{
                                                height: 200
                                            }}
                                            transition={{ duration: 1 }}
                                            className='w-1 bg-gray-800' >

                                        </motion.div>
                                    </div>
                                </div>
                                <motion.div
                                    key={stackId}
                                    initial={{ opacity: 0, y: -100 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{ duration: 1.1 }}
                                    className='flex relative mt-15 h-3/4 mr-7 text-black border bg-gray-500 px-2 py-2 border-gray-800 shadow-md'>
                                    <motion.p
                                        key={stackId}
                                        initial={{ opacity: 0, y: -15 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        transition={{ duration: 1.1 }}
                                    >
                                        {timeline[stackId - 1].para}
                                    </motion.p>
                                    <motion.div
                                        key={stackId}
                                        initial={{ rotateZ: 0 }}
                                        whileInView={{
                                            rotateZ: -360
                                        }}
                                        transition={{ duration: 1 }}
                                        className='absolute -top-2 -right-2 w-5 h-5 bg-gray-800 rounded-full border-4 border-gray-800 flex items-center justify-center text-gray-400 text-center' >
                                        A
                                    </motion.div>
                                </motion.div>
                            </div>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className='flex-1 overflow-hidden rounded-md hidden sm:block bg-gray-800 px-2 py-2'>
                            <div className='h-full grid grid-cols-2 sm:grid-cols-3 gap-0 px-2 py-2 content-start'>
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
                                                className="relative px-4 h-10 bg-slate-800 rounded-md flex items-center justify-center shadow-lg"
                                            >
                                                <span className="relative z-10 text-white font-semibold text-sm text-center">
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
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className='w-full lg:w-1/2 bg-slate-800 rounded-md p-5 h-120 flex flex-col'>

                        {/*Hide title on mobile */}

                        <div className='shrink-0 sm:block hidden'>
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
                                    <h1 className='text-white font-semibold text-2xl'>{active?.title}</h1>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className='grid grid-cols-3 sm:grid-cols-3 gap-3 content-start sm:hidden'>
                            {fieldOptions.map(({ title, id }) => (
                                <motion.button
                                    key={id}
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    onClick={() => setStackId(id)}
                                    className={`
                                            relative py-2 px-3 rounded-md text-sm font-semibold h-10
                                            flex items-center justify-center gap-1
                                            transition-colors duration-200 overflow-hidden
                                            ${stackId === id
                                            ? 'bg-yellow-500 text-slate-900 shadow-[0_0_18px_rgba(234,179,8,0.5)]'
                                            : 'bg-slate-800 text-white hover:shadow-[0_0_14px_rgba(255,255,255,0.08)]'
                                        }
                                        `}
                                >
                                    {stackId === id && (
                                        <motion.span
                                            layoutId="active-pill"
                                            className="absolute inset-0 bg-yellow-500 -z-10 rounded-md"
                                            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                                        />
                                    )}
                                    {title}
                                </motion.button>
                            ))}
                        </div>
                        <div className='h-px w-full bg-gray-400 rounded-lg mt-5 shrink-0' />

                        <div className='py-5 flex-1 sm:overflow-hidden overflow-y-auto'>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={stackId + '-langs'}
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 content-start'
                                >
                                    {active?.languages.map((lang, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300 } }}
                                            className='flex flex-col items-center px-2 py-2 cursor-default'
                                        >
                                            <motion.div
                                                whileHover={{
                                                    rotate: [0, -6, 6, 0],
                                                    transition: { duration: 0.35 }
                                                }}
                                                className='p-3 bg-gray-700 rounded-lg w-16 h-16 flex items-center justify-center
                                                           shadow-md hover:shadow-[0_0_18px_#607B8F] transition-shadow duration-300'
                                            >
                                                <img
                                                    src={lang.logo}
                                                    alt={lang.name}
                                                    className='w-10 h-10 object-contain'
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