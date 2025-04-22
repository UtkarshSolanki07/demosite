import React from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'

const TestimonialsData = [
  {
    id: 1,
    name: "Jane Smith",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quo quis velit vitae quam...",
    img: "https://picsum.photos/101/101",
    delay: 0.2
  },
  {
    id: 2,
    name: "John Doe",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    img: "https://picsum.photos/102/102",
    delay: 0.4,
  },
  {
    id: 3,
    name: "Alice Johnson",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum...",
    img: "https://picsum.photos/103/103",
    delay: 0.6
  },
  {
    id: 4,
    name: "Bob Brown",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit...",
    img: "https://picsum.photos/104/104",
    delay: 0.8
  },
  {
    id: 5,
    name: "Charlie Green",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur...",
    img: "https://picsum.photos/105/105",
    delay: 1.0
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
        <h2 className="text-orange-600 text-sm font-bold uppercase tracking-widest">Our Testimonials</h2>
        <p className="text-3xl md:text-4xl font-semibold mt-2 text-gray-800">What Our Students Say About Us</p>
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
                  <p className="text-sm text-gray-500">Student</p>
                </div>
              </div>
              {/* Bottom Section */}
              <div className="text-left">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">{item.text}</p>
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
