import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HomeAboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#1a0505]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/20240908_150702_701104.jpeg?height=400&width=600"
              alt="Engineering fraternity members"
              width={600}
              height={400}
              className="rounded-lg object-cover border border-[#3d0c0c]"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">About Theta Tau</h2>
            <p className="text-gray-300 md:text-lg">
              Founded in 1904, Theta Tau is an professional engineering fraternity. Our
              chapter focuses on fostering leadership, academic excellence, and professional development among
              engineering students.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex flex-col gap-2 border border-[#3d0c0c] rounded-lg p-4 bg-[#2a0808]">
                <h3 className="text-lg font-semibold text-white">Our Purpose</h3>
                <p className="text-sm text-gray-300">
                  To develop and maintain a high standard of professional interest among members, and to unite them in a strong bond of fraternal fellowship.
                </p>
              </div>
              <div className="flex flex-col gap-2 border border-[#3d0c0c] rounded-lg p-4 bg-[#2a0808]">
                <h3 className="text-lg font-semibold text-white">Our Pillars</h3>
                <p className="text-sm text-gray-300">Professional Development, Community Service, and Brotherhood.</p>
              </div>
              <div className="flex flex-col gap-2 border border-[#3d0c0c] rounded-lg p-4 bg-[#2a0808]">
                <h3 className="text-lg font-semibold text-white">Culture</h3>
                <p className="text-sm text-gray-300"> Fosters lifelong relationships and connections grounded in mutual respect and professionalism, enriched by 
                    the diversity of engineering disciplines and demographics.</p>
              </div>
              <div className="flex flex-col gap-2 border border-[#3d0c0c] rounded-lg p-4 bg-[#2a0808]">
                <h3 className="text-lg font-semibold text-white">Open Motto</h3>
                <p className="text-sm text-gray-300">
                "Whatsoever thy hand findeth to do, do it with thy might;..." -Ecclesiastes 9:10
                </p>
              </div>
            </div>
            <div className="pt-2">
              <Link href="/about" passHref>
                <Button variant="outline" className="border-[#8B0000] text-[#ff6b6b] hover:bg-[#8B0000]/10">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

