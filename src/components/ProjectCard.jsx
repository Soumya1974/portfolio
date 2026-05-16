import React, { useState } from 'react'
import cashflow from '../assets/cashflow.png'
import animation from '../assets/animation.png'
import netflix from '../assets/netflix.png'
import './ProjectCard.css'
import SplitText from './SplitText'
import { ChartLine, Flame, FolderGit2, Scaling, SquareArrowOutUpRight, StickyNote, Timer } from 'lucide-react'
import { FaCss3Alt, FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { IoLogoJavascript } from 'react-icons/io'
import { SiExpress, SiMongodb, SiRedux } from 'react-icons/si'

const ProjectCard = () => {

    const [hoveredId, setHoveredId] = useState(null);

    const projectPreview = [
        {
            id: 1,
            title: 'CashFlow: A personal etracker',

            description:
                'CashFlow is a personal finance tracking web application designed to help users manage their income, expenses, and savings in an organized way. It provides a clean dashboard that visualizes financial data, making it easier to understand spending habits and cash flow trends over time.',

            techstack: [
                {
                    logo: <FaReact className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
                    name: 'React'
                },
                {
                    logo: <RiTailwindCssFill className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
                    name: 'Tailwind'
                },
                {
                    logo: <IoLogoJavascript className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
                    name: 'JavaScript'
                },
                {
                    logo: <ChartLine className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
                    name: 'Recharts'
                },
                {
                    logo: <SiRedux className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
                    name: 'Redux'
                },
                {
                    logo: <Flame className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
                    name: 'Hot Toast'
                }
            ],
            time: '15 days',

            image: cashflow
        },

        {
            id: 2,
            title: 'AnimationLib: A 3D marketplace',

            description:
                'Animation Marketplace is a platform where creators can buy, sell, and share high-quality animation assets, templates, and motion graphics. It connects animators with designers and developers, enabling faster project workflows.',

            techstack: [
                {
                    logo: <FaReact className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
                    name: 'React'
                },
                {
                    logo: <RiTailwindCssFill className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
                    name: 'Tailwind'
                },
                {
                    logo: <IoLogoJavascript className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
                    name: 'JavaScript'
                },
                {
                    logo: <FaNodeJs className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
                    name: 'Node Js'
                },
                {
                    logo: <SiExpress className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
                    name: 'Express Js'
                },
                {
                    logo: <SiMongodb className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
                    name: 'MongoDb'
                }
            ],
            time: 'continuing...',

            image: animation
        },

        {
            id: 3,
            title: 'NetFlix: A cloned version',

            description:
                'Netflix Clone is a streaming UI built using HTML, CSS, and JavaScript. It replicates the core layout of Netflix with movie sections, banners, and responsive design.',

            techstack: [
                {
                    logo: <FaHtml5 className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
                    name: 'Html5'
                },
                {
                    logo: <FaCss3Alt className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
                    name: 'Css Styling'
                },
                {
                    logo: <IoLogoJavascript className='lg:w-7 lg:h-7 md:w-5 md:h-5 w-4 h-4' />,
                    name: 'JavaScript'
                },
            ],
            time: '5 days',

            image: netflix
        }
    ];

    return (
        <div className="flex flex-col items-center relative bg-gray-300                                     px-0 md:px-5 z-20">
            {projectPreview.map((items) => {
                const { id, title, description, techstack, image, time } = items;

                return (
                    <div
                        key={id}
                        className="w-full lg:w-[90vw] h-auto mb-5 sm:mb-8 md:mb-0 sticky top-4 md:top-0 px-2 sm:px-4 py-3 sm:py-5 md:py-10 bg-transparent"
                    >

                        <div
                            className={`hidden md:flex gap-5 w-fit max-w-[30vw] bg-slate-900 justify-center items-center rounded-lg transition-all duration-700 px-5 py-3 border-0 sm:border border-gray-300
                            ${hoveredId === id ? "ml-[65%] opacity-100" : "ml-0 opacity-0"}`}
                        >
                            <p className="text-white flex gap-2"><span><StickyNote /></span>0{id}/3</p>
                            <p className="text-white">{title}</p>
                        </div>

                        <div
                            className={`flex flex-col md:flex-row justify-between gap-4 sm:gap-6     md:gap-8 mt-3 sm:mt-4 md:mt-5
                             px-4 sm:px-6 md:px-10 py-5 sm:py-6 md:py-10
                            bg-slate-900 items-center border-2 border-gray-300 rounded-lg overflow-hidden
                            transition-all duration-700
                                ${hoveredId === id
                                    ? "md:scale-[1.03] md:shadow-2xl md:shadow-black/60 md:transform-[perspective(1000px)_rotateX(-3deg)]"
                                    : "scale-100"
                                }`}
                            style={{ transformStyle: "preserve-3d" }}
                            onMouseEnter={() => setHoveredId(id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >

                            <div className="w-full md:w-1/2 lg:w-[40vw] h-48 sm:h-64 md:h-72 lg:h-[25vw] rounded-lg overflow-hidden shrink-0">
                                <img
                                    src={image}
                                    loading="lazy"
                                    className="rounded-lg object-cover w-full h-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-700 border-2 border-gray-800"
                                />
                            </div>

                            <div className="w-full flex flex-col items-center">

                                <div className="text-white w-full md:mt-10">
                                    <SplitText
                                        text={title}
                                        className="text-base sm:text-lg md:text-2xl w-full font-semibold"
                                        delay={500} duration={1.9} ease="power3.out"
                                        splitType="words"
                                        from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }}
                                        threshold={0.1} rootMargin="-100px" showCallback={false}
                                    />
                                </div>

                                <div className="hidden sm:block h-px w-full bg-gray-600 rounded-lg mt-3" />

                                <div className="hidden sm:block w-full mt-4 md:mt-5 text-gray-400">
                                    <SplitText
                                        text={description}
                                        className="text-sm md:text-base font-semibold"
                                        delay={10} duration={1.9} ease="power3.out"
                                        splitType="words"
                                        from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }}
                                        threshold={0.1} rootMargin="-100px" showCallback={false}
                                    />
                                </div>

                                <div className="grid grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-3 mt-3 sm:mt-5 w-full">
                                    {techstack.map((stacks, index) => (
                                        <button
                                            key={index}
                                            className="flex items-center justify-center gap-1.5 py-2 rounded-md bg-white/5 backdrop-blur-md text-white text-[8px] sm:text-xs lg:text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-[1.03] active:scale-[0.97]"
                                        >
                                            <span>{stacks.logo}</span>
                                            {stacks.name}
                                        </button>
                                    ))}
                                </div>

                                <div className="hidden sm:block h-px w-full bg-gray-800 rounded-lg mt-5" />


                                <div className="mt-4 sm:mt-6 md:mt-10 flex flex-col xs:flex-row justify-between gap-3 md:gap-1 w-full">
                                    <div className="hidden sm:flex gap-2 items-center">
                                        <p className="text-white flex gap-2 items-center text-sm sm:text-base">
                                            <span><Timer className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /></span>
                                            Time Period
                                            <span className="text-cyan-500">{time}</span>
                                        </p>
                                    </div>

                                    <div className="flex gap-1">
                                        <button className="preview-btn px-2 sm:px-5 py-2.5 bg-transparent hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full xs:w-auto">
                                            <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                                                <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                                                GitHub
                                            </span>
                                        </button>

                                        <button className="preview-btn px-2 sm:px-5 py-2.5 bg-transparent hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full xs:w-auto">
                                            <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                                                <SquareArrowOutUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                                Preview
                                            </span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default ProjectCard