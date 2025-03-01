"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    id: "weddings",
    title: "Weddings",
    description:
      "Make your special day unforgettable with our picturesque wedding venue. We offer both indoor and outdoor ceremony spaces, reception areas, and comprehensive wedding packages that can be customized to your needs.",
    features: [
      "Scenic outdoor ceremony spaces",
      "Elegant indoor reception hall",
      "Bridal suite and groom's room",
      "Customizable wedding packages",
      "Experienced event coordinators",
      "Preferred vendor list",
    ],
    image: "/assets/wed2.png",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description:
      "Host productive and memorable corporate events in our versatile spaces. From team-building activities to formal meetings and retreats, our facilities provide the perfect environment for your business needs.",
    features: [
      "Conference rooms with A/V equipment",
      "Team-building activity areas",
      "Outdoor meeting spaces",
      "Catering options",
      "Wi-Fi throughout the property",
      "Corporate retreat packages",
    ],
    image: "/assets/co op.png",
  },
  {
    id: "parties",
    title: "Private Parties",
    description:
      "Celebrate life's special moments with a private party at Chandra Farms. Whether it's a birthday, anniversary, or family reunion, our beautiful setting provides the perfect backdrop for your celebration.",
    features: [
      "Flexible party spaces",
      "Outdoor and indoor options",
      "Customizable decorations",
      "Entertainment areas",
      "Catering services",
      "Event planning assistance",
    ],
    image: "/assets/chan2.png",
  },
  {
    id: "others",
    title: "Birthday Parties or Family Reunions",
    description:
      "Celebrate your child's birthday or host a family reunion at Chandra Farms. Our outdoor spaces and farm activities provide a fun and memorable experience for guests of all ages.",
    features: [
      "Outdoor play areas",
      "Picnic areas",
      "Catering options",
      "Event planning assistance",
      "Customizable party packages"
    ],
    image: "/assets/bday.jpg",
  },
]

export default function ServicesList() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 ${
              index % 2 === 1 ? "lg:grid-flow-dense" : ""
            }`}
          >
            <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`relative h-[400px] rounded-lg overflow-hidden ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
              <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

