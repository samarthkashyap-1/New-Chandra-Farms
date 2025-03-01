import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import AboutContent from "@/components/about-content"
import Team from "@/components/team"
import ContactCta from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "About Us | Chandra Farms",
  description:
    "Learn about the history and vision of Chandra Farms, a premier event venue dedicated to creating unforgettable experiences.",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Chandra Farms"
        description="Our story and vision"
        image="/assets/venue9.jpg"
      />
      <AboutContent />
      {/* <Team /> */}
      <ContactCta />
    </>
  )
}

