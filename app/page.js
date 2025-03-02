"use client";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
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
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
