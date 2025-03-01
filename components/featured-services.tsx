"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Weddings",
    description: "Create your dream wedding in our picturesque farm setting with indoor and outdoor options.",
    image: "/assets/wed2.png",
    link: "/services#weddings",
  },
  {
    id: 2,
    title: "Corporate Events",
    description: "Host memorable team-building activities, retreats, and meetings in our versatile spaces.",
    image: "/assets/co op.png",
    link: "/services#corporate",
  },
  {
    id: 3,
    title: "Private Parties",
    description: "Celebrate birthdays, anniversaries, and special occasions with friends and family.",
    image: "/assets/chan2.png",
    link: "/services#parties",
  },
]

export default function FeaturedServices() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the range of events and celebrations we host at Chandra Farms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

