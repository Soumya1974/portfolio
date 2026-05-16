import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react';
import SplitText from './SplitText';
import { VscGithubProject } from 'react-icons/vsc';

const HeroSection = () => {

    const [isId, setId] = useState(0);

    const projectData = [
        {
            id: 1,
            title: 'Animation library',
        },
        {
            id: 2,
            title: 'Cashflow eTracker',
        },
        {
            id: 3,
            title: 'Netflix clone',
        },
        {
            id: 4,
            title: 'Many more to come...',
        }
    ];

    return (
        <div className='sticky top-0 bg-white'>
            <div className='flex flex-col md:flex-row w-full px-5 sm:px-8 md:px-17 items-center gap-6 sm:gap-10 md:gap-20 justify-between md:mt-30 mt-20'>

                <div className='mt-12 sm:mt-16 md:mt-20 w-full'>
                    <SplitText
                        text="Hello, I'm Soumya."
                        className="text-6xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold w-full"
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
                    <p className='text-sm sm:text-base md:text-[18px] lg:text-[20px] font-semibold text-gray-500 mt-4 sm:mt-6 md:mt-7 w-full md:w-[35vw]'>
                        I build websites with dedication and attention to detail. Available for work.
                    </p>
                </div>

                <div className='w-full md:w-auto mx-0 md:mx-10 mt-6 sm:mt-10 md:mt-0 lg:mt-30 pb-6 md:pb-0'>
                    <h1 className='flex gap-2 items-center font-semibold text-lg sm:text-xl md:text-[25px] text-black'>
                        <span><VscGithubProject /></span>
                        Projects i've built
                    </h1>

                    <div className='flex gap-10 items-center mt-5 sm:mt-7'>
                        <div className='flex justify-center text-sm sm:text-base md:text-[18px] lg:text-[20px] gap-4 sm:gap-5 flex-col font-semibold text-black w-full'>

                            {projectData.map((items) => {
                                const { id, title } = items;
                                return (
                                    <div
                                        key={id}
                                        onMouseEnter={() => setId(id)}
                                        onMouseLeave={() => setId(0)}
                                        className='hover:cursor-pointer'
                                    >
                                        <p className='flex text-gray-500 hover:text-black transition-all duration-700 hover:scale-[1.02] items-center justify-between gap-4'>
                                            {title}
                                            <span
                                                className={`text-gray-500 transition-all duration-700 shrink-0 ${isId === id ? 'opacity-100 mr-0 rotate-0' : 'opacity-0 mr-5 rotate-90'
                                                    }`}
                                            >
                                                <ArrowRight />
                                            </span>
                                        </p>
                                        <div className='h-px w-full md:w-[30vw] bg-zinc-300 rounded-lg mt-2 sm:mt-3'>
                                            <div
                                                className={`h-0.5 bg-gray-500 rounded-lg transition-all duration-700 ${isId === id ? 'w-full opacity-100' : 'w-0 opacity-0'
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden mt-8 sm:mt-10 md:mt-16 w-full bg-gray-200 font-semibold text-black">
                <div className="animate-scroll flex w-max items-center h-10 sm:h-12 md:h-[5vw] gap-6 sm:gap-10 text-xs sm:text-sm md:text-base px-4">
                    {[...Array(4)].flatMap(() => [
                        <span key={Math.random()}>3D artist</span>,
                        <span key={Math.random()}>Blender Animator</span>,
                        <span key={Math.random()}>1yr+ Experience</span>,
                        <span key={Math.random()}>Open for remote roles</span>,
                        <span key={Math.random()}>Based in Bhubaneswar, Odisha, India</span>,
                    ])}
                </div>
            </div>
        </div>


    )
}

export default HeroSection