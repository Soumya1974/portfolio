import React from 'react'
import HeroSection from './HeroSection'
import ProjectCard from './ProjectCard'
import TechStackPage from './TechStackPage'
import About from './About'
import EducationTimeline from './EducationTimeline'
import Navbar from './Navbar'

const Dashboard = () => {
  return (
    <div className="relative">

      <Navbar />

      <div className="relative">

        <HeroSection />

        <div className="relative z-10">
          <ProjectCard />
        </div>

        <div className="relative z-20">
          <TechStackPage />
        </div>

        <About />

        <EducationTimeline />

      </div>

    </div>
  )
}

export default Dashboard