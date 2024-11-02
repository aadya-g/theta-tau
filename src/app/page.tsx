import React from 'react';

import { HeroParallax } from "@/components/ui/hero-parallax";
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { AlumniPlacementGrid } from '@/components/sections/alumni-placement-grid';
import { HomeBlogSection } from '@/components/sections/home-blog-section';
import { BottomCTA } from '@/components/sections/bottom-cta';
import { Footer } from '@/components/ui/footer';

export default function Home() {
  const products = [
    {
      title: "Brotherhood Events",
      link: "#",
      thumbnail: "/20240217_185908_709DFE.jpeg"
    },
    {
      title: "Community Gathering",
      link: "#",
      thumbnail: "/20240217_185909_729EA7.jpeg"
    },
    {
      title: "Spring Social",
      link: "#",
      thumbnail: "/20240428_211420_7565D5.jpeg"
    },
    {
      title: "Summer Workshop",
      link: "#",
      thumbnail: "/20240827_174150_7A6F7D.jpeg"
    },
    {
      title: "Engineering Lab",
      link: "#",
      thumbnail: "/20240828_105839_71B492.jpeg"
    },
    {
      title: "Technical Workshop",
      link: "#",
      thumbnail: "/20240828_112338_74F3CE.jpeg"
    },
    {
      title: "Community Service",
      link: "#",
      thumbnail: "/20240908_150702_701104.jpeg"
    },
    {
      title: "Volunteer Work",
      link: "#",
      thumbnail: "/20240908_153036_7DEC2C.jpeg"
    },
    {
      title: "Team Building",
      link: "#",
      thumbnail: "/20240908_155357_72477F.jpeg"
    },
    {
      title: "Evening Social",
      link: "#",
      thumbnail: "/20240908_204437_752C9A.jpeg"
    },
    {
      title: "Study Session",
      link: "#",
      thumbnail: "/20240910_215141_750658.jpeg"
    },
    {
      title: "Professional Development",
      link: "#",
      thumbnail: "/20241013_152243_70FCCD.jpeg"
    },
    {
      title: "Leadership Workshop",
      link: "#",
      thumbnail: "/20241027_172514_7FF17F.jpeg"
    },
    {
      title: "Chapter Meeting",
      link: "#",
      thumbnail: "/20241028_205300_70BC9E.jpeg"
    },
    {
      title: "Engineering Excellence",
      link: "#",
      thumbnail: "/IMG_3469-2-1024x703.jpg"
    }
  ];

  const content = [
    {
      title: "Fraternal Bonding",
      description:
        "Unite with your brothers and sisters in a shared mission. Our platform fosters a sense of community and belonging, allowing you to connect with like-minded individuals on a deeper level. With our platform, you can build lasting relationships that transcend beyond the boundaries of your chapter.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white relative">
          <img src="/20240428_211420_7565D5.jpeg" alt="Fraternal Bonding" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ),
    },
    {
      title: "Philanthropy and Service",
      description:
        "Make a difference in the lives of others. Our platform empowers you to organize and participate in meaningful philanthropic events and community service projects. By working together, you can create a lasting impact on the world around you.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white relative">
          <img src="/20240908_155357_72477F.jpeg" alt="Philanthropy and Service" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ),
    },
    {
      title: "Academic Support",
      description:
        "Support your brothers and sisters in their academic pursuits. Our platform provides a network of peers who can offer guidance, resources, and encouragement. By working together, you can achieve academic success and build a stronger, more supportive community.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white relative">
          <img src="/20241013_152243_70FCCD.jpeg" alt="Academic Support" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ),
    },
    {
      title: "Leadership Development",
      description:
        "Develop your leadership skills and take on new challenges. Our platform provides opportunities for you to step up and take on leadership roles, helping you grow as a person and develop valuable skills.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white relative">
          <img src="/20241027_172514_7FF17F.jpeg" alt="Leadership Development" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroParallax products={products} />

      {/* About Section */}
      <StickyScroll content={content} />

      {/* Blog Section */}
      <HomeBlogSection />

      {/* Alumni Placement Section */}
      <AlumniPlacementGrid />

      {/* Bottom CTA */}
      <BottomCTA />
    </div>
  );
}
