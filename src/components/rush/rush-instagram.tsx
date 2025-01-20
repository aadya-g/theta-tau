// import Image from "next/image"
// import Link from "next/link"
// import { Instagram, Play } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// export default function RushInstagram() {
//   return (
//     <div className="min-h-screen bg-background flex flex-col">
//         <section id="instagram" className="w-full py-12 md:py-24 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center space-y-4 text-center">
//               <Instagram className="h-16 w-16" />
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Follow Our Journey</h2>
//               <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
//                 Stay updated with our latest events, projects, and brotherhood activities on Instagram.
//               </p>
//               <Button size="lg" asChild className="mt-4 bg-white text-pink-600 hover:bg-gray-100">
//                 <Link href="https://www.instagram.com/thetatauxi" target="_blank" rel="noopener noreferrer">
//                   Follow @thetatauxi
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </section>
//     </div>
//   )
// }

import Image from "next/image"
import Link from "next/link"
import { Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function RushInstagram() {
  return (
    <div className="bg-background">
        <section id="instagram" className="w-full py-6 md:py-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Instagram className="h-16 w-16" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Follow Our Journey</h2>
              <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                Stay updated with our latest events, projects, and brotherhood activities on Instagram.
              </p>
              <Button size="lg" asChild className="mt-4 bg-white text-pink-600 hover:bg-gray-100">
                <Link href="https://www.instagram.com/thetatauxi" target="_blank" rel="noopener noreferrer">
                  Follow @thetatauxi
                </Link>
              </Button>
            </div>
          </div>
        </section>
    </div>
  )
}
