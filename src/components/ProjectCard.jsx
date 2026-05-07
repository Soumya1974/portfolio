import React from 'react'
import cashflow from '../assets/cashflow.png'
import animation from '../assets/animation.png'
import netflix from '../assets/netflix.png'
import './ProjectCard.css'
import SplitText from './SplitText'
import { FolderGit2, SquareArrowOutUpRight } from 'lucide-react'

const ProjectCard = () => {

    const projectPreview = [
        {
            id: 1,
            title: 'CashFlow: A personal etracker',
            description: <>
                <p>CashFlow is a personal finance tracking web application designed to help users manage their income, expenses, and savings in an organized way.</p>
                <p>It provides a clean dashboard that visualizes financial data, making it easier to understand spending habits and cash flow trends over time.</p>
            </>,
            techstack: ['react', 'tailwind css', 'Javascript', 'Recharts', 'Redux', 'React hot toast'],
            image: cashflow
        },
        {
            id: 2,
            title: 'AnimationLib: A 3D marketplace',
            description: <div>
                <p>Animation Marketplace is a platform where creators can buy, sell, and share high-quality animation assets, templates, and motion graphics.</p>
                <p>
                    It connects animators with designers and developers, enabling faster project workflows. The platform focuses on creativity, accessibility, and efficiency, helping users find ready-to-use animation resources for web.
                </p>
            </div>,
            techstack: ['react', 'tailwind css', 'Javascript', 'Express Js', 'Node js', 'Mongo Db'],
            image: animation
        },
        {
            id: 3,
            title: 'NetFlix: A cloned version',
            description: <div>
                <p>Netflix Clone is a simple streaming UI built using HTML, CSS, and JavaScript. It replicates the core layout of Netflix with movie sections, banners, and responsive design.</p>
                <p>
                    The project demonstrates frontend fundamentals like DOM manipulation, styling, and basic interactivity to create a smooth and visually engaging user interface.
                </p>
            </div>,
            techstack: ['Html', 'Css', 'Javascript'],
            image: netflix
        }
    ]

    return (
        <div className='flex flex-col gap-40 sticky mt-10'>

            {projectPreview.map((items) => {

                const { id, title, description, techstack, image } = items;

                return (
                    <div key={id} className={`w-full h-screen sticky top-0 px-10 py-10 bg-transparent`}>
                        <div className='flex gap-5 w-[25vw] bg-slate-900 justify-center items-center rounded-lg'>
                            <p className='text-white mt-2'>0{id}/3</p>
                            <p className='text-white mt-2'>{title}</p>
                        </div>
                        <div className='flex justify-between gap-20 mt-10 px-10 py-10 bg-slate-900 items-center  transition-all duration-200 rounded-lg'>

                            <div className='w-[50vw] h-[25vw] rounded-lg '>

                                <img src={image} className='rounded-lg object-cover w-full h-full' />

                            </div>

                            <div className=''>

                                <div className='text-white mt-10'>
                                    <SplitText
                                        text={title}
                                        className="text-2xl w-[25vw]  font-semibold text-center"
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

                                <div className='w-[37vw] mt-10 text-gray-500'>
                                    <SplitText
                                        text={description}
                                        className="text-[16px] font-semibold text-center"
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

                                <div className='grid md:grid-cols-3 gap-4 mt-5'>
                                    {techstack.map((stacks) => {
                                        return (
                                            <button className="group flex items-center justify-center  gap-2 px-3 py-1.5 rounded-md  border border-white/20 bg-white/5 backdrop-blur-md text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-[1.03] active:scale-[0.97]">
                                                {stacks}
                                            </button>
                                        )
                                    })}
                                </div>

                                <div className='mt-10 flex justify-center gap-10'>
                                    <button className='preview-btn px-6 py-3 bg-transparent hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]'>
                                        <span className='flex items-center gap-2'>
                                            <FolderGit2 /> GitHub Repo
                                        </span>
                                    </button>

                                    <button className='preview-btn px-6 py-3 bg-transparent hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]'>
                                        <span className='flex items-center gap-2'>
                                            <SquareArrowOutUpRight /> Live Preview
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