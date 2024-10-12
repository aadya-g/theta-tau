import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import Link from 'next/link';
import { PinContainer } from '@/components/ui/3d-pin';
import EngineeringDisciplines from '@/components/sections/engineering-disciplines';

export default function Home() {
  const products = [
    { title: "Image", link: "#", thumbnail: <Image src="/../../public/20240128_175030_71EB21-1024x768.png" width={150} height={150} alt="Image" /> },
    { title: "Product 2", link: "#", thumbnail: <Image src="public/20240217_185901_798044-e1714667798388-edited.jpeg" width={150} height={150} alt="Product 2" /> },
    { title: "Product 3", link: "#", thumbnail: <Image src="https://via.placeholder.com/150" width={150} height={150} alt="Product 3" /> },
    { title: "Product 4", link: "#", thumbnail: <Image src="https://via.placeholder.com/150" width={150} height={150} alt="Product 4" /> },
    { title: "Product 5", link: "#", thumbnail: <Image src="https://via.placeholder.com/150" width={150} height={150} alt="Product 5" /> },
    { title: "Product 6", link: "#", thumbnail: <Image src="https://via.placeholder.com/150" width={150} height={150} alt="Product 6" /> },
  ];

  const people: any[] = [];
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     designation: "Software Engineer",
  //     image:
  //       "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  //   },
  //   {
  //     id: 2,
  //     name: "Robert Johnson",
  //     designation: "Product Manager",
  //     image:
  //       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   {
  //     id: 3,
  //     name: "Jane Smith",
  //     designation: "Data Scientist",
  //     image:
  //       "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   {
  //     id: 4,
  //     name: "Emily Davis",
  //     designation: "UX Designer",
  //     image:
  //       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //   },
  //   {
  //     id: 5,
  //     name: "Tyler Durden",
  //     designation: "Soap Developer",
  //     image:
  //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  //   },
  //   {
  //     id: 6,
  //     name: "Dora",
  //     designation: "The Explorer",
  //     image:
  //       "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  //   },
  // ];


  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Theta Tau Engineering Fraternity</title>
        <meta name="description" content="Theta Tau Professional Engineering Fraternity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold">Θτ</div>
          <ul className="flex space-x-4">
            <li><Link href="#about" className="hover:text-blue-200">About Us</Link></li>
            <li><a href="#join" className="hover:text-blue-200">Join</a></li>
            <li><a href="#events" className="hover:text-blue-200">Events</a></li>
            <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <HeroParallax products={products} />;

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-indigo-800">About Theta Tau</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <img src="/images/theta-tau-group.jpg" alt="Theta Tau members" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-red-600 hover:text-red-800 transition-colors duration-300">Oldest Engineering Fraternity</h3>
                  <p className="text-gray-700">Founded in 1904 at the University of Minnesota, Theta Tau has initiated over 40,000 members and maintains a strong presence at ABET accredited schools.</p>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <img src="/images/professional-development.jpg" alt="Professional development" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-red-600 hover:text-red-800 transition-colors duration-300">Professional Excellence</h3>
                    <p className="text-gray-700 text-sm">We foster high standards of professional interest and ethics among our members.</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <img src="/images/fraternal-bond.jpg" alt="Fraternal bond" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-red-600 hover:text-red-800 transition-colors duration-300">Strong Brotherhood</h3>
                    <p className="text-gray-700 text-sm">Our fraternity unites members in a strong bond of fraternal fellowship.</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 md:col-span-3 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="md:flex">
                  <img src="/images/engineering-projects.jpg" alt="Engineering projects" className="w-full md:w-1/3 h-64 object-cover" />
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-4 text-red-600 hover:text-red-800 transition-colors duration-300">Hands-on Experience</h3>
                    <p className="text-gray-700">Theta Tau provides numerous opportunities for members to engage in real-world engineering projects, enhancing their skills and preparing them for successful careers in the field.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section className="h-[40rem] w-full flex items-center justify-center flex-col">
          <h2 className="text-3xl font-bold mb-8 text-center">Who are we?</h2>
          <AnimatedTooltip items={[]} />
          <h1 className="text-5xl font-bold mb-8 text-center">IMAGINE ITS HERE</h1>
        </section>



        <section className="h-[40rem] w-full flex items-center justify-center flex-col">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Where are we located?</h2>
          </div>
          <PinContainer
            title="/google.com/maps"
            href="https://www.google.com/maps/place/1633+Monroe+St,+Madison,+WI+53711/@43.0651909,-89.4262828,14.5z/data=!4m6!3m5!1s0x8807acdcd3deaa2f:0xc01e3895e71db0ba!8m2!3d43.0662918!4d-89.414693!16s%2Fg%2F11c282dzwc?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Theta Tau House Location
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  1621 Engineering Drive, Madison, WI
                </span>
              </div>
              <img
                src={`https://maps.googleapis.com/maps/api/staticmap?center=43.066519075696945,-89.41472518969684&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C43.066519075696945,-89.41472518969684&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                alt="Theta Tau House Location"
                className="flex flex-1 w-full rounded-lg mt-4 object-cover"
              />
            </div>
          </PinContainer>
        </section>

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


