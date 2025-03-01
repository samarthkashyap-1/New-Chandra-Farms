import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"
import LocationMap from "@/components/location-map"

export const metadata: Metadata = {
  title: "Contact Us | Chandra Farms",
  description: "Get in touch with Chandra Farms to book your event or schedule a tour of our beautiful venue.",
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Let's plan your perfect event"
        image="/assets/venue8.jpg"
      />
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <LocationMap />
        </div>
      </div>
    </>
  )
}

