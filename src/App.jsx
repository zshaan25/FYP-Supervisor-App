import React from 'react'
import Navbar from './components/layouts/Navbar'
import CallToAction from './components/views/home/CallToAction'
import Footer from './components/layouts/Footer'
import HeroSection from './components/views/home/HeroSection'
import HowItWorks from './components/views/home/HowItWorks'
import SupervisorCard from './components/views/home/SupervisorCard'
import FeedbackCard from './components/views/home/FeedbackCard'
import CardLayout from './components/layouts/CardLayout'
import SectionWrapper from './components/layouts/SectionWrapper'

const App = () => {
  return (
    <div className="p-6">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <SupervisorCard/>
      <CardLayout/>
      <CallToAction />
      <SectionWrapper title="Meet Our Supervisors">
        <CardLayout>
          <SupervisorCard name="Dr. Sarah Khan" department="CS" specialty="AI" image="/images/sarah.jpg" />
          <SupervisorCard name="Prof. Amir Ali" department="IT" specialty="Blockchain" image="/images/amir.jpg" />
        </CardLayout>
      </SectionWrapper>

      <SectionWrapper title="Student Feedback">
        <FeedbackCard studentName="Ali Raza" feedback="Amazing mentorship!" year="2023" />
        <FeedbackCard studentName="Zoya Shah" feedback="Helped me land my FYP!" year="2024" />
      </SectionWrapper>
      
      <Footer />
    </div>
  );
}

export default App