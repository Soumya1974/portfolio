import React from 'react'
import HeroSection from './HeroSection'
import ProjectCard from './ProjectCard'
import TechStackPage from './TechStackPage'

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
    </div>
  )
}

export default Dashboard