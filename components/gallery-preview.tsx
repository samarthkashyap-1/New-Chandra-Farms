"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const galleryImages = [
  { id: 1, src: "/assets/wedding1.jpg", alt: "Wedding ceremony", category: "weddings" },
  { id: 2, src: "/assets/parties1.jpg", alt: "Outdoor party", category: "parties" },

  { id: 3, src: "/assets/venue9.jpg", alt: "Farm landscape", category: "venue" },
  { id: 4, src: "/assets/parties5.jpg", alt: "Stage", category: "parties" },
  { id: 5, src: "/assets/parties4.jpg", alt: "Birthday celebration", category: "parties" },
  { id: 6, src: "/assets/parties.jpg", alt: "Stalls", category: "weddings" },
]

export default function GalleryPreview() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a glimpse at the beautiful events and celebrations hosted at Chandra Farms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg aspect-[4/3] group"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}

