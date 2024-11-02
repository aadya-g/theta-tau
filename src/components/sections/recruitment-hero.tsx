"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

export function RecruitmentHero() {
    const imageUrl = "/20240217_185909_729EA7.jpeg";

    return (
        <div className="h-[80vh] bg-white">
            <div className="container h-full px-4 md:px-6">
                <div className="h-full flex items-center justify-between gap-8">
                    <div className="flex-1 space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-black">
                                Rush Theta Tau
                            </h1>
                            <p className="text-gray-600 md:text-xl max-w-[600px]">
                                The Premier Engineering Honor Society. Discover brotherhood, leadership, and excellence in engineering.
                            </p>
                        </div>
                        <div className="w-full max-w-sm space-y-2">
                            <form className="flex flex-col gap-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="border-gray-300"
                                    aria-label="Email for notifications"
                                />
                                <Button type="submit" className="bg-black text-white hover:bg-black/90">
                                    Get Notified
                                </Button>
                                <p className="text-xs text-gray-500">
                                    Sign up to get notified about our rush events and deadlines.
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <DirectionAwareHover
                            imageUrl={imageUrl}
                            className="w-[400px] h-[500px]"
                        >
                            <div className="space-y-2">
                                <p className="font-bold text-xl">Rush!</p>
                            </div>
                        </DirectionAwareHover>
                    </div>
                </div>
            </div>
        </div>
    );
}
