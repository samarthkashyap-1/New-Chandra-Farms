import Hero from "@/components/hero"
import FeaturedServices from "@/components/featured-services"
import GalleryPreview from "@/components/gallery-preview"
import AboutPreview from "@/components/about-preview"
import ContactCta from "@/components/contact-cta"
import type { Metadata } from "next"
import Head from "next/head"

export const metadata: Metadata = {
  title: "Chandra Farms | Premier Wedding & Event Venue",
  description:
    "Create unforgettable memories at Chandra Farms, a picturesque venue for weddings, parties, and special events.",
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
   <link rel="icon" type="image/png" href="/assets/logo.png" />
    </Head>
      <Hero />
      <FeaturedServices />
      <GalleryPreview />
      <AboutPreview />
      <ContactCta />
    </div>
  )
}

