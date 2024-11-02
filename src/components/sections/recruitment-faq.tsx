'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function RecruitmentFAQ() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is Theta Tau?</AccordionTrigger>
                        <AccordionContent>
                            Theta Tau is an engineering honor society that promotes excellence in academics, leadership, and
                            professional development for engineering students.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Who can join Theta Tau?</AccordionTrigger>
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
    )
}
