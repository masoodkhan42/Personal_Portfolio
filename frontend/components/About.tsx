
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
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
        x: 50,
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
      ref={heroRef}
      className="min-h-[calc(100vh-60px)] bg-white px-6 py-16 md:px-10 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.5fr_1fr]">

        {/* Left Content */}
        <div className="hero-content">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
            <span className="h-2 w-2 rounded-full bg-pink-500" />
            ABOUT ME
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-black sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              I develop modern
            </span>
            <br />
            web applications
            <br />
            that are scalable.
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            I'm a Computer Science graduate with hands-on experience
            in Backend Development using Python and Django, and
            familiarity with Frontend Development using HTML, CSS,
            JavaScript, Tailwind CSS, and React. I'm also knowledgeable
            in Agentic AI and AI-powered application development, with
            a strong interest in building modern and practical
            software solutions.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Get in Touch <span>→</span>
            </Link>

            <a
              href="/Muhammad-Masood-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-200"
            >
              ↓ Download CV
            </a>
          </div>

          {/* Statistics */}
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">

            <div>
              <h3 className="text-2xl font-bold text-black sm:text-3xl">
                3.46
              </h3>
              <p className="text-xs text-gray-600">
                BS CS CGPA
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black sm:text-3xl">
                Python
              </h3>
              <p className="text-xs text-gray-600">
                & Django Core
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black sm:text-3xl">
                Agentic
              </h3>
              <p className="text-xs text-gray-600">
                AI Explorer
              </p>
            </div>

          </div>
        </div>

        {/* Right Preview Card */}
        <div className="preview-card mx-auto w-full max-w-md">

          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl">

            {/* Mini Navigation */}
            <div className="flex justify-end gap-5 px-6 py-5 text-[10px] text-gray-500">
              <Link href="/about">About</Link>
              <Link href="/skills">Skills</Link>
              <Link href="/projects">Projects</Link>
            </div>

            {/* Preview Content */}
            <div className="grid grid-cols-[1.2fr_0.8fr] gap-2 px-5 py-8">

              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-black">
                  I develop modern applications that are scalable.
                </h2>

                <p className="mt-4 text-xs leading-5 text-gray-500">
                  Muhammad Masood, a Web Developer passionate about
                  building web applications using Python, Django
                  and PostgreSQL.
                </p>

                <span className="mt-5 w-fit rounded-full border border-gray-200 px-4 py-2 text-[10px] text-gray-500">
                  Backend Developer
                </span>
              </div>

              {/* Visual Placeholder */}
              <div className="flex min-h-64 items-center justify-center rounded-xl bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">
                <span className="text-6xl font-bold text-white/80">
                  MM
                </span>
              </div>

            </div>

            {/* Opportunity Card */}
            <div className="m-5 flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-lg">

              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-violet-500" />

                <div>
                  <h4 className="text-[10px] font-bold text-gray-900">
                    OPEN TO OPPORTUNITIES
                  </h4>
                  <p className="text-xs text-gray-500">
                    Backend & Full Stack roles
                  </p>
                </div>
              </div>

              <span className="text-xl text-violet-600">✳</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
