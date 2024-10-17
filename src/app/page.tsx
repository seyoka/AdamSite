// import Head from 'next/head'

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Adam Braddish | Tattoo Artist</title>
//         <meta name="description" content="Adam Braddish, Tattoo Artist located in Limerick. Specializing in custom tattoos." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Navbar */}
//       <nav className="flex justify-between items-center bg-black text-white py-4 px-8 fixed w-full z-50">
//         <div className="flex items-center">
//           <img src="/logo.svg" alt="Adam Braddish Logo" className="h-10 w-10 mr-3" style={{ filter: 'invert(1)' }} />
//           <div className="text-lg font-bold">Adam Braddish Tattoo</div>
//         </div>
//         <div className="space-x-6">
//           <a href="#about" className="hover:text-[#00e6ff]">About</a>
//           <a href="#services" className="hover:text-[#00e6ff]">Services</a>
//           <a href="#gallery" className="hover:text-[#00e6ff]">Gallery</a>
//           <a href="#contact" className="hover:text-[#00e6ff]">Contact</a>
//         </div>
//         <div className="space-x-6">
//           <a href="tel:+353871234567" className="hover:text-[#00e6ff]">📍 Limerick, Ireland</a>
//           <a href="#contact" className="bg-[#00e6ff] text-black px-4 py-2 rounded hover:bg-[#1e4c70]">Book Now</a>
//         </div>
//       </nav>

//       {/* Hero Section with Video Background */}
//       <header className="relative h-screen bg-cover bg-center">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source src="/tattoovid.MOV" type="video/mp4" />
//           <source src="/tattoovid.MOV" type="video/quicktime" /> 
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center">
//           <h1 className="text-6xl text-[#00e6ff] font-bold mb-6">Bookings are Open</h1>
//           <p className="text-[#00e6ff] text-2xl mb-8">Professional, High Quality tattoos</p>
//           <div className="space-x-4">
//             <a href="#contact" className="bg-[#00e6ff] text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#1e4c70]">Book Now</a>
//           </div>
//         </div>
//       </header>

//       {/* About Section */}
//       <section id="about" className="py-16 bg-white text-center">
//         <h2 className="text-5xl font-bold text-gray-900 mb-6">Adam Braddish</h2>
//         <p className="text-lg max-w-3xl mx-auto text-gray-600">Adam Braddish is a professional tattoo artist based in Limerick, Ireland. Specializing in custom tattoo designs, Adam brings your ideas to life with precision and artistry.</p>
//         <div className="flex justify-center mt-8">
//           <img src="/adam.jpg" alt="Adam Braddish" className="w-1/5 rounded-full shadow-lg" />
//         </div>
//         <p className='text-lg max-w-3xl mx-auto text-gray-600 mt-5'>Adam H.B</p>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-16 bg-black text-center">
//         <h2 className="text-4xl font-semibold mb-6 text-white">Services</h2>
//         <ul className="text-lg space-y-4 text-gray-400">
//           <li>Custom Tattoo Designs</li>
//           <li>Cover-ups</li>
//           <li>Black & Grey Tattoos</li>
//           <li>Fine Line & Geometric Tattoos</li>
//           <li>Consultation Sessions</li>
//         </ul>
//       </section>

//       {/* Gallery Section */}
//       <section id="gallery" className="py-16 bg-white text-center">
//   <h2 className="text-4xl font-semibold mb-6 text-black">Gallery</h2>
//   <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
//     <img src="/IMG_0224 2.jpg" alt="Tattoo 1" className="rounded-lg shadow-lg w-full h-96 object-cover" />
//     <img src="/IMG_0225.jpg" alt="Tattoo 2" className="rounded-lg shadow-lg w-full h-96 object-cover" />
//     <img src="/IMG_0227.JPG" alt="Tattoo 3" className="rounded-lg shadow-lg w-full h-96 object-cover" />
//     <img src="/IMG_0236.JPG" alt="Tattoo 4" className="rounded-lg shadow-lg w-full h-96 object-cover" />
//     <img src="/IMG_0238.JPG" alt="Tattoo 5" className="rounded-lg shadow-lg w-full h-96 object-cover" />
//     <img src="/IMG_0245.jpg" alt="Tattoo 6" className="rounded-lg shadow-lg w-full h-96 object-cover" />
//     <img src="/IMG_0246.jpg" alt="Tattoo 7" className="rounded-lg shadow-lg w-full h-96 object-cover" />
//     <img src="/IMG_0247.jpg" alt="Tattoo 8" className="rounded-lg shadow-lg w-full h-96 object-cover" />
//   </div>
// </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16 bg-black text-center text-white">
//         <h2 className="text-4xl font-semibold mb-6">Contact</h2>
//         <p className="text-lg mb-4">For bookings and inquiries:</p>
//         <p className="text-lg">
//           Email: <a href="mailto:adam_hb@yahoo.com" className="text-[#00e6ff]">adam_hb@yahoo.com</a>
//         </p>

//         <p className="text-lg">Location: Limerick, Ireland</p>
//       </section>

//       {/* Instagram Section */}
//       <section className="py-4 bg-black text-center">
//         <a href="https://www.instagram.com/adamhb_tattoos/profilecard/?igsh=NTUxYWh0eWkwMjll" target="_blank" rel="noopener noreferrer" className="text-[#00e6ff] text-lg">
//           Follow us on Instagram
//         </a>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-8 bg-black text-white">
//         <p>&copy; {new Date().getFullYear()} Adam Braddish. All Rights Reserved.</p>
//       </footer>
//     </div>
//   )
// }


// import Head from 'next/head'
// import Image from 'next/image'

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Adam Braddish | Tattoo Artist</title>
//         <meta name="description" content="Adam Braddish, Tattoo Artist located in Limerick. Specializing in custom tattoos." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Navbar */}
//       <nav className="flex justify-between items-center bg-black text-white py-4 px-4 md:px-8 fixed w-full z-50">
//         <div className="flex items-center">
//           <Image src="/logo.svg" alt="Adam HB Tattoo" width={40} height={40} className="mr-2" />
//           <div className="text-lg font-bold">Adam Braddish Tattoo</div>
//         </div>
//         <div className="hidden md:flex space-x-6">
//           <a href="#about" className="hover:text-[#00e6ff]">About</a>
//           <a href="#services" className="hover:text-[#00e6ff]">Services</a>
//           <a href="#gallery" className="hover:text-[#00e6ff]">Gallery</a>
//           <a href="#contact" className="hover:text-[#00e6ff]">Contact</a>
//         </div>
//         <div className="hidden md:flex space-x-6">
//           <a href="tel:+353871234567" className="hover:text-[#00e6ff]">📍 Limerick, Ireland</a>
//           <a href="#contact" className="bg-[#00e6ff] text-black px-4 py-2 rounded hover:bg-[#1e4c70]">Book Now</a>
//         </div>
//         <div className="md:hidden">
//           {/* Add a hamburger menu for mobile */}
//           <button className="text-white focus:outline-none">
//             ☰
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section with Video Background */}
//       <header className="relative h-screen bg-cover bg-center">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source src="/tattoovid.MOV" type="video/mp4" />
//           <source src="/tattoovid.MOV" type="video/quicktime" /> 
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center">
//           <h1 className="text-4xl md:text-6xl text-[#00e6ff] font-bold mb-6">Bookings are Open</h1>
//           <p className="text-lg md:text-2xl text-[#00e6ff] mb-8">Professional, High Quality tattoos</p>
//           <div className="space-x-4">
//             <a href="#contact" className="bg-[#00e6ff] text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#1e4c70]">Book Now</a>
//           </div>
//         </div>
//       </header>

//       {/* About Section */}
//       <section id="about" className="py-12 md:py-16 bg-white text-center">
//         <div className="max-w-xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex justify-center items-center">
//             <Image src="/logo.svg" alt="Logo" width={40} height={40} className="mr-2" />
//             Adam Braddish
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600">Adam Braddish is a professional tattoo artist based in Limerick, Ireland. Specializing in custom tattoo designs, Adam brings your ideas to life with precision and artistry.</p>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-12 md:py-16 bg-gray-100 text-center">
//         <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">Services</h2>
//         <ul className="text-lg space-y-4 text-gray-700">
//           <li>Custom Tattoo Designs</li>
//           <li>Cover-ups</li>
//           <li>Black & Grey Tattoos</li>
//           <li>Fine Line & Geometric Tattoos</li>
//           <li>Consultation Sessions</li>
//         </ul>
//       </section>

//       {/* Gallery Section */}
//       <section id="gallery" className="py-12 md:py-16 bg-white text-center">
//         <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">Gallery</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
//           <img src="/IMG_0224 2.jpg" alt="Tattoo 1" className="w-full h-full object-cover rounded-lg shadow-lg" />
//           <img src="/IMG_0225.jpg" alt="Tattoo 2" className="w-full h-full object-cover rounded-lg shadow-lg" />
//           <img src="/IMG_0227.JPG" alt="Tattoo 3" className="w-full h-full object-cover rounded-lg shadow-lg" />
//           <img src="/IMG_0236.JPG" alt="Tattoo 4" className="w-full h-full object-cover rounded-lg shadow-lg" />
//           <img src="/IMG_0238.JPG" alt="Tattoo 5" className="w-full h-full object-cover rounded-lg shadow-lg" />
//           <img src="/IMG_0245.jpg" alt="Tattoo 6" className="w-full h-full object-cover rounded-lg shadow-lg" />
//           <img src="/IMG_0246.jpg" alt="Tattoo 7" className="w-full h-full object-cover rounded-lg shadow-lg" />
//           <img src="/IMG_0247.jpg" alt="Tattoo 8" className="w-full h-full object-cover rounded-lg shadow-lg" />
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-12 md:py-16 bg-gray-100 text-center">
//         <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">Contact</h2>
//         <p className="text-lg mb-4 text-gray-700">For bookings and inquiries:</p>
//         <p className="text-lg">
//           Email: <a href="mailto:adam@tattooslimerick.com" className="text-blue-500">adam@tattooslimerick.com</a>
//         </p>
//         <p className="text-lg">
//           Phone: <a href="tel:+353871234567" className="text-blue-500">+353 87 123 4567</a>
//         </p>
//         <p className="text-lg">Location: Limerick, Ireland</p>
//         <a href="https://instagram.com" className="mt-4 inline-block bg-[#00e6ff] text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#1e4c70]">Follow on Instagram</a>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-8 bg-black text-white">
//         <p>&copy; {new Date().getFullYear()} Adam Braddish. All Rights Reserved.</p>
//       </footer>
//     </div>
//   )
// }

// "use client"
// import { useState } from 'react'
// import Head from 'next/head'

// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div>
//       <Head>
//         <title>Adam Braddish | Tattoo Artist</title>
//         <meta name="description" content="Adam Braddish, Tattoo Artist located in Limerick. Specializing in custom tattoos." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Navbar */}
//       <nav className="flex justify-between items-center bg-black text-white py-4 px-8 fixed w-full z-50">
//         <div className="flex items-center">
//           <img src="/logo.svg" alt="Adam Braddish Logo" className="h-10 w-10 mr-3" style={{ filter: 'invert(1)' }} />
//           <div className="text-lg font-bold">Adam Braddish Tattoo</div>
//         </div>
//         <div className="hidden md:flex space-x-6">
//           <a href="#about" className="hover:text-[#00e6ff]">About</a>
//           <a href="#services" className="hover:text-[#00e6ff]">Services</a>
//           <a href="#gallery" className="hover:text-[#00e6ff]">Gallery</a>
//           <a href="#contact" className="hover:text-[#00e6ff]">Contact</a>
//         </div>
//         <div className="hidden md:flex space-x-6">

//           <a href="#contact" className="bg-[#00e6ff] text-black px-4 py-2 rounded hover:bg-[#1e4c70]">Book Now</a>
//         </div>

// {/* Burger Menu Button */}
// <button
//   className="text-white focus:outline-none block md:hidden"
//   onClick={() => setMenuOpen(!menuOpen)}
// >
//   <svg
//     className="h-8 w-8"
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//     />
//   </svg>
// </button>

// {/* Dropdown Menu (Mobile) */}
// <div
//   className={`${
//     menuOpen ? "block" : "hidden"
//   } absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center z-50 space-y-4 py-4`}
// >
//   <a href="#about" className="text-lg hover:text-[#00e6ff] py-2">About</a>
//   <a href="#services" className="text-lg hover:text-[#00e6ff] py-2">Services</a>
//   <a href="#gallery" className="text-lg hover:text-[#00e6ff] py-2">Gallery</a>
//   <a href="#contact" className="text-lg hover:text-[#00e6ff] py-2">Contact</a>
//   <a
//     href="#contact"
//     className="bg-[#00e6ff] text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#1e4c70] mt-4"
//   >
//     Book Now
//   </a>
// </div>


//       {/* Hero Section with Video Background */}
//       <header className="relative h-screen bg-cover bg-center">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source src="/tattoovid.MOV" type="video/mp4" />
//           <source src="/tattoovid.MOV" type="video/quicktime" /> 
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center">
//           <h1 className="text-5xl md:text-6xl text-[#00e6ff] font-bold mb-6">Bookings are Open</h1>
//           <p className="text-[#00e6ff] text-xl md:text-2xl mb-8">Professional, High Quality tattoos</p>
//           <div className="space-x-4">
//             <a href="#contact" className="bg-[#00e6ff] text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#1e4c70]">Book Now</a>
//           </div>
//         </div>
//       </header>

//       {/* About Section */}
//       <section id="about" className="py-12 md:py-16 bg-white text-center">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Adam Braddish</h2>
//         <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-600">Adam Braddish is a professional tattoo artist based in Limerick, Ireland. Specializing in custom tattoo designs, Adam brings your ideas to life with precision and artistry.</p>
//         <div className="flex justify-center mt-8">
//           <img src="/adam.jpg" alt="Adam Braddish" className="w-1/3 md:w-1/5 rounded-full shadow-lg" />
//         </div>
//         <p className='text-base md:text-lg max-w-3xl mx-auto text-gray-600 mt-5'>Adam H.B</p>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-12 md:py-16 bg-black text-center">
//         <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">Services</h2>
//         <ul className="text-sm md:text-lg space-y-4 text-gray-400">
//           <li>Custom Tattoo Designs</li>
//           <li>Cover-ups</li>
//           <li>Black & Grey Tattoos</li>
//           <li>Fine Line & Geometric Tattoos</li>
//           <li>Consultation Sessions</li>
//         </ul>
//       </section>

//       {/* Gallery Section */}
//       <section id="gallery" className="py-12 md:py-16 bg-white text-center">
//         <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-black">Gallery</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
//           <img src="/IMG_0224 2.jpg" alt="Tattoo 1" className="rounded-lg shadow-lg w-full h-72 md:h-96 object-cover" />
//           <img src="/IMG_0225.jpg" alt="Tattoo 2" className="rounded-lg shadow-lg w-full h-72 md:h-96 object-cover" />
//           <img src="/IMG_0227.JPG" alt="Tattoo 3" className="rounded-lg shadow-lg w-full h-72 md:h-96 object-cover" />
//           <img src="/IMG_0236.JPG" alt="Tattoo 4" className="rounded-lg shadow-lg w-full h-72 md:h-96 object-cover" />
//           <img src="/IMG_0238.JPG" alt="Tattoo 5" className="rounded-lg shadow-lg w-full h-72 md:h-96 object-cover" />
//           <img src="/IMG_0245.jpg" alt="Tattoo 6" className="rounded-lg shadow-lg w-full h-72 md:h-96 object-cover" />
//           <img src="/IMG_0246.jpg" alt="Tattoo 7" className="rounded-lg shadow-lg w-full h-72 md:h-96 object-cover" />
//           <img src="/IMG_0247.jpg" alt="Tattoo 8" className="rounded-lg shadow-lg w-full h-72 md:h-96 object-cover" />
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-12 md:py-16 bg-black text-center text-white">
//         <h2 className="text-3xl md:text-4xl font-semibold mb-6">Contact</h2>
//         <p className="text-sm md:text-lg mb-4">For bookings and inquiries:</p>
//         <p className="text-sm md:text-lg">
//           Email: <a href="mailto:adam_hb@yahoo.com" className="text-[#00e6ff]">adam_hb@yahoo.com</a>
//         </p>
//         <p className="text-sm md:text-lg">Location: Limerick, Ireland</p>
//       </section>

//       {/* Instagram Section */}
//       <section className="py-4 bg-black text-center">
//         <a href="https://www.instagram.com/adamhb_tattoos/profilecard/?igsh=NTUxYWh0eWkwMjll" target="_blank" rel="noopener noreferrer" className="text-[#00e6ff] text-lg">
//           Follow us on Instagram
//         </a>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-8 bg-black text-white">
//         <p>&copy; {new Date().getFullYear()} Adam Braddish. All Rights Reserved.</p>
//       </footer>
//     </div>
//   )
// }
"use client"
import Head from 'next/head'
import { useState } from 'react' // Import useState

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  return (
    <div>
        <Head>
          <title>Adam Braddish | Tattoo Artist</title>
          <meta name="description" content="Adam Braddish, Tattoo Artist located in Limerick. Specializing in custom tattoos." />
          <link rel="icon" href="/logo.webp" type="image/png" />
        </Head>

      {/* Navbar */}
      <nav className="flex justify-between items-center bg-black text-white py-4 px-8 fixed w-full z-50">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Adam Braddish Logo" className="h-10 w-10 mr-3" style={{ filter: 'invert(1)' }} />
          <div className="text-lg font-bold">Adam Braddish Tattoo</div>
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-[#00e6ff]">About</a>
          <a href="#services" className="hover:text-[#00e6ff]">Services</a>
          <a href="#gallery" className="hover:text-[#00e6ff]">Gallery</a>
          <a href="#contact" className="hover:text-[#00e6ff]">Contact</a>
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="tel:+353871234567" className="hover:text-[#00e6ff]">📍 Limerick, Ireland</a>
          <a href="#contact" className="bg-[#00e6ff] text-black px-4 py-2 rounded hover:bg-[#1e4c70]">Book Now</a>
        </div>

        {/* Burger Menu Button */}
        <button
          className="text-white focus:outline-none block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Dropdown Menu (Mobile) */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center z-50 space-y-4 py-4`}
        >
          <a href="#about" className="text-lg hover:text-[#00e6ff] py-2">About</a>
          <a href="#services" className="text-lg hover:text-[#00e6ff] py-2">Services</a>
          <a href="#gallery" className="text-lg hover:text-[#00e6ff] py-2">Gallery</a>
          <a href="#contact" className="text-lg hover:text-[#00e6ff] py-2">Contact</a>
          <a href="tel:+353871234567" className="text-lg hover:text-[#00e6ff] py-2">
            📍 Limerick, Ireland
          </a>
          <a
            href="#contact"
            className="bg-[#00e6ff] text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#1e4c70] mt-4"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <header className="relative h-screen bg-cover bg-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/tattoovid.MOV" type="video/mp4" />
          <source src="/tattoovid.MOV" type="video/quicktime" /> 
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center">
          <h1 className="text-6xl text-[#00e6ff] font-bold mb-6">Bookings are Open</h1>
          <p className="text-[#00e6ff] text-2xl mb-8">Professional, High Quality tattoos</p>
          <div className="space-x-4">
            <a href="#contact" className="bg-[#00e6ff] text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#1e4c70]">Book Now</a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 bg-white text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">Adam Braddish</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">Adam Braddish is a professional tattoo artist based in Limerick, Ireland. Specializing in custom tattoo designs, Adam brings your ideas to life with precision and artistry.</p>
        <div className="flex justify-center mt-8">
          <img src="/adam.jpg" alt="Adam Braddish" className="w-1/5 rounded-full shadow-lg" />
        </div>
        <p className='text-lg max-w-3xl mx-auto text-gray-600 mt-5'>Adam H.B</p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-black text-center">
        <h2 className="text-4xl font-semibold mb-6 text-white">Services</h2>
        <ul className="text-lg space-y-4 text-gray-400">
          <li>Custom Tattoo Designs</li>
          <li>Cover-ups</li>
          <li>Black & Grey Tattoos</li>
          <li>Fine Line & Geometric Tattoos</li>
          <li>Consultation Sessions</li>
        </ul>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white text-center">
        <h2 className="text-4xl font-semibold mb-6 text-black">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <img src="/IMG_0224 2.jpg" alt="Tattoo 1" className="rounded-lg shadow-lg w-full h-96 object-cover" />
          <img src="/IMG_0225.jpg" alt="Tattoo 2" className="rounded-lg shadow-lg w-full h-96 object-cover" />
          <img src="/IMG_0227.JPG" alt="Tattoo 3" className="rounded-lg shadow-lg w-full h-96 object-cover" />
          <img src="/IMG_0236.JPG" alt="Tattoo 4" className="rounded-lg shadow-lg w-full h-96 object-cover" />
          <img src="/IMG_0238.JPG" alt="Tattoo 5" className="rounded-lg shadow-lg w-full h-96 object-cover" />
          <img src="/IMG_0245.jpg" alt="Tattoo 6" className="rounded-lg shadow-lg w-full h-96 object-cover" />
          <img src="/IMG_0246.jpg" alt="Tattoo 7" className="rounded-lg shadow-lg w-full h-96 object-cover" />
          <img src="/IMG_0247.jpg" alt="Tattoo 8" className="rounded-lg shadow-lg w-full h-96 object-cover" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-black text-center text-white">
        <h2 className="text-4xl font-semibold mb-6">Contact</h2>
        <p className="text-lg mb-4">For bookings and inquiries:</p>
        <p className="text-lg">
          Email: <a href="mailto:adam_hb@yahoo.com" className="text-[#00e6ff]">adam_hb@yahoo.com</a>
        </p>

        <p className="text-lg">Location: Limerick, Ireland</p>
      </section>

      {/* Instagram Section */}
      <section className="py-4 bg-black text-center">
        <a href="https://www.instagram.com/adamhb_tattoos/profilecard/?igsh=NTUxYWh0eWkwMjll" target="_blank" rel="noopener noreferrer" className="text-[#00e6ff] text-lg">
          Follow us on Instagram
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-black text-white">
        <p>&copy; {new Date().getFullYear()} Adam Braddish. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
