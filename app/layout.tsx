import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Chandra Farms | Premier Wedding & Event Venue",
  description:
    "Chandra Farms offers a beautiful natural setting for weddings, parties, and special events. Book your dream celebration today.",
  keywords:
    "wedding venue, event space, party venue, farm wedding, outdoor events, lucknow, wedding planning, lucknow events, lucknow weddings",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const canonicalUrl = `https://chandrafarms.in`

  return (
    <html lang="en">
      <Head>
        {/* Dynamic SEO Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Chandra Farms" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Chandra Farms | Premier Wedding & Event Venue" />
        <meta property="og:description" content="Chandra Farms offers a beautiful natural setting for weddings, parties, and special events." />
        <meta property="og:image" content="./public/assets/logo.png" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chandra Farms | Premier Wedding & Event Venue" />
        <meta name="twitter:description" content="Chandra Farms offers a beautiful natural setting for weddings, parties, and special events." />
        <meta name="twitter:image" content="./public/assets/logo.png" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
