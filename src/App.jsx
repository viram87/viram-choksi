import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";
// Lazy load components
const Hero = React.lazy(() => import("./components/Hero"));
const About = React.lazy(() => import("./components/About"));
const Experience = React.lazy(() => import("./components/Experience"));
const Projects = React.lazy(() => import("./components/Projects"));
const Skills = React.lazy(() => import("./components/Skills"));
const Contact = React.lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <>
      <Helmet>
        <title>Viram Choksi | Frontend Developer</title>
        {/* Primary Meta Tags */}
        <meta name="title" content="Viram Choksi - Frontend Developer Portfolio" />
        <meta name="description" content="Frontend Developer specializing in React.js, Vue.js, and modern web technologies. Building responsive and performant web applications with 2.8+ years of experience." />
        <meta name="keywords" content="Viram Choksi, frontend developer, react developer, vue.js developer, typescript, javascript, web development, ahmedabad" />
        <meta name="author" content="Viram Choksi" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0F172A" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://viramchoksi.com/" />
        <meta property="og:title" content="Viram Choksi - Frontend Developer Portfolio" />
        <meta property="og:description" content="Frontend Developer specializing in React.js, Vue.js, and modern web technologies. Building responsive and performant web applications." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:site_name" content="Viram Choksi Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://viramchoksi.com/" />
        <meta name="twitter:title" content="Viram Choksi - Frontend Developer Portfolio" />
        <meta name="twitter:description" content="Frontend Developer specializing in React.js, Vue.js, and modern web technologies. Building responsive and performant web applications." />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        <meta name="twitter:creator" content="@viramchoksi" />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://viramchoksi.com/" />
      </Helmet>

      <main className="bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-gray-300 overflow-hidden">
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Suspense fallback={<div>Loading...</div>}>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
