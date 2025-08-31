"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function RushFAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white relative">
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
                            linear-gradient(rgba(30, 64, 175, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(30, 64, 175, 0.3) 1px, transparent 1px)
                        `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-blue-800 opacity-20 rotate-45"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 border-2 border-blue-800 opacity-20"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-blue-800 opacity-20 rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-8 h-8 bg-blue-800 opacity-20 rotate-45"></div>

      <div className="container max-w-7xl mx-auto md:px-6 relative z-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-blue-900">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full [&_[data-state=open]]:border-blue-800 [&_.accordion-trigger]:text-blue-900 [&_.accordion-trigger:hover]:text-blue-800"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Theta Tau?</AccordionTrigger>
            <AccordionContent>
              Theta Tau is a professional engineering fraternity focused on developing connections, personal and
              academic growth, as well as professional connections among engineering students at UW-Madison.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Who can join Theta Tau?</AccordionTrigger>
            <AccordionContent>
              Students in the following engineering majors at UW-Madison are eligible to join: • Aerospace Engineering •
              Biomedical Engineering • Chemical Engineering • Civil Engineering • Computer Engineering • Computer
              Science • Electrical Engineering • Engineering Mechanics • Environmental Engineering • Geological
              Engineering • Industrial Engineering • Materials Science and Engineering • Mechanical Engineering •
              Nuclear Engineering
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What are the benefits of joining?</AccordionTrigger>
            <AccordionContent>
              Joining an engineering fraternity offers numerous benefits that can significantly enhance both your
              academic and professional journey. It provides a unique opportunity to connect with engineering students
              across various disciplines, fostering collaboration and mutual support. Members gain access to
              professional networking opportunities with alumni and leading companies in the industry, along with
              technical workshops and industry talks that sharpen skills and expand knowledge. The fraternity also
              supports career development through interview preparation sessions and resume reviews, while offering
              exclusive access to internship and job opportunities. Additionally, members can develop leadership and
              organizational skills by taking on chapter positions, providing invaluable experience for future roles.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How long is the recruitment process?</AccordionTrigger>
            <AccordionContent>
              The recruitment process takes two weeks. During this time, you'll attend professional and social events to
              meet current members and learn about the organization. Selected candidates will then receive bids to begin
              the pledge process.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default RushFAQ
