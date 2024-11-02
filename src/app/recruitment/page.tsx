import { RecruitmentHero } from "@/components/sections/recruitment-hero"
import { RushEventsFlyer } from "@/components/sections/rush-events-flyer"
import { RecruitmentFAQ } from "@/components/sections/recruitment-faq"
import { Footer } from "@/components/ui/footer"
import { RecruitmentLinks } from "@/components/sections/recruitment-links"

export default function Recruitment() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <RecruitmentHero />

            {/* Full viewport flyer section */}
            <RushEventsFlyer />

            {/* Instagram Section */}
            <RecruitmentLinks />

            {/* FAQ Section */}
            <RecruitmentFAQ />
        </div>
    )
}
