import Image from "next/image"
import { Instagram, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"


export default function RushVideo() {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <section id="rush-video" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience θT Rush</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Get a glimpse of what it's like to be part of Theta Tau. 
              </p>
              <div className="w-full max-w-4xl aspect-video overflow-hidden rounded-xl border bg-muted">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Theta Tau Rush Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-muted-foreground">
                Click to play our 2024 Rush Video
              </p>
            </div>
          </div>
        </section>
      </div>
    )
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
