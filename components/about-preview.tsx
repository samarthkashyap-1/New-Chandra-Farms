"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/assets/venue9.jpg"
              alt="Chandra Farms landscape"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Chandra Farms</h2>
            <p className="text-gray-600 mb-4">
            Nestled in the heart of Lucknow, Chandra Farms is not just a place; it's a testament to a legacy that spans generations. The Chandra name in Lucknow is synonymous with trust, quality, and a commitment to excellence.
            </p>
            <p className="text-gray-600 mb-6">
            As you explore our About page, you'll discover the values that have guided us throughout our journey, the people who make Chandra Farms what it is today, and the traditions we hold dear. We invite you to become a part of our story, where the Chandra legacy continues to bloom, and timeless memories are created.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Years of Experience</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>50000+ sq ft of Space</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>100+ Events Hosted</span>
              </div>
            </div>
            <Link
              href="/about"
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

