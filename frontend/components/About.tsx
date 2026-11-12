"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".preview-card", {
        x: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={heroRef}
      className="min-h-[calc(100vh-60px)] bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-12 flex items-center"
    >
      {/* Side-by-side grid on ALL screen sizes (mobile, tablet, desktop) */}
      <div className="mx-auto grid max-w-7xl items-center gap-4 sm:gap-8 lg:gap-14 grid-cols-[1.35fr_0.65fr] sm:grid-cols-[1.2fr_1fr] w-full">
        {/* Left Content */}
        <div className="hero-content">
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full bg-gray-100 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-gray-700">
            <span className="h-2 w-2 rounded-full bg-pink-500" />
            ABOUT ME
          </div>

          <h1 className="max-w-3xl text-2xl font-bold leading-[1.12] tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              I develop modern
            </span>
            <br />
            web applications
            <br />
            that are scalable.
          </h1>

          <p className="mt-4 sm:mt-6 max-w-2xl text-xs leading-5 sm:text-sm sm:leading-7 md:text-base text-gray-600">
            I'm a Computer Science graduate with hands-on experience in Backend
            Development using Python and Django, and familiarity with Frontend
            Development using HTML, CSS, JavaScript, Tailwind CSS, and React.
            I'm also knowledgeable in Agentic AI and AI-powered application
            development, with a strong interest in building modern and practical
            software solutions.
          </p>

          {/* Buttons */}
          <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-2 sm:gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-black px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Contact <span>→</span>
            </Link>

            {/* GitHub Button */}
            <a
              href="https://github.com/masoodkhan42"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gray-100 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-gray-800 transition hover:bg-gray-200"
            >
              <svg
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/muhammad-masood-46b758278/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gray-100 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-gray-800 transition hover:bg-gray-200"
            >
              <svg
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Statistics */}
          <div className="mt-7 sm:mt-10 grid max-w-lg grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-black">
                Python
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-600">& Django Core</p>
            </div>

            <div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-black">
                Agentic
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-600">AI Explorer</p>
            </div>
          </div>
        </div>

        {/* Right Simple Picture Card (Stays on the right on mobile too) */}
        <div className="preview-card relative flex justify-end">
          <div className="relative w-full max-w-[140px] sm:max-w-[260px] md:max-w-[340px] aspect-[3/4] sm:aspect-[4/5] rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-100 overflow-hidden shadow-md">
           <Image
                src="/Generated Image December 14, 2025 - 11_31PM.png"
                alt="Muhammad Masood"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                priority
              />
          </div>
        </div>
      </div>
    </section>
  );
}