"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ContactCta() {
  return (
    <section className="py-16 md:py-24 bg-primary/90 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Event?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to schedule a tour of Chandra Farms and start planning your perfect event.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors inline-block"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

