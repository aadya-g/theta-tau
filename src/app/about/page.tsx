import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function AboutPage() {
    const timelineData = [
        {
            title: "Today",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Today, Theta Tau continues to foster:
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Professional Development
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Brotherhood & Community
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Service & Leadership
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Academic Excellence
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Engineering Innovation
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/20240217_185909_729EA7.jpeg"
                            alt="Theta Tau members"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
                        />
                        <Image
                            src="/20240428_211420_7565D5-768x1024.jpeg"
                            alt="Theta Tau event"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Growth & Development",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Over the decades, Theta Tau has grown into the largest and oldest professional engineering fraternity in the United States, with a strong emphasis on professional development, brotherhood, and service.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/20240128_175030_71EB21-1024x768.jpeg"
                            alt="Brotherhood event"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
                        />
                        <Image
                            src="/20240217_185901_798044-768x1024.jpeg"
                            alt="Professional development"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "1904",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Theta Tau was founded at the University of Minnesota by Erich J. Schrader, Elwin L. Vinal, William M. Lewis, and Isaac B. Hanks.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/IMG_4185-1024x768.jpg"
                            alt="Theta Tau legacy"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
                        />
                        <Image
                            src="/IMG_4186-768x1024.jpg"
                            alt="Theta Tau history"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="pt-24 pb-12 flex items-center justify-between">
                    <h1 className="text-4xl font-bold text-black inline p-5">About</h1>
                    <span className="h-0.5 w-full bg-black mt-2"></span>
                </div>
                {/* Main Content */}
                <div className="py-16">
                    <div className="max-w-3xl">
                        <p className="text-xl text-black font-medium mb-8">
                            Theta Tau is the oldest and largest co-ed professional engineering fraternity in the United States.
                            Since its founding at the University of Minnesota in 1904, we have shaped the engineering profession
                            by fostering brotherhood among engineering students and professionals.
                        </p>

                        <p className="text-lg text-black mb-12">
                            Our organization emphasizes professional development, academic excellence, personal integrity, and a
                            strong sense of fraternal brotherhood. Through our three pillars of professional development, service,
                            and brotherhood, we cultivate leaders who make lasting impacts in their communities and the engineering field.
                        </p>

                        <div className="space-y-6 text-black">
                            <p className="text-lg">Today, Theta Tau continues to foster:</p>
                            <ul className="space-y-2 text-lg">
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-600">▸</span> Professional Development
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-600">▸</span> Brotherhood & Community
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-600">▸</span> Service & Leadership
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-600">▸</span> Academic Excellence
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-600">▸</span> Engineering Innovation
                                </li>
                            </ul>
                        </div>

                        <div className="mt-16">
                            <p className="text-lg text-black">
                                Over the decades, Theta Tau has grown into the largest professional engineering fraternity in
                                the United States, with a strong emphasis on professional development, brotherhood, and service.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Timeline Section */}
                <div className="pb-24">
                    <div className="w-full">
                        <Timeline data={timelineData} />
                    </div>
                </div>
            </div>
        </div>
    );
}
