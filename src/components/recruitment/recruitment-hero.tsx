"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { EmailCollector } from "@/lib/email-collector";

export function RecruitmentHero() {
    const imageUrl = "/Spring25Rush.jpeg";

    return (
        <div className="h-[80vh] bg-white container max-w-7xl mx-auto">
            <div className="h-full md:flex md:items-center md:justify-between md:gap-8">
                <div className="flex-1 space-y-8 pt-20 md:pt-0">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-black">
                            Rush Theta Tau
                        </h1>
                        <p className="text-gray-600 md:text-xl max-w-[600px]">
                            Learn about our community of engineers, and discover opportunities in leadership and service.
                        </p>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                        <EmailCollector 
                            source="recruitment_hero"
                            className="[&_button]:bg-black [&_button]:text-white [&_button]:hover:bg-black/90 [&_input]:border-gray-300"
                        />
                        <p className="text-xs text-gray-500">
                            Sign up to get notified about our rush events and deadlines.
                        </p>
                    </div>
                </div>
                <div className="mt-8 md:mt-16 flex items-center justify-center md:justify-end">
                    <div className="w-full md:w-[600px] h-[400px] md:h-[600px]">
                        <DirectionAwareHover
                            imageUrl={imageUrl}
                            className="w-full h-full"
                        >
                            <div className="space-y-2">
                            </div>
                        </DirectionAwareHover>
                    </div>
                </div>
            </div>
        </div>
    );
}
