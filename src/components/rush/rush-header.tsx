// import { Button } from "@/components/ui/button"

// export default function RushHeader() {
//   return (
//     <div className="min-h-screen bg-background flex flex-col">
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center space-y-4 text-center">
//               <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
//                 Theta Tau Rush 2024
//               </h1>
//               <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
//                 Learn about our community of engineers, and discover opportunities in leadership and service.
//               </p>
//               <div className="w-full max-w-sm space-y-2">
//                 <Button className="w-full" size="lg">
//                   Sign Up for Rush
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>
//         </main>
//     </div>
//   )
// }
// "use client";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import { EmailCollector } from "@/lib/email-collector";
// import Image from "next/image";

// export function RecruitmentHero() {
//     const imageUrl = "/Spring25Rush.jpeg";

//     return (
//         <div className="h-[80vh] bg-white container max-w-7xl mx-auto">
//             <div className="h-full md:flex md:items-center md:justify-between md:gap-8">
//                 <div className="flex-1 space-y-8 pt-20 md:pt-0">
//                     <div className="space-y-4">
//                         <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-black">
//                             Rush Theta Tau
//                         </h1>
//                         <p className="text-gray-600 md:text-xl max-w-[600px]">
//                             Learn about our community of engineers, and discover opportunities in leadership and service.
//                         </p>
//                     </div>
//                     <div className="w-full max-w-sm space-y-2">
//                         <EmailCollector 
//                             source="recruitment_hero"
//                             className="[&_button]:bg-black [&_button]:text-white [&_button]:hover:bg-black/90 [&_input]:border-gray-300"
//                         />
//                         <p className="text-xs text-gray-500">
//                             Sign up to get notified about our rush events and deadlines.
//                         </p>
//                     </div>
//                 </div>
//                 <div className="mt-8 md:mt-16 flex items-center justify-center md:justify-end">
//                     <div className="w-full md:w-[650px] h-[450px] md:h-[650px] rounded-xl overflow-hidden">
//                         <Image
//                             src={imageUrl}
//                             alt="Rush Theta Tau"
//                             className="w-full h-full object-contain scale-105 rounded-2xl"
//                             width={650}
//                             height={650}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { EmailCollector } from "@/lib/email-collector";
import Image from "next/image";

export function RecruitmentHero() {
    const imageUrl = "/Spring25Rush.jpeg";

    return (
        <div className="h-[80vh] bg-white container max-w-7xl mx-auto relative">
            {/* Aura Blobs */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-pink-300 rounded-full opacity-50 animate-blob z-0"></div>
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-red-400 rounded-full opacity-50 animate-blob z-0"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-400 rounded-full opacity-50 animate-blob z-0"></div>
            <div className="absolute top-3/4 right-1/3 w-36 h-36 bg-pink-600 rounded-full opacity-50 animate-blob z-0"></div>

            <div className="h-full md:flex md:items-center md:justify-between md:gap-8 z-10 relative">
                <div className="flex-1 space-y-8 pt-20 md:pt-0">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-black">
                            Rush Theta Tau
                        </h1>
                        <p className="text-gray-600 md:text-xl max-w-[600px]">
                        Spring 2025 rush has been completed. If you are interested in rushing in the fall, follow our instagram for more information and enter your email to get notified about rush. 
                        {/* Learn about our community of engineers, and discover opportunities in leadership and service. */}
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
                    <div className="w-full md:w-[650px] h-[400px] md:h-[650px] max-h-[650px] rounded-xl overflow-hidden border-4 border-transparent mb-8 md:mb-0">
                        <Image
                            src={imageUrl}
                            alt="Rush Theta Tau"
                            className="w-full h-full object-contain scale-105 rounded-2xl"
                            width={650}
                            height={650}
                        />
                    </div>
                </div>
            </div>
            {/* Add spacing to ensure the next section doesn't overlap */}
            <div className="mt-16">
                {/* Your next section content goes here */}
            </div>
        </div>
    );
}
