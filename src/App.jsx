import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Hero from './components/Hero/Hero.jsx'
import Banner from './components/Banner/Banner.jsx'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs.jsx'
import NumberCounter from './components/NumberCounter/NumberCounter.jsx'
import SubjectCard from './components/SubjectCard/SubjectCard.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Profile from './pages/Profile.jsx'
import Pricing from './pages/Pricing.jsx'
import Img1 from './assets/alex-wong-l5Tzv1alcps-unsplash.jpg'
import Img2 from './assets/josh-olalde-X1P1_EDNnok-unsplash.jpg'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'

const BannerData={
  image:Img1,
  tag:"Building Your Future",
  title:"Reliable Construction Services You Can Trust",
  subtitle:"We specialize in delivering high-quality construction projects on time and within budget. Our experienced team is committed to excellence and customer satisfaction.",
  link:"/#",
};

const BannerData2={
  image:Img2,
  tag:"Customized Solutions",
  title:"Tailored Construction Plans to Meet Your Needs",
  subtitle:"From residential to commercial projects, we provide personalized construction solutions designed to fit your unique requirements and vision.",
  link:"/#",
};
const HomePage = () => {
  return (
    <>
      <Hero />
      <NumberCounter />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
      <WhyChooseUs />
      <SubjectCard />
      <Testimonials />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />}/>
          <Route path="/pricing" element ={<Pricing />}  />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
