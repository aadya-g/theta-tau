'use client'

import Image from "next/image"

export function RushEventsFlyer() {
    return (
        <section className="relative h-screen w-full">
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    src="/rush-events-flyer.jpg" // This should be replaced with the actual flyer image
                    alt="Rush Events Schedule"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            {/* Optional overlay for better text visibility if needed */}
            <div className="absolute inset-0 bg-black/5" />
        </section>
    )
}
