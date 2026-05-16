import React from 'react'
import HeroSection from './HeroSection'
import ProjectCard from './ProjectCard'
import TechStackPage from './TechStackPage'
import About from './About'
import EducationTimeline from './EducationTimeline'
import Navbar from './Navbar'
import Footer from './Footer'
import AboutModal from './AboutModal'

const Dashboard = () => {
  return (
    <div className="relative">

      <Navbar />

      <div className="relative">

        <AboutModal />
        <HeroSection />

        <div id='work' className="relative z-10">
          <ProjectCard />
        </div>

        <div id='services' className="relative z-20">
          <TechStackPage />
        </div>

        <div id='about'>
          <About />
        </div>

        <EducationTimeline />

        <div id="footer">
          <Footer />
        </div>

      </div>

    </div>
  )
}

export default Dashboard