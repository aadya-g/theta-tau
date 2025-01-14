import Image from "next/image"

export default function RushFlyer() {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="space-y-4 md:w-1/2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Rush Flyer</h2>
                <p className="text-muted-foreground">
                  Check out our official rush flyer for all the details about our upcoming events and how to get involved.
                </p>
              </div>
              <div className="md:w-1/2 aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  alt="Rush Flyer"
                  className="object-cover"
                  height="300"
                  src="/Fall-24-Rush-Flyer-Color-v4-667x1024.png"
                  style={{
                    aspectRatio: "4/3",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}