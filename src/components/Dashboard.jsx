import React, { useState } from 'react'
import HeroSection from './HeroSection'
import ProjectCard from './ProjectCard'
import TechStackPage from './TechStackPage'
import About from './About'
import EducationTimeline from './EducationTimeline'
import Navbar from './Navbar'
import Footer from './Footer'
import AboutModal from './AboutModal'
import ProjectModal from './ProjectModal'

const Dashboard = () => {

  const [isOpen, setOpen] = useState(false);
  const [wipOpen, setWipOpen] = useState(false);

  return (
    <div className="relative">

      <div id='hero'>
        <Navbar onConfirm={() => setOpen(true)}/>
      </div>

      <div className="relative">

        {
          isOpen && (
            <AboutModal onCancel={() => setOpen(false)} isOpen={isOpen}/>
          )
        }
        <HeroSection />

        <div id='work' className="relative z-10">
          <ProjectCard onButtonClick={() => setWipOpen(true)} />
          <ProjectModal isOpen={wipOpen} onClose={() => setWipOpen(false)} />
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