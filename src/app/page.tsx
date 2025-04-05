// import React from 'react';

// import { HomeBlogSection } from '@/components/home/home-blog-section';
// import { HomeCTA } from '@/components/home/home-cta';
// import { HomeOurNetwork } from '@/components/home/home-our-network';
// import { HomeHeroParallax } from '@/components/home/home-hero-parallax';
// import { HomeAboutSection } from '@/components/home/home-about-section';

// export default function Home() {
//   const products = [
//     {
//       title: "Nationals Trip",
//       link: "#",
//       thumbnail: "/20240217_185908_709DFE.jpeg"
//     },
//     {
//       title: "Nationals Trip",
//       link: "#",
//       thumbnail: "/20240217_185909_729EA7.jpeg"
//     },
//     {
//       title: "Computer Building Site Tour",
//       link: "#",
//       thumbnail: "/20240428_211420_7565D5.jpeg"
//     },
//     {
//       title: "Brotherhood Retreat",
//       link: "#",
//       thumbnail: "/20240827_174150_7A6F7D.jpeg"
//     },
//     {
//       title: "Engineering Lab",
//       link: "#",
//       thumbnail: "/20240828_105839_71B492.jpeg"
//     },
//     {
//       title: "Technical Workshop",
//       link: "#",
//       thumbnail: "/20240828_112338_74F3CE.jpeg"
//     },
//     {
//       title: "Leadership Retreat",
//       link: "#",
//       thumbnail: "/20240908_150702_701104.jpeg"
//     },
//     {
//       title: "Tailgate",
//       link: "#",
//       thumbnail: "/20240908_155357_72477F.jpeg"
//     },    
//     {
//       title: "Pumpkin Carving",
//       link: "#",
//       thumbnail: "/20241028_205300_70BC9E.jpeg"
//     },
//     {
//       title: "Volunteer Work",
//       link: "#",
//       thumbnail: "/20240908_153036_7DEC2C.jpeg"
//     },
//     {
//       title: "Evening Social",
//       link: "#",
//       thumbnail: "/20240908_204437_752C9A.jpeg"
//     },
//     {
//       title: "Brotherhood Retreat",
//       link: "#",
//       thumbnail: "/20240910_215141_750658.jpeg"
//     },
//     {
//       title: "Crazy Legs Run",
//       link: "#",
//       thumbnail: "/3932.jpg"
//     },
//     {
//       title: "Brotherhood Retreat",
//       link: "#",
//       thumbnail: "/IMG_3469-2-1024x703.jpg"
//     },
//     {
//       title: "Philanthropy and Service",
//       link: "#",
//       thumbnail: "/88343.jpg"
//     }
//   ];

//   const content = [
//     {
//       title: "Brotherhood",
//       description:
//         "Connect with fellow engineers who share your passion and drive. Build meaningful relationships through social events, networking opportunities, and collaborative projects that enhance both your personal and professional growth.",
//       content: (
//         <div className="h-full w-full flex items-center justify-center text-white relative">
//           <img src="/20240828_112338_74F3CE.jpeg" alt="Social" className="absolute inset-0 w-full h-full object-cover" />
//         </div>
//       ),
//     },
//     {
//       title: "Philanthropy and Service",
//       description:
//         "Engage in impactful community service projects and philanthropic initiatives. Through organized events and volunteer opportunities, we work together to create positive change in our local communities and beyond.",
//       content: (
//         <div className="h-full w-full flex items-center justify-center text-white relative">
//           <img src="/94883.jpg" alt="Philanthropy and Service" className="absolute inset-0 w-full h-full object-cover" />
//         </div>
//       ),
//     },
//     {
//       title: "Academic Support",
//       description:
//         "Access a strong network of peer support and academic resources. Benefit from study groups, tutoring sessions, and shared expertise to excel in your engineering coursework and technical development.",
//       content: (
//         <div className="h-full w-full flex items-center justify-center text-white relative">
//           <img src="/20241013_152243_70FCCD.jpeg" alt="Academic Support" className="absolute inset-0 w-full h-full object-cover" />
//         </div>
//       ),
//     },
//     {
//       title: "Professional Development",
//       description:
//         "Advance your career through industry connections, technical workshops, and leadership opportunities. Gain practical experience and develop essential skills that prepare you for success in the engineering field.",
//       content: (
//         <div className="h-full w-full flex items-center justify-center text-white relative">
//           <img src="/IMG_3889.jpg" alt="Professional Development" className="absolute inset-0 w-full h-full object-cover" />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <HomeHeroParallax products={products} />

//       {/* About Section */}
//       <HomeAboutSection content={content} />

//       {/* Alumni Section */}
//       <HomeOurNetwork />

//       {/* Blog Section */}
//       <HomeBlogSection />

//       {/* Bottom CTA */}
//       <HomeCTA />
//     </div>
//   );
// }


import RushFlyer  from "@/components/rush/rush-flyer"
import {RecruitmentHero} from "@/components/rush/rush-header"
import  RushWhyUs  from "@/components/rush/rush-why-us"
import RushVideo from "@/components/rush/rush-video"
import RushInstagram from "@/components/rush/rush-instagram"
import RushImage from "@/components/rush/rush-image"
import { RushFAQ }  from "@/components/rush/rush-faq"
import React from 'react'
import {HomeOurNetwork} from  "@/components/new-home/home-network"
import {HeroSection} from  "@/components/new-home/home-header"
import {EngineeringExpoSection} from  "@/components/new-home/home-expo"
import {ContactSection} from  "@/components/new-home/home-contacts"
import { HomeAboutSection } from "@/components/new-home/home-about"
import { HomeBlogSection } from "@/components/new-home/home-blog"

export default function AboutUs() {
    return (
      <div>
        <main>
        {/* <section id="rush-header">
          <RecruitmentHero />
          </section>
          <section id="rush-video">
            <RushVideo />
          </section>
          <section id="rush-why-us">
            <RushWhyUs />
          </section>
          <section id="rush-image">
            <RushImage />
          </section>
          <section id="rush-instagram">
            <RushInstagram />
          </section>
          <section id="rush-faq">
            <RushFAQ />
          </section> */}
          <section id="home-header">
            <HeroSection />
          </section>
          <section id="home-about">
            <HomeAboutSection />
          </section>
          <section id="home-expo">
            <EngineeringExpoSection />
          </section>
          <section id="home-network">
            <HomeOurNetwork />
          </section>
          <section id="home-blog">
            <HomeBlogSection />
          </section>
          <section id="home-contact">
            <ContactSection />
          </section>
        </main>
      </div>
    );
  }