import React, { useState } from 'react'
import cashflow from '../assets/cashflow.png'
import animation from '../assets/animation.png'
import netflix from '../assets/netflix.png'
import './ProjectCard.css'
import SplitText from './SplitText'
import { FolderGit2, SquareArrowOutUpRight } from 'lucide-react'

const ProjectCard = () => {

    const [hoveredId, setHoveredId] = useState(null);

    const projectPreview = [
        {
            id: 1,
            title: 'CashFlow: A personal etracker',

            description:
                'CashFlow is a personal finance tracking web application designed to help users manage their income, expenses, and savings in an organized way. It provides a clean dashboard that visualizes financial data, making it easier to understand spending habits and cash flow trends over time.',

            techstack: [
                'React',
                'Tailwind CSS',
                'JavaScript',
                'Recharts',
                'Redux',
                'React Hot Toast'
            ],

            image: cashflow
        },

        {
            id: 2,
            title: 'AnimationLib: A 3D marketplace',

            description:
                'Animation Marketplace is a platform where creators can buy, sell, and share high-quality animation assets, templates, and motion graphics. It connects animators with designers and developers, enabling faster project workflows.',

            techstack: [
                'React',
                'Tailwind CSS',
                'JavaScript',
                'Express JS',
                'Node JS',
                'MongoDB'
            ],

            image: animation
        },

        {
            id: 3,
            title: 'NetFlix: A cloned version',

            description:
                'Netflix Clone is a streaming UI built using HTML, CSS, and JavaScript. It replicates the core layout of Netflix with movie sections, banners, and responsive design.',

            techstack: [
                'HTML',
                'CSS',
                'JavaScript'
            ],

            image: netflix
        }
    ];

    return (

        <div className='flex flex-col items-center relative bg-gray-300 px-0 md:px-5'>

            {projectPreview.map((items) => {

                const { id, title, description, techstack, image } = items;

                return (

                    <div
                        key={id}
                        className='md:w-[90vw] w-full md:min-h-screen h-[100vw] mb-15 md:mb-0 sticky top-0 px-2  py-3 md:py-10 bg-transparent'
                    >

                        <div
                            className={`
                            hidden md:flex
                            gap-5
                            w-fit
                            max-w-[30vw]
                            bg-slate-900
                            justify-center
                            items-center
                            rounded-lg
                            transition-all duration-700
                            px-5 py-3

                            ${hoveredId === id
                                    ? 'ml-[65%] opacity-100'
                                    : 'ml-0 opacity-0'
                            }`}
                        >
                            <p className='text-white'>0{id}/3</p>
                            <p className='text-white'>{title}</p>
                        </div>

                        <div
                            className={`
                            flex flex-col md:flex-row
                            sticky top-0
                            justify-between
                            gap-5 md:gap-8
                            mt-5
                            px-4 sm:px-6 md:px-10
                            py-5 md:py-10
                            bg-slate-900
                            items-center
                            border-2 border-gray-300
                            rounded-lg
                            overflow-hidden
                            transition-all
                            duration-700

                            ${hoveredId === id
                                    ? 'md:scale-[1.03] md:shadow-2xl md:shadow-black/60 md:transform-[perspective(1000px)_rotateX(-3deg)]'
                                    : 'scale-100'
                            }`}
                            style={{ transformStyle: 'preserve-3d' }}
                            onMouseEnter={() => setHoveredId(id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className='w-full md:w-full h-55 sm:h-75 md:h-[25vw] rounded-lg overflow-hidden'>

                                <img
                                    src={image}
                                    loading='lazy'
                                    className='rounded-lg object-cover w-full h-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-700'
                                    alt={title}
                                />

                            </div>

                            <div className='w-full flex flex-col items-center'>

                                <div className='text-white md:mt-10'>

                                    <SplitText
                                        text={title}
                                        className="text-[14px] md:text-2xl w-full md:w-[25vw] font-semibold text-center"
                                        delay={500}
                                        duration={1.9}
                                        ease="power3.out"
                                        splitType="words"
                                        from={{ opacity: 0, y: 40 }}
                                        to={{ opacity: 1, y: 0 }}
                                        threshold={0.1}
                                        rootMargin="-100px"
                                        showCallback={false}
                                    />

                                </div>

                                <div className='hidden md:block w-full md:w-[37vw] mt-6 md:mt-10 text-gray-400'>

                                    <SplitText
                                        text={description}
                                        className="text-sm md:text-[16px] font-semibold text-center"
                                        delay={10}
                                        duration={1.9}
                                        ease="power3.out"
                                        splitType="words"
                                        from={{ opacity: 0, y: 40 }}
                                        to={{ opacity: 1, y: 0 }}
                                        threshold={0.1}
                                        rootMargin="-100px"
                                        showCallback={false}
                                    />

                                </div>

                                <div className='hidden md:grid grid-cols-2 gap-4 mt-5 w-full'>

                                    {techstack.map((stacks, index) => {

                                        return (

                                            <button
                                                key={index}
                                                className='group flex items-center justify-center gap-2 px-1 py-2 rounded-md border border-white/20 bg-white/5 backdrop-blur-md text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-[1.03] active:scale-[0.97] text-sm'
                                            >
                                                {stacks}
                                            </button>

                                        )
                                    })}

                                </div>


                                <div className='mt-4 md:mt-10 flex flex-col sm:flex-row justify-center gap-4 md:gap-10 w-full'>

                                    <button className='preview-btn px-4 sm:px-6 py-3 bg-transparent hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full sm:w-auto'>

                                        <span className='flex items-center justify-center gap-2'>
                                            <FolderGit2 size={18} />
                                            GitHub Repo
                                        </span>

                                    </button>

                                    <button className='preview-btn px-4 sm:px-6 py-3 bg-transparent hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full sm:w-auto'>

                                        <span className='flex items-center justify-center gap-2'>
                                            <SquareArrowOutUpRight size={18} />
                                            Live Preview
                                        </span>

                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default ProjectCard