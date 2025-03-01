"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael",
    role: "Wedding Couple",
    content:
      "Our wedding at Chandra Farms was absolutely magical. The staff went above and beyond to make our day perfect, and the venue itself is breathtaking. We couldn't have asked for a better place to start our lives together.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Corporate Event Planner",
    content:
      "We hosted our annual company retreat at Chandra Farms and it was a huge success. The facilities were perfect for our team-building activities, and the peaceful environment helped everyone disconnect and focus on collaboration.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Birthday Celebrant",
    content:
      "I celebrated my 30th birthday at Chandra Farms and it was unforgettable. The outdoor party area was perfect for my guests, and the farm setting created such a unique atmosphere that everyone loved.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from couples, event planners, and guests who have experienced Chandra Farms
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={testimonials[activeIndex].image || "/placeholder.svg"}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-primary mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 text-lg italic">{testimonials[activeIndex].content}</p>
                <div>
                  <h4 className="text-xl font-bold">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-500">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-primary" : "bg-gray-300"}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

