import React from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'

const TestimonialsData = [
  {
    id: 1,
    name: "Meera Kapoor",
    role: "Homeowner, Pune",
    text: "EzyBuilds handled the entire construction of our 3BHK villa. Timely delivery, great craftsmanship, and professional communication throughout!",
    img: "https://picsum.photos/id/1011/200/200", // house exterior
    delay: 0.2,
  },
  {
    id: 2,
    name: "Rajesh Singh",
    role: "Interior Design Client",
    text: "They completely transformed our living space with stunning interiors. The attention to detail and modern aesthetic was beyond expectations.",
    img: "https://picsum.photos/id/1005/200/200", // room
    delay: 0.4,
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Apartment Owner, Delhi",
    text: "We had major plumbing and electrical issues. EzyBuilds fixed everything in just 2 days. Very courteous team and value for money!",
    img: "https://picsum.photos/id/1025/200/200", // close-up hand tools
    delay: 0.6,
  },
  {
    id: 4,
    name: "Vikram Joshi",
    role: "Renovation Client",
    text: "Got my old house remodeled. The renovation was smooth and the team respected our time and space. Highly recommended!",
    img: "https://picsum.photos/id/1035/200/200", // building facade
    delay: 0.8,
  },
  {
    id: 5,
    name: "Pooja Nair",
    role: "Kitchen Redesign Client",
    text: "From modular kitchen to lighting, EzyBuilds gave our home a fresh, modern look. They were flexible with designs and materials too.",
    img: "https://picsum.photos/id/1062/200/200", // kitchen
    delay: 1.0,
  }
]

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  }

  return (
    <div className="bg-white w-full py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-orange-600 text-sm font-bold uppercase tracking-widest">Client Testimonials</h2>
        <p className="text-3xl md:text-4xl font-semibold mt-2 text-gray-800">What Our Customers Say About EzyBuilds</p>
      </div>
      <Slider {...settings}>
        {TestimonialsData.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: item.delay, duration: 0.6, ease: "easeOut" }}
          >
            <div className="mx-4 bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
              {/* Top Section */}
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-400"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              {/* Bottom Section */}
              <div className="text-left">
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                <div className="mt-3 text-yellow-500 text-lg">★★★★★</div>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  )
}

export default Testimonials
