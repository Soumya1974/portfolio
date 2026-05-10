import React from 'react'
import HeroSection from './HeroSection'
import ProjectCard from './ProjectCard'
import TechStackPage from './TechStackPage'
import About from './About'

const Dashboard = () => {
  return (
    <div>
        <>
            <HeroSection />
        </>
        <>
            <ProjectCard />
        </>
        <>
          <TechStackPage />
        </>
        <>
          <About />
        </>
    </div>
  )
}

export default Dashboard