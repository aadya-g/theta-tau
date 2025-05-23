import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import Link from "next/link"


export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#2a0808] to-[#1a0505]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
              Theta Tau
            </h1>
            <p className="max-w-[600px] text-gray-300 md:text-xl">
              We are a premier engineering fraternity dedicated to academic excellence, professional
              development, and lifelong connections.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/rush" passHref>
                <Button variant="outline" className="border-[#8B0000] text-[#ff6b6b] hover:bg-[#8B0000]/10">
                  Join Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/ttbanquet.jpg?height=400&width=600"
              alt="Engineering students collaborating"
              width={900}
              height={700}
              className="rounded-lg object-cover border border-[#3d0c0c]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
