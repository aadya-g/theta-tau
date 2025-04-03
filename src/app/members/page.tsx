import { RecruitmentEventsFlyer } from "@/components/recruitment/recruitment-events-flyer"
import { RecruitmentFAQ } from "@/components/recruitment/recruitment-faq"
import { RecruitmentHero } from "@/components/recruitment/recruitment-hero"
import MembersPage from "@/components/members/members"

export default function Recruitment() {
    return (
        <div className="min-h-screen bg-background">
            {/* Members Section */}
            <MembersPage />

            {/* Full viewport flyer section
            // <RecruitmentEventsFlyer /> */}

            {/* Instagram Section */}
            {/* <RecruitmentLinks /> */}

            {/* FAQ Section */}
            {/* <RecruitmentFAQ /> */}
        </div>
    )
}
