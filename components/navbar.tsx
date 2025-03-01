"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine if scrolled past threshold
      if (currentScrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setVisible(false)
      } else {
        // Scrolling up or at the top
        setVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-primary w-20 lg:w-40">
          <Image src="/assets/logo.png" alt="Chandra Farms" width={(scrolled || isOpen)? 80 : 150} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden lg:flex space-x-8 ${scrolled ? "" : "mb-auto mt-5"}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${scrolled ? "text-gray-800" : "text-white"} hover:text-primary transition-colors font-medium relative group`}
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden  focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} color={scrolled ? "black" : "white"} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white shadow-lg"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-800 hover:text-primary transition-colors font-medium py-2 border-b border-gray-100 last:border-b-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

