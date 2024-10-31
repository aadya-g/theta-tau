'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function BottomCTA() {
    return (
        <section className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex flex-col items-center justify-center gap-4 py-20 md:py-32 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Join Our Brotherhood
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                    Be part of something greater. Sign up to stay updated on our events and opportunities.
                </p>
                <div className="w-full max-w-sm space-y-2">
                    <form className="flex flex-col sm:flex-row gap-2">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="max-w-lg flex-1"
                            aria-label="Email for notifications"
                        />
                        <Button type="submit">Join Now</Button>
                    </form>
                    <p className="text-xs text-muted-foreground">
                        We respect your privacy and will never share your information.
                    </p>
                </div>
            </div>
        </section>
    )
}
