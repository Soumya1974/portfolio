import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react';
import SplitText from './SplitText';

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
        <div className='sticky top-0 bg-gray-100'>
            <div className='flex flex-col md:flex-row w-full px-5 md:px-17 items-center gap-10 md:gap-20 justify-between'>
                <div className='mt-20'>

                    <SplitText
                        text="Hello, I'm Soumya."
                        className="text-5xl sm:text-7xl md:text-9xl font-semibold w-full md:w-full"
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

                    <p className='text-[16px] md:text-[20px] font-semibold text-gray-500 mt-7 w-full md:w-[35vw]'>I build websites with dedication and attention to detail. Available for work.</p>
                </div>
                <div className='relative mx-0 md:mx-10 w-full md:w-auto sm:mt-15 lg:mt-30'>
                    
                    <h1 className='font-semibold text-[20px] md:text-[25px] text-black'>Projects i've built</h1>
                    <div className='flex gap-10 items-center mt-7'>

                        {/* <div className='w-px bg-gray-300 h-58'></div> */}

                        <div className='flex justify-center text-[16px] md:text-[20px] gap-5 flex-col font-semibold text-black w-full'>

                            {projectData.map((items) => {
                                const { id, title } = items;
                                return (
                                    < div
                                        key={id}
                                        onMouseEnter={() => setId(id)}
                                        onMouseLeave={() => setId(0)}
                                        className='hover:cursor-pointer'
                                    >
                                        <p
                                            className='flex text-gray-500 hover:text-black transition-all duration-700 hover:scale-[1.02] items-center justify-between'
                                        >
                                            {title}
                                            <span
                                                className={`text-gray-500 transition-all duration-700 ${isId === id ? `opacity-100 mr-0 rotate-0` : `opacity-0 mr-5 rotate-90`
                                                    }`}
                                            >
                                                <ArrowRight />
                                            </span>
                                        </p>
                                        <div className='h-px w-full md:w-[30vw] bg-zinc-300 rounded-lg mt-3'>
                                            <div className={`h-0.5 bg-gray-500 rounded-lg transition-all duration-700 ${isId === id ? `w-full md:w-[30vw] opacity-100` : `w-0 opacity-0`
                                                }`}>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>

                </div>
            </div >
            <div className="overflow-hidden mt-10 md:mt-19 w-full bg-gray-200 font-semibold text-black">
                <div className="animate-scroll flex w-max items-center h-[10vw] md:h-[5vw] gap-10 text-sm md:text-base">
                    <span>3D artist</span>
                    <span>Blender Animator</span>
                    <span>1yr+ Experience</span>
                    <span>Open for remote roles</span>
                    <span>Based in Bhubaneswar, Odisha, India</span>

                    <span>3D artist</span>
                    <span>Blender Animator</span>
                    <span>1yr+ Experience</span>
                    <span>Open for remote roles</span>
                    <span>Based in Bhubaneswar, Odisha, India</span>

                    <span>3D artist</span>
                    <span>Blender Animator</span>
                    <span>1yr+ Experience</span>
                    <span>Open for remote roles</span>
                    <span>Based in Bhubaneswar, Odisha, India</span>

                    <span>3D artist</span>
                    <span>Blender Animator</span>
                    <span>1yr+ Experience</span>
                    <span>Open for remote roles</span>
                    <span>Based in Bhubaneswar, Odisha, India</span>
                </div>
            </div>
        </div>


    )
}

export default HeroSection