import { div } from 'motion/react-client';
import React, { useState } from 'react'
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import python from '../assets/python.svg'
import c from '../assets/c.svg'
import java from '../assets/java.svg'
import js from '../assets/js.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'

const TechStackPage = () => {

    const [stackId, setStackId] = useState(1);

    const fieldOptions = [
        {
            id: 1,
            title: 'All',
            languages: [
                {
                    logo: <FaNodeJs />,
                    name: 'Node Js'
                },
                {
                    logo: <SiExpress />,
                    name: 'Express Js'
                },
                {
                    logo: <SiMongodb />,
                    name: 'MongoDb'
                }
            ]
        },
        {
            id: 2,
            title: 'Languages',
            languages: [
                {
                    logo: js,
                    name: 'Java Script'
                },
                {
                    logo: python,
                    name: 'Python'
                },
                {
                    logo: c,
                    name: 'C'
                },
                {
                    logo: java,
                    name: 'Java'
                },
                {
                    logo: html,
                    name: 'Html5'
                },
                {
                    logo: css,
                    name: 'Css'
                }
            ]
        },
        {
            id: 3,
            title: 'Frameworks',
            languages: [
                {
                    logo: <FaNodeJs />,
                    name: 'Node Js'
                },
                {
                    logo: <SiExpress />,
                    name: 'Express Js'
                },
                {
                    logo: <SiMongodb />,
                    name: 'MongoDb'
                }
            ]
        },
        {
            id: 4,
            title: 'Libraries',
            languages: [
                {
                    logo: <FaNodeJs />,
                    name: 'Node Js'
                },
                {
                    logo: <SiExpress />,
                    name: 'Express Js'
                },
                {
                    logo: <SiMongodb />,
                    name: 'MongoDb'
                }
            ]
        },
        {
            id: 6,
            title: 'Others',
            languages: [
                {
                    logo: <FaNodeJs />,
                    name: 'Node Js'
                },
                {
                    logo: <SiExpress />,
                    name: 'Express Js'
                },
                {
                    logo: <SiMongodb />,
                    name: 'MongoDb'
                }
            ]
        }
    ];

    return (
        <section className="min-h-screen w-full flex items-center bg-yellow-500 px-6 py-10 absolute rounded-t-lg mt-10">
            <div className="w-full h-[40vw] px-10 py-10">
                <div className='flex gap-2 items-center'>
                    <h1 className='text-5xl font-bold bg-slate-800 text-yellow-500'>Tech Stack</h1>
                    <span className='text-3xl font-semibold'>i use</span>

                </div>
                <div className='w-full h-[30vw] flex gap-5 mt-2'>
                    <div className='w-1/2 h-full flex gap-5 flex-col'>
                        <div className='h-3/4 w-full bg-gray-700 rounded-md px-5 py-5'>

                            <div className='h-1/3 grid grid-cols-4 gap-1'>
                                {
                                    fieldOptions.map(items => {

                                        const { title, id } = items;

                                        return (
                                            <button
                                                key={id}
                                                className="preview-btn bg-transparent text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                                onClick={() => setStackId(id)}
                                            >
                                                <span className="flex items-center text-white justify-center gap-2">
                                                    {title}
                                                </span>
                                            </button>
                                        )
                                    })
                                }

                            </div>

                        </div>
                        <div className='h-1/4 w-full bg-zinc-600 rounded-md'>

                        </div>

                    </div>
                    <div className='w-1/2 h-full bg-slate-800 rounded-md px-5 py-5'>
                        <h1 className='text-white font-semibold text-2xl'>Languages</h1>
                        <div className='h-px w-full bg-gray-600 rounded-lg mt-5' />

                        <div className='px-5 py-5 w-full text-white grid grid-cols-5'>

                            {
                                fieldOptions.map(items => {
                                    const { languages, id } = items;

                                    if (stackId === id) {
                                        return languages.map((lang, index) => (
                                            <div
                                                key={index}
                                                className='flex flex-col justify-center items-center px-2 py-1 mt-3'
                                            >
                                                <div className='px-3 py-3 bg-gray-700 rounded-lg'>
                                                   <img src={lang.logo}/>
                                                </div>

                                                <div className='text-white'>
                                                    {lang.name}
                                                </div>
                                            </div>
                                        ));
                                    }
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStackPage