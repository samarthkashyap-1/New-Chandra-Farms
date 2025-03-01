"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  { id: 1, src: "/assets/wedding1.jpg", alt: "Wedding ceremony", category: "weddings" },
  { id: 2, src: "/assets/parties1.jpg", alt: "Outdoor party", category: "parties" },

  { id: 3, src: "/assets/venue9.jpg", alt: "Farm landscape", category: "venue" },
  { id: 4, src: "/assets/parties5.jpg", alt: "Stage", category: "parties" },
  { id: 5, src: "/assets/parties4.jpg", alt: "Birthday celebration", category: "parties" },
  { id: 6, src: "/assets/parties.jpg", alt: "Stalls", category: "weddings" },
  { id: 7, src: "/assets/farm.jpg", alt: "Farm", category: "venue" },
  { id: 8, src: "/assets/stay.jpg", alt: "Stay Area", category: "venue" },
  { id: 9, src: "/assets/img.png", alt: "Wedding decorations", category: "weddings" },
  { id: 10, src: "/assets/parties.jpg", alt: "Outdoor dining", category: "venue" },

  { id: 11, src: "/assets/venue3.jpg", alt: "Hall", category: "venue" },
  { id: 12, src: "/assets/venue4.jpg", alt: "Room 1", category: "venue" },
  { id: 13, src: "/assets/venue8.jpg", alt: "Room 2", category: "venue" },
  { id: 14, src: "/assets/venue2.jpg", alt: "Room 3", category: "venue" },
  { id: 15, src: "/assets/venue7.jpg", alt: "Room 4", category: "venue" },
  { id: 16, src: "/assets/parking.jpg", alt: "Parking", category: "venue" },
  { id: 17, src: "/assets/wedding2.jpg", alt: "Decorations", category: "weddings" },
  { id: 18, src: "/assets/wedding3.jpg", alt: "Decorations", category: "weddings" },
  { id: 19, src: "/assets/wedding4.jpg", alt: "Decorations", category: "weddings" },
  { id: 20, src: "/assets/toilet.jpg", alt: "Clean Toilets", category: "venue" },
  { id: 21, src: "/assets/bday.jpg", alt: "BirthDay", category: "parties" },
  { id: 22, src: "/assets/dinning.jpg", alt: "Outdoor dining 2", category: "venue" },



]

const categories = [
  { id: "all", name: "All" },
  { id: "weddings", name: "Weddings" },
  { id: "parties", name: "Parties" },
  { id: "venue", name: "Venue" },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" layout>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            <div className="relative w-full max-w-4xl h-[80vh]">
              {galleryImages.find((img) => img.id === selectedImage) && (
                <Image
                  src={galleryImages.find((img) => img.id === selectedImage)!.src || "/placeholder.svg"}
                  alt={galleryImages.find((img) => img.id === selectedImage)!.alt}
                  fill
                  className="object-contain"
                />
              )}
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-lg">{galleryImages.find((img) => img.id === selectedImage)?.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

