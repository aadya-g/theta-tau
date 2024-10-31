import { RecruitmentHero } from "@/components/sections/recruitment-hero"
import { RushEventsFlyer } from "@/components/sections/rush-events-flyer"
import { RecruitmentInstagram } from "@/components/sections/recruitment-instagram"
import { RecruitmentFAQ } from "@/components/sections/recruitment-faq"
import { Footer } from "@/components/ui/footer"

export default function Recruitment() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <RecruitmentHero />

            {/* Full viewport flyer section */}
            <RushEventsFlyer />

            {/* Instagram Section */}
            <RecruitmentInstagram />

            {/* FAQ Section */}
            <RecruitmentFAQ />

            <Footer />
        </div>
    )
}
