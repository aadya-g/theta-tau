'use client'

import Link from "next/link"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1">
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
        <section id="events" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Rush Events</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Info Session</CardTitle>
                  <CardDescription>September 15, 2024 - 7:00 PM</CardDescription>
                </CardHeader>
                <CardContent>
                  Learn about ΕΠΤ's history, values, and the benefits of membership. Q&A session included.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Engineering Challenge</CardTitle>
                  <CardDescription>September 17, 2024 - 6:00 PM</CardDescription>
                </CardHeader>
                <CardContent>
                  Participate in a fun, team-based engineering challenge. Show off your skills and creativity!
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Social Mixer</CardTitle>
                  <CardDescription>September 20, 2024 - 8:00 PM</CardDescription>
                </CardHeader>
                <CardContent>
                  Meet and mingle with current members in a relaxed setting. Refreshments will be provided.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="instagram" className="w-full py-12 md:py-24 lg:py-32">
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
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Epsilon Pi Tau?</AccordionTrigger>
                <AccordionContent>
                  Epsilon Pi Tau is an engineering honor society that promotes excellence in academics, leadership, and
                  professional development for engineering students.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Who can join Epsilon Pi Tau?</AccordionTrigger>
                <AccordionContent>
                  Membership is open to engineering students who maintain a high GPA and demonstrate leadership potential.
                  Specific requirements may vary, so we encourage you to attend our info session for more details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What are the benefits of joining?</AccordionTrigger>
                <AccordionContent>
                  Members enjoy networking opportunities, access to exclusive events, leadership development, community
                  service projects, and the chance to be part of a supportive brotherhood of future engineering leaders.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How long does the rush process take?</AccordionTrigger>
                <AccordionContent>
                  Our rush process typically lasts about two weeks, during which you'll attend various events to get to
                  know our members and learn more about our organization. After rush, selected candidates will be invited
                  to pledge.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Join?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Sign up now to get notified about our upcoming events and application deadlines.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1"
                    aria-label="Email for notifications"
                  />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Epsilon Pi Tau. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="mailto:contact@epsilonpitau.org">
            contact@epsilonpitau.org
          </Link>
        </nav>
      </footer>
    </div>
  )
}