import Image from "next/image"
import Link from "next/link"
import { Instagram, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RushInstagram() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
        <section id="instagram" className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Instagram className="h-16 w-16" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Follow Our Journey</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Stay updated with our latest events, projects, and brotherhood activities on Instagram.
              </p>
              <Button size="lg" asChild className="mt-4">
                <Link href="https://www.instagram.com/thetatauxi" target="_blank" rel="noopener noreferrer">
                  Follow @thetatauxi
                </Link>
              </Button>
            </div>
          </div>
        </section>

    </div>
  )
}