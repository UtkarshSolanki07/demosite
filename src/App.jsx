import React from 'react'
import Navbar from './components/Navbar'
import NavbarBanner from './components/NavbarBanner'
import Hero from './components/Hero/Hero'
import NumberCounter from './components/NumberCounter/NumberCounter'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Img1 from './assets/imgban.jpg'
import Img2 from './assets/imgban1.jpg'
import Banner from './components/Banner/Banner'
import SubjectCard from './components/SubjectCard/SubjectCard'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
const BannerData={
  image:Img1,
  tag:"Customize Your Learning",
  title:"Find the Perfect Tutor for You",
  subtitle:"Our scheduling system allows you to choose the time and place that works best for you. Whether you prefer in-person or online sessions, we have options to fit your needs. With our flexible options, you can learn at your own pace and convenience. Our experienced tutors are dedicated to helping you achieve your academic goals",
  link:"/#",
};

const BannerData2={
  image:Img2,
  tag:"Customize Your Schedule",
  title:"Talented and Qualified Tutors to Serve You for Help",
  subtitle:"Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.",
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
