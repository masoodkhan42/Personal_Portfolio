
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { Download } from "lucide-react";

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
      className="flex items-center bg-white px-4 py-4 sm:min-h-[calc(100vh-60px)] sm:px-6 sm:py-16 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-3 sm:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">

        {/* Left Content */}
        <div className="hero-content min-w-0 text-center">

          

          <h1 className="text-[21px] font-bold leading-[1.15] tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              I develop modern
            </span>
            <br />
            web applications
            <br />
            that are scalable.
          </h1>

          <p className="mt-3 text-[10px] leading-[1.6] text-gray-600 sm:mt-6 sm:text-sm sm:leading-7 md:text-base">
            I'm a Computer Science graduate with hands-on experience in Backend
            Development using Python and Django, and familiarity with Frontend
            Development using HTML, CSS, JavaScript, Tailwind CSS, and React.
            I'm also knowledgeable in Agentic AI and AI-powered application
            development, with a strong interest in building modern and practical
            software solutions.
          </p>

          {/* Buttons */}
          
<div className="mt-4 grid grid-cols-2 gap-2 sm:mt-7 sm:flex sm:flex-wrap sm:items-center sm:gap-3">

  {/* Contact */}
  <Link
    href="#contact"
    className="inline-flex items-center justify-center gap-1 rounded-full bg-black px-3 py-2.5 text-[11px] font-semibold text-white transition hover:bg-violet-600 hover:-translate-y-1 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
  >
    Contact <span>→</span>
  </Link>

  {/* Download CV */}
  <a
  href="/Masood.pdf"
  download="Masood.pdf"
  className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-black px-2 py-2.5 text-[10px] font-semibold text-white transition hover:bg-violet-600 hover:-translate-y-1 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
>
  <Download size={14} className="shrink-0" />
  <span>Download CV</span>
</a>

  {/* GitHub */}
  <a
    href="https://github.com/masoodkhan42"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-1 rounded-full bg-gray-100 px-3 py-2.5 text-[11px] font-semibold text-gray-800 transition hover:bg-gray-200 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
  >
    GitHub
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/muhammad-masood-46b758278/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-1 rounded-full bg-gray-100 px-3 py-2.5 text-[11px] font-semibold text-gray-800 transition hover:bg-gray-200 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
  >
    LinkedIn
  </a>

</div>


          {/* Statistics */}
          <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-10 sm:gap-6">

            <div>
              <h3 className="text-base font-bold text-black sm:text-2xl md:text-3xl">
                Python
              </h3>
              <p className="text-[9px] text-gray-600 sm:text-xs">
                & Django Core
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-black sm:text-2xl md:text-3xl">
                Agentic
              </h3>
              <p className="text-[9px] text-gray-600 sm:text-xs">
                AI Explorer
              </p>
            </div>

          </div>
        </div>

        {/* Right Image */}
        <div className="preview-card flex min-w-0 justify-center sm:justify-end">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-md sm:max-w-[300px] sm:rounded-2xl md:max-w-[340px]">

            <Image
              src="/pic.jpg"
              alt="Muhammad Masood"
              fill
              priority
              sizes="(max-width: 640px) 50vw, 340px"
              className="object-cover object-top transition-transform duration-700 hover:scale-105"
            />

          </div>
        </div>

      </div>
    </section>
  );
}
