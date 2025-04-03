import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, Users } from "lucide-react"

export function EngineeringExpoSection() {
  return (
    <section id="expo" className="w-full py-12 md:py-24 bg-[#2a0808]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#8B0000] px-3 py-1 text-sm text-white">Coming Soon</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Theta Tau Engineering Expo Project 2025
            </h2>
            <p className="max-w-[700px] text-gray-300 md:text-xl">
              Visit our booth at  us for the biggest engineering showcase of the year.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8">
          <div className="overflow-hidden rounded-lg border border-[#3d0c0c] bg-[#1a0505] shadow-xl">
            <div className="bg-[#8B0000] text-white p-6 text-center">
              <h3 className="text-2xl font-bold">Engineering Expo 2025</h3>
              <p className="text-lg mt-2">April 11-12, 2025 • Engineering Hall</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-white">The Launching Legends</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-[#ff6b6b] shrink-0 mt-0.5" />
                      <span className="text-gray-200">Student project showcase</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-[#ff6b6b] shrink-0 mt-0.5" />
                      <span className="text-gray-200">Cutting-edge projects</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-[#ff6b6b] shrink-0 mt-0.5" />
                      <span className="text-gray-200">Spark curiositys</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Image
                  src="/Sp25_expo.PNG?height=300&width=400"
                  alt="Engineering Expo"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover h-full border border-[#3d0c0c]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

