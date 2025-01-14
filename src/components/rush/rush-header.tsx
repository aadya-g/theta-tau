import { Button } from "@/components/ui/button"

export default function RushHeader() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Theta Tau Rush 2024
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Learn about our community of engineers, and discover opportunities in leadership and service.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg">
                  Sign Up for Rush
                </Button>
              </div>
            </div>
          </div>
        </section>
        </main>
    </div>
  )
}