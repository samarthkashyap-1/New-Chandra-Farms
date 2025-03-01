"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import bg1 from "@/public/assets/bg1.jpg"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/bg4.jpg')",
          filter: "brightness(0.7)",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-serif">
            <span className="block animate-fade-in-up">Welcome to</span>
            <span className="block animate-fade-in-up animation-delay-150">Chandra Farms</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A picturesque venue for weddings, parties, and unforgettable celebrations
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="/gallery"
              className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              View Gallery
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}

