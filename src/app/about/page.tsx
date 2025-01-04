import { ExecBoard } from "@/components/aboutus/execboard"
import { XiChapter } from "@/components/aboutus/xichapter"
import { Pillars } from "@/components/aboutus/pillars"
import { OurHistory } from "@/components/aboutus/history"
import Page from "@/components/aboutus/aboutpage";

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-background">
            {/* ExecBoard*/}
                <ExecBoard />
            {/* Xi Chapter*/}
                <XiChapter />
            {/* Pillars */}
                <Pillars />
            {/* Our History*/}
                <OurHistory />
        </div>

    )
}
        