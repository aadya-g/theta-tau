'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function RecruitmentHero() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Join Epsilon Pi Tau
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            The Premier Engineering Honor Society. Discover brotherhood, leadership, and excellence in engineering.
                        </p>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                        <form className="flex flex-col sm:flex-row gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="max-w-lg flex-1"
                                aria-label="Email for notifications"
                            />
                            <Button type="submit">Get Notified</Button>
                        </form>
                        <p className="text-xs text-muted-foreground">
                            Sign up to get notified about our rush events and deadlines.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
