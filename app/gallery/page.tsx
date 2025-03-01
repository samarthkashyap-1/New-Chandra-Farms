import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import Gallery from "@/components/gallery"

export const metadata: Metadata = {
  title: "Gallery | Chandra Farms",
  description:
    "Browse our gallery of beautiful events hosted at Chandra Farms including weddings, parties, and corporate gatherings.",
}

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Our Gallery"
        description="Memories created at Chandra Farms"
        image="/assets/parties4.jpg"
      />
      <Gallery />
    </>
  )
}

