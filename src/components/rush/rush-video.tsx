import Image from "next/image"
import { Instagram, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"


export default function RushVideo() {
    return (
      <div className="min-h-screen bg-background flex flex-col">
<section id="rush-video" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience θT Rush</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Get a glimpse of what it's like to be part of Theta Tau. 
              </p>
              <div className="w-full max-w-4xl aspect-video overflow-hidden rounded-xl border bg-muted">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Rush Video Thumbnail"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />
                  <Button
                    size="lg"
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90"
                    aria-label="Play rush video"
                  >
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Click to play our 2024 Rush Video
              </p>
            </div>
          </div>
        </section>
      </div>
    )
}