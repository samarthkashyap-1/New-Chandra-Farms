"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
            Nestled in the heart of Lucknow, Chandra Farms is not just a place; it's a testament to a legacy that spans generations. The Chandra name in Lucknow is synonymous with trust, quality, and a commitment to excellence.
            </p>
            <p className="text-gray-600 mb-4">
            Our story begins with a deep-rooted passion for nature and a desire to share its beauty with the world. For decades, the Chandra family has been devoted to preserving the charm of this land, transforming it into a sanctuary of serenity and sophistication.
            </p>
            <p className="text-gray-600 mb-4">
            With meticulous attention to detail and an unwavering dedication to preserving the essence of Lucknow's rich culture, Chandra Farms has become a haven for those seeking to escape the hustle and bustle of urban life. Our picturesque setting offers the perfect backdrop for weddings, celebrations, and special gatherings, where every moment becomes a cherished memory.
            </p>
            <p className="text-gray-600">
            As you explore our About page, you'll discover the values that have guided us throughout our journey, the people who make Chandra Farms what it is today, and the traditions we hold dear. We invite you to become a part of our story, where the Chandra legacy continues to bloom, and timeless memories are created.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/assets/venue9.jpg"
              alt="Chandra Farms history"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-lg overflow-hidden lg:order-last"
          >
            <Image
              src="/assets/parking.jpg"
              alt="Chandra Farms mission"
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
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              At Chandra Farms, our mission is to provide a beautiful, natural setting where people can gather to
              celebrate life's special moments. We believe that every event should be as unique as the individuals
              hosting it, and we work tirelessly to ensure that each celebration reflects the personality and vision of
              our clients.
            </p>
            <p className="text-gray-600 mb-4">
              We are committed to sustainable practices and preserving the natural beauty of our land for future
              generations. From our organic gardens to our energy-efficient facilities, we strive to minimize our
              environmental impact while maximizing the beauty and functionality of our spaces.
            </p>
            <p className="text-gray-600">
              Above all, we aim to create an atmosphere of warmth, hospitality, and exceptional service that makes every
              guest feel welcome and every event unforgettable.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

