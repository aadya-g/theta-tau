import React from 'react';

import { HeroParallax } from "@/components/ui/hero-parallax";
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { AlumniPlacementGrid } from '@/components/sections/alumni-placement-grid';

export default function Home() {
  const products = [
    {
      title: "Theta Tau House",
      link: "#",
      thumbnail: "/TT_house_img.jpg"
    },
    {
      title: "Brotherhood",
      link: "#",
      thumbnail: "/IMG_3469-2-1024x703.jpg"
    },
    {
      title: "Community",
      link: "#",
      thumbnail: "/IMG_3471-1024x738.jpg"
    },
    {
      title: "Leadership",
      link: "#",
      thumbnail: "/IMG_4186-768x1024.jpg"
    },
    {
      title: "Engineering Excellence",
      link: "#",
      thumbnail: "/20240128_175030_71EB21-1024x768.png"
    }
  ];

  const content = [
    {
      title: "Fraternal Bonding",
      description:
        "Unite with your brothers and sisters in a shared mission. Our platform fosters a sense of community and belonging, allowing you to connect with like-minded individuals on a deeper level. With our platform, you can build lasting relationships that transcend beyond the boundaries of your chapter.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Fraternal Bonding
        </div>
      ),
    },
    {
      title: "Philanthropy and Service",
      description:
        "Make a difference in the lives of others. Our platform empowers you to organize and participate in meaningful philanthropic events and community service projects. By working together, you can create a lasting impact on the world around you.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Philanthropy and Service
        </div>
      ),
    },
    {
      title: "Academic Support",
      description:
        "Support your brothers and sisters in their academic pursuits. Our platform provides a network of peers who can offer guidance, resources, and encouragement. By working together, you can achieve academic success and build a stronger, more supportive community.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Academic Support
        </div>
      ),
    },
    {
      title: "Leadership Development",
      description:
        "Develop your leadership skills and take on new challenges. Our platform provides opportunities for you to step up and take on leadership roles, helping you grow as a person and develop valuable skills.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Leadership Development
        </div>
      ),
    },
  ];


  const people: any[] = [];

  return (
    <div className="min-h-screen bg-gray-100">

      <main>
        {/* Hero Section */}
        <HeroParallax products={products} />;

        {/* About Section */}
        <StickyScroll content={content} />

        {/* Blog Section */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Latest from Our Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Replace with actual blog post data */}
              {[1, 2, 3].map((post) => (
                <div key={post} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={`/path-to-blog-image-${post}.jpg`} alt={`Blog post ${post}`} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="font-semibold text-xl mb-2">Blog Post Title {post}</h3>
                    <p className="text-gray-600 mb-4">Short excerpt from the blog post...</p>
                    <a href="#" className="text-blue-600 hover:underline">Read more</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Placement Section */}
        <AlumniPlacementGrid />


        {/* Join Section */}

        <section id="join" className="bg-gray-200 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Join Theta Tau</h2>
            <div className="max-w-md mx-auto">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Request Information
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="text-center">
              <p className="mb-4">Email: contact@thetatau.org</p>
              <p className="mb-4">Phone: (555) 123-4567</p>
              <p>Address: 123 Engineering Way, University Campus, State, ZIP</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Theta Tau Engineering Fraternity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
