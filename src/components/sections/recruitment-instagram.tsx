'use client'

import Link from "next/link"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RecruitmentInstagram() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <Instagram className="h-24 w-24" />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Follow Us on Instagram</h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                        Stay updated with our latest events, projects, and brotherhood activities.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="https://www.instagram.com/epsilonpitau" target="_blank" rel="noopener noreferrer">
                            @epsilonpitau
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
