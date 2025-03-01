"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function LocationMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold mb-6">Find Us</h3>

      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="relative h-[300px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3558.1950061457037!2d81.0681389!3d26.897305600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUzJzUwLjMiTiA4McKwMDQnMDUuMyJF!5e0!3m2!1sen!2sin!4v1693830456265!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chandra Farms Location"
          ></iframe>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-start">
            <MapPin className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p className="text-gray-600">Tiwari Ganj, Near Mercedes Benz Workshop, Ayodhya Road, Lucknow</p>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-600">+91 6389895959 , +91 7007505863</p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-600">farmschandra@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-semibold">Office Hours</h4>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 3:00 PM</p>
              <p className="text-gray-600">Sunday: Closed (Except for Events)</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

