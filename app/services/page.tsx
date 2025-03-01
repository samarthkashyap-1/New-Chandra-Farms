import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import ServicesList from "@/components/services-list"
import Testimonials from "@/components/testimonials"
import ContactCta from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "Our Services | Chandra Farms",
  description:
    "Discover the range of services offered at Chandra Farms for weddings, parties, corporate events, and more.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Everything you need for your perfect event"
        image="/assets/venue6.jpg"
      />
      <ServicesList />
      {/* <Testimonials /> */}
      <ContactCta />
    </>
  )
}

