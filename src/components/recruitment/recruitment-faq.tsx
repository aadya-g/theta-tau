'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function RecruitmentFAQ() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white ">
            <div className="container max-w-7xl mx-auto md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is Theta Tau?</AccordionTrigger>
                        <AccordionContent>
                            Theta Tau is a professional engineering fraternity focused on developing
                            connections, personal and academic growth, as well as professional connections among
                            engineering students at UW-Madison.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Who can join Theta Tau?</AccordionTrigger>
                        <AccordionContent>
                            Students in the following engineering majors at UW-Madison are eligible to join:
                            • Aerospace Engineering
                            • Biomedical Engineering
                            • Chemical Engineering
                            • Civil Engineering
                            • Computer Engineering
                            • Computer Science
                            • Electrical Engineering
                            • Engineering Mechanics
                            • Environmental Engineering
                            • Geological Engineering
                            • Industrial Engineering
                            • Materials Science and Engineering
                            • Mechanical Engineering
                            • Nuclear Engineering
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What are the benefits of joining?</AccordionTrigger>
                        <AccordionContent>
                            Joining an engineering fraternity offers numerous benefits that can significantly enhance both your academic and professional journey. It provides a unique opportunity to connect with engineering students across various disciplines, fostering collaboration and mutual support. Members gain access to professional networking opportunities with alumni and leading companies in the industry, along with technical workshops and industry talks that sharpen skills and expand knowledge. The fraternity also supports career development through interview preparation sessions and resume reviews, while offering exclusive access to internship and job opportunities. Additionally, members can develop leadership and organizational skills by taking on chapter positions, providing invaluable experience for future roles.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>How long is the recruitment process?</AccordionTrigger>
                        <AccordionContent>
                            The recruitment process takes two weeks. During this time, you'll attend professional and social
                            events to meet current members and learn about the organization. Selected candidates will then
                            receive bids to begin the pledge process.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}
