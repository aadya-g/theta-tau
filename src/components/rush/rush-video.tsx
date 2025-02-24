import Image from "next/image";
import { Instagram, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function RushVideo() {
    return (
        <div className="min-h-screen bg-background flex flex-col relative">
            {/* Aura Blobs - Repositioned */}
            <div className="absolute top-5 left-1/4 w-32 h-32 bg-pink-300 rounded-full opacity-50 animate-blob z-0"></div>
            <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-red-400 rounded-full opacity-50 animate-blob z-0"></div>
            <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-orange-400 rounded-full opacity-50 animate-blob z-0"></div>
            <div className="absolute bottom-16 right-5 w-36 h-36 bg-pink-600 rounded-full opacity-50 animate-blob z-0"></div> 
            
            <section id="rush-video" className="w-full py-12 md:py-24 z-10 relative">
                <div className="mt-44">
                    {/* Your next section content goes here */}
                </div>
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                            Experience θΤ Rush
                        </h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            Get a glimpse of what it's like to be part of Theta Tau. Watch our rush video and see why we're more than just a fraternity.
                        </p>
                        <div className="w-full max-w-4xl aspect-video overflow-hidden rounded-xl border bg-muted">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://youtube.com/embed/manQodkwLmA"
                                title="Theta Tau Rush Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Watch our Spring 2025 Rush Video
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}



// import { Instagram, Play } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function RushVideo() {
//   return (
//     <div className="min-h-screen bg-background flex flex-col">
//       <section id="rush-video" className="w-full py-12 md:py-24">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center space-y-4 text-center">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience θT Rush</h2>
//             <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
//               Get a glimpse of what it's like to be part of Theta Tau.
//             </p>
//             <div className="w-full max-w-4xl aspect-video overflow-hidden rounded-xl border bg-muted">
//               <video
//                 src="/RushTT.mp4"
//                 controls
//                 className="w-full h-full object-cover"
//                 aria-label="Rush Video"
//               >
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//             <p className="text-sm text-muted-foreground">Click to play our 2024 Rush Video</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
