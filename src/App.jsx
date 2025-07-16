import React from 'react'
import Navbar from './components/Navbar'
import NavbarBanner from './components/NavbarBanner'
import Hero from './components/Hero/Hero'
import NumberCounter from './components/NumberCounter/NumberCounter'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Img1 from './assets/alex-wong-l5Tzv1alcps-unsplash.jpg'
import Img2 from './assets/josh-olalde-X1P1_EDNnok-unsplash.jpg'
import Banner from './components/Banner/Banner'
import SubjectCard from './components/SubjectCard/SubjectCard'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
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
const App = () => {
  return (
    <div>
      <main className='overflow-x-hidden'>
      <Navbar/>
      <NavbarBanner />
      <Hero/>
      <NumberCounter/>
      <WhyChooseUs/>
      <Banner {...BannerData}/>
      <Banner {...BannerData2} reverse={true}/>
      <SubjectCard/>
      <Testimonials />
      <Footer />
      </main>
    </div>
  )
}

export default App
