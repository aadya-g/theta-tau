// import Image from "next/image";

// export default function RushWhyUs() {
//     return (
//       <div className="min-h-screen bg-background flex flex-col">
//             <section id="why-us" className="w-full py-12 md:py-24 bg-muted">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col md:flex-row gap-8 items-center">
//               {/* Image Section */}
//               <div className="md:w-1/2 aspect-square overflow-hidden rounded-xl">
//                 <Image
//                   alt="Theta Tau members"
//                   className="object-cover"
//                   height="600"
//                   src="/20240128_175030_71EB21-1024x768.jpeg?height=600&width=600"
//                   style={{
//                     aspectRatio: "1/1",
//                     objectFit: "cover",
//                   }}
//                   width="600"
//                 />
//               </div>
//               {/* Text Section */}
//               <div className="md:w-1/2 space-y-4">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Join Theta Tau?</h2>
//                 <div className="space-y-4 text-muted-foreground">
//                   <p>
//                     Theta Tau offers a unique blend of professional development, philanthropic service, and lifelong brotherhood. As a member, you'll join a community of like-minded engineers who support and inspire each other to reach new heights in their careers and personal lives.
//                   </p>
//                   <p>
//                     Our fraternity provides unparalleled opportunities for leadership development, allowing you to take on roles that will enhance your organizational and management skills. We understand the importance of collaboration, innovation, and leadership in shaping the world around us and foster these qualities through workshops and networking events that prepare members for successful careers.
//                   </p>
//                   <p>
//                     We pride ourselves on our strong alumni network, which opens doors to internships, job opportunities, and mentorship from successful professionals in various engineering fields. By joining Theta Tau, you're not just part of a college organization- you're joining a lifelong community dedicated to advancing the engineering profession.
//                   </p>
//                 </div>
//                 {/* Uncomment if you want to add a button */}
//                 {/* <Button size="lg" className="mt-4">Learn More About θΤ</Button> */}
//               </div>
//             </div>
//           </div>
//         </section>
//         </div>
//     );
// }

import Image from "next/image";

export default function RushWhyUs() {
    return (
        <div className="min-h-screen bg-background flex flex-col relative">
            {/* Aura Blobs */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-pink-300 rounded-full opacity-50 animate-blob"></div>
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-red-400 rounded-full opacity-50 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-400 rounded-full opacity-50 animate-blob"></div>
            <div className="absolute top-3/4 right-1/3 w-36 h-36 bg-pink-600 rounded-full opacity-50 animate-blob"></div>

            <section
                id="why-us"
                className="w-full py-12 md:py-24 z-10 relative"
            >
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Image Section */}
                        <div className="md:w-1/2 aspect-square overflow-hidden rounded-xl">
                            <Image
                                alt="Theta Tau members"
                                className="object-cover"
                                height="600"
                                src="/spring25pc_banquet.jpeg?height=600&width=600"
                                style={{
                                    aspectRatio: "1/1",
                                    objectFit: "cover",
                                }}
                                width="600"
                            />
                        </div>
                        {/* Text Section */}
                        <div className="md:w-1/2 space-y-6 p-6">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Why Join Theta Tau?
                            </h2>
                            <div className="space-y-4 text-gray-700 md:text-lg">
                                <p>
                                    Theta Tau offers a unique blend of professional development, philanthropic service, and lifelong brotherhood. As a member, you'll join a community of like-minded engineers who support and inspire each other to reach new heights in their careers and personal lives.
                                </p>
                                <p>
                                    Our fraternity provides unparalleled opportunities for leadership development, allowing you to take on roles that will enhance your organizational and management skills.
                                </p>
                                <p>
                                    We pride ourselves on our strong alumni network, which opens doors to internships, job opportunities, and mentorship. By joining Theta Tau, you're not just part of a college organization—you're joining a lifelong community.
                                </p>
                            </div>
                            {/* Button Section with Gap */}
                            <div className="mt-4">
                                <a
                                    href="https://thetatau.org/" // Replace with your desired link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-black/80 transition-all">
                                        Learn More About θT
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
