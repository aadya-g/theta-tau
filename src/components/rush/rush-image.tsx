// // 'use client'

// // import Image from "next/image"
// // import Link from "next/link"
// // import { Instagram, Play } from 'lucide-react'
// // import { Button } from "@/components/ui/button"
// // import { useEffect, useRef } from "react"


// // export default function RushImage() {
// //     const scrollRef = useRef<HTMLDivElement>(null)

// //   useEffect(() => {
// //     const scrollContainer = scrollRef.current
// //     if (scrollContainer) {
// //       const scrollContent = Array.from(scrollContainer.children)
// //       scrollContent.forEach((item) => {
// //         const duplicatedItem = item.cloneNode(true)
// //         scrollContainer.appendChild(duplicatedItem)
// //       })

// //       const scroll = () => {
// //         if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
// //           scrollContainer.scrollLeft = 0
// //         } else {
// //           scrollContainer.scrollLeft += 1
// //         }
// //       }

// //       const scrollInterval = setInterval(scroll, 30)

// //       return () => clearInterval(scrollInterval)
// //     }
// //   }, [])
// //     return (

// //         <section className="w-full py-12 md:py-24 overflow-hidden">
// //           <div className="container px-4 md:px-6">
// //             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Life at Theta Tau</h2>
// //             <div 
// //               ref={scrollRef}
// //               className="flex overflow-x-hidden space-x-4 pb-4"
// //               style={{ 
// //                 width: "calc(100% + 2rem)",
// //                 marginLeft: "-1rem",
// //                 marginRight: "-1rem"
// //               }}
// //             >
// //               {[
// //                 { alt: "comm serve", src: "/thumbnail_IMG_4179-1024x768.jpg" },
// //                 { alt: "Theta Tau workshop", src: "/20241028_205300_70BC9E.jpeg.jpeg" },
// //                 { alt: "Theta Tau alumni meetup", src: "/20240827_174150_7A6F7D.jpeg" },
// //                 { alt: "Theta Tau campus event", src: "/10861.jpg.jpg" },
// //                 { alt: "Theta Tau hackathon", src: "/20240908_204437_752C9A.jpeg" },
// //                 { alt: "Theta Tau career fair", src: "/public/IMG_4185-1024x768.jpg.jpg" },
// //               ].map((item, index) => (
// //                 <div key={index} className="flex-shrink-0 w-64 h-64 overflow-hidden rounded-xl">
// //                   <Image
// //                     alt={item.alt}
// //                     className="object-cover w-full h-full"
// //                     height="300"
// //                     src={`/placeholder.svg?height=300&width=300&text=${item.src.replace(' ', '+')}`}
// //                     width="300"
// //                   />
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>
// //     )
// //               }
// 'use client'

// import Image from "next/image"
// import Link from "next/link"
// import { Instagram, Play } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { useEffect, useRef } from "react"

// export default function RushImage() {
//   <section className="w-full py-12 md:py-24 bg-gray-100">
//             <div className="container px-4 md:px-6">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-maroon-700">Life at Epsilon Pi Tau</h2>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 group">
//                 [
//     { alt: "Theta Tau social event", src: "/images/social-event.jpg" },
//     { alt: "Theta Tau workshop", src: "/images/workshop.jpg" },
//     { alt: "Theta Tau alumni meetup", src: "/images/alumni-meetup.jpg" },
//     { alt: "Theta Tau campus event", src: "/images/campus-event.jpg" },
//     { alt: "Theta Tau hackathon", src: "/images/hackathon.jpg" },
//     { alt: "Theta Tau career fair", src: "/images/career-fair.jpg" },
//     { alt: "Theta Tau study group", src: "/images/study-group.jpg" },
//     { alt: "Theta Tau volunteer work", src: "/images/volunteer-work.jpg" },
//   ].map((item, index) => (
//     <Image
//       key={index}
//       alt={item.alt}
//       className="object-cover w-full h-full"
//       height="300"
//       src={item.src}
//       width="300"
//     />
//   ))
//               </div>
//             </div>
//           </section>
//           )
// }
'use client'
import Image from "next/image"
import Link from "next/link"
import { Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function RushPage() {
  const activities = [
    { title: "Brotherhood Retreat", description: "Brotherhood in Theta Tau means joining a supportive community of peers who share your goals and passions. Become part of something bigger—where you’ll find encouragement, connections, and opportunities to succeed.", image: "/20240908_204437_752C9A.jpeg?height=400&width=600&text=Brotherhood+Retreat" },
    { title: "Professional Development", description: "Connect with successful θT alumni. Gain skills and connections to jumpstart your career. Learn more about our professional network on our ", image: "/fall24elections.jpg?height=400&width=600&text=Pro+Dev", link: "https://www.linkedin.com/your-linkedin-profile" },
    { title: "Food Fridays", description: "Experience the vibrant life at Theta Tau. Our Food Fridays foster strong bonds and create lasting memories among brothers.", image: "/20241124_104032_7C0C75.JPEG?height=400&width=600&text=Food+Fridays" },
    { title: "Study Tables", description: "Stay motivated, learn from peers, and excel academically while building strong connections with fellow engineering students.", image: "/electionscandid.JPG?height=400&width=600&text=Study+Tables" },
    { title: "Career Fairs", description: "Explore career building opportunities at our exclusive career fair workshops. Elevate your resume, sharpen your interview skills, and unlock doors to internships and jobs that set you apart.", image: "/20240428_211420_7565D5-768x1024.jpeg?height=400&width=600&text=Career+Fair" },
    { title: "Community Service", description: "Make a positive impact on your community and grow alongside your fellow brothers while building teamwork and leadership skills.", image: "/94883.jpg?height=400&width=600&text=Comm+Serve" }
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-white relative">
      {/* Aura Blobs */}
      <div className="absolute top-5 left-1/4 w-32 h-32 bg-pink-300 rounded-full opacity-50 animate-blob z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-red-400 rounded-full opacity-50 animate-blob z-0"></div>
      <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-orange-400 rounded-full opacity-50 animate-blob z-0"></div>
      <div className="absolute bottom-16 right-5 w-36 h-36 bg-pink-600 rounded-full opacity-50 animate-blob z-0"></div>

      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-maroon-700">Life at Theta Tau</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="flex flex-col space-y-4 relative z-10">
              <div className="aspect-video overflow-hidden rounded-xl shadow-lg">
                <Image
                  alt={`Theta Tau ${activity.title}`}
                  className="object-cover w-full h-full"
                  height="400"
                  src={activity.image || "/placeholder.svg"}
                  width="600"
                />
              </div>
              <h3 className="text-xl font-bold text-maroon-700">{activity.title}</h3>
              <p className="text-gray-600">
                {activity.link ? (
                  <>
                    {activity.description}{" "}
                    <a href={activity.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      LinkedIn page
                    </a>
                  </>
                ) : activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}