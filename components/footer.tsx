import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src="/assets/logo.png"
              alt="Chandra Farms"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="mb-4">
              Creating unforgettable memories in a picturesque setting for weddings, parties, and special events.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61550657502094"
              target="_blank" className="hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/farmschandraa/" target="_blank" className="hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-secondary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Weddings
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Birthday Parties
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Anniversary Celebrations
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Outdoor Activities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 flex flex-col gap-2">
                <Link href="https://www.google.com/maps/place/26%C2%B053'50.3%22N+81%C2%B004'05.3%22E/@26.8973122,81.065559,17z/data=!3m1!4b1!4m4!3m3!8m2!3d26.8973122!4d81.0681339?entry=ttu" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Tiwari Ganj,Lucknow
                </span>
              </li>
                </Link>
                <Link href="mailto: farmschandra@gmail.com" className="hover:text-secondary transition-colors">
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>farmschandra@gmail.com</span>
                
              </li>
                </Link>
                <Link
                href="tel:+916389895959"
                className="hover:text-secondary transition-colors">
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+91 6389895959</span>
              </li>
                </Link>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/70 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Chandra Farms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

