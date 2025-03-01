"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    id: 1,
    name: "Raj Chandra",
    role: "Founder & CEO",
    bio: "Raj founded Chandra Farms in 2005 with a vision to create a beautiful event space that celebrates nature and community.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Priya Chandra",
    role: "Creative Director",
    bio: "Priya oversees all design aspects of events at Chandra Farms, ensuring each celebration is beautiful and unique.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Arjun Patel",
    role: "Event Manager",
    bio: "With over 10 years of experience in event planning, Arjun ensures that every event runs smoothly from start to finish.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "Maya Singh",
    role: "Customer Relations",
    bio: "Maya is the first point of contact for clients and is dedicated to providing exceptional service throughout the planning process.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function Team() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The dedicated professionals who make Chandra Farms a special place
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-80">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

