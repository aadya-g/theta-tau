import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function RushWhyUs() {
    return (
      <div className="min-h-screen bg-background flex flex-col">
            <section id="why-us" className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Join Theta Tau?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Theta Tau offers a unique blend of professional development, philanthropic service, and lifelong brotherhood. As a member, you'll join a community of like-minded engineers who support and inspire each other to reach new heights in their careers and personal lives.
                  </p>
                  <p>
                    Our fraternity provides unparalleled opportunities for leadership development, allowing you to take on roles that will enhance your organizational and management skills. We understand the importance of collaboration, innovation, and leadership in shaping the world around us and foster these qualities through workshops and networking events that prepare members for successful careers.
                  </p>
                  <p>
                    We pride ourselves on our strong alumni network, which opens doors to internships, job opportunities, and mentorship from successful professionals in various engineering fields. By joining Theta Tau, you're not just part of a college organization- you're joining a lifelong community dedicated to advancing the engineering profession.
                  </p>
                </div>
                <Button size="lg" className="mt-4">Learn More About θΤ</Button>
              </div>
              <div className="md:w-1/2 aspect-square overflow-hidden rounded-xl">
                <Image
                  alt="Theta Tau members"
                  className="object-cover"
                  height="600"
                  src="/20240128_175030_71EB21-1024x768.jpeg?height=600&width=600"
                  style={{
                    aspectRatio: "1/1",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}