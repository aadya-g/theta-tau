import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, Users } from "lucide-react"

export function EngineeringExpoSection() {
  return (
    <section id="expo" className="w-full py-12 md:py-24 bg-[#2a0808]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Left side - Section text */}
          <div className="flex flex-col space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#8B0000] px-3 py-1 text-sm text-white">Coming Soon</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Engineering Expo Project 2025
              </h2>
              <p className="text-gray-300 md:text-xl">
              Join us at the Engineering Expo at UW-Madison! Visit our booth and discover the thrill of rocketry. Learn hands-on how to launch rockets 
              and explore the exciting world of engineering. Don't miss out on this opportunity to ignite your curiosity and soar to new heights!
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-[#3d0c0c] bg-[#1a0505] shadow-xl mt-6 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Event Highlights</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="mr-2 h-5 w-5 text-[#ff6b6b] shrink-0 mt-0.5" />
                  <span className="text-gray-200">Learn about cutting edge projects</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mr-2 h-5 w-5 text-[#ff6b6b] shrink-0 mt-0.5" />
                  <span className="text-gray-200">Student project showcase</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mr-2 h-5 w-5 text-[#ff6b6b] shrink-0 mt-0.5" />
                  <span className="text-gray-200">Spark Curiosity</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mr-2 h-5 w-5 text-[#ff6b6b] shrink-0 mt-0.5" />
                  <span className="text-gray-200">Participate in hands on projects</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#ff6b6b]" />
                  <span className="text-gray-200">April 11-12, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#ff6b6b]" />
                  <span className="text-gray-200">Open to all</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Just an image */}
          <div className="flex items-center justify-center">
            <div className="relative overflow-hidden rounded-lg border-4 border-[#8B0000] shadow-2xl">
              <Image
                src="/Sp25_expo.PNG?height=800&width=600"
                alt="Engineering Expo Flyer"
                width={600}
                height={800}
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a0505] to-transparent p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white">Engineering Expo 2025</h3>
                  <p className="text-gray-200">Engineering Hall</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

