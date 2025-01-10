import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface GalleryItem {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl?: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "Beautiful Landscape",
    description: "A beautiful landscape with mountains and a lake.",
    imageUrl: "/Gallery/1.png",
    linkUrl: "https://example.com/landscape"
  },
  {
    title: "City Skyline",
    description: "A stunning view of the city skyline at night.",
    imageUrl: "/Gallery/city_skyline.jpg",
    linkUrl: "https://example.com/city_skyline"
  }
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Gallery
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src={item.imageUrl} alt={item.title} width={500} height={300} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                {item.linkUrl && (
                  <a href={item.linkUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                    <ExternalLink className="w-4 h-4 mr-1" /> View More
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}