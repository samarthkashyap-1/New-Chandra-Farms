"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  description: string
  image: string
}

export default function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${image}')`,
          filter: "brightness(0.7)",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">{description}</p>
        </motion.div>
      </div>
    </section>
  )
}

