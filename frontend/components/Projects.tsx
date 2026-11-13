
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Check } from "lucide-react";

const features = [
  "AI-powered travel planning & dynamic personalized itineraries",
  "Destination recommendations with real-time semantic insights",
  "Flight and hotel information lookup through tool-calling agents",
  "Live weather forecasting & contextual seasonal luggage tips",
  "Scalable backend integration with REST APIs and structured JSON outputs",
];

const technologies = [
  "Python",
  "OpenAI Agents SDK",
  "Next.js",
  "REST APIs",
  "Tailwind CSS",
];

const screenshots = [
  {
    src: "/homepage.jpeg",
    alt: "Travel Planner Home Page",
  },
  {
    src: "/plan.jpeg",
    alt: "Travel Planner Plan Generation",
  },
  
  {
    src: "/response.png",
    alt: "Response from AI Travel Planner",
  },
  
];

export default function ProjectsPage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-heading",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".featured-project",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.15,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".project-feature",
        { opacity: 0, x: -12 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.5,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".project-screenshot",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          delay: 0.4,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-white px-5 py-10 sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="project-heading mb-7 sm:mb-9">
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold tracking-wider text-gray-700">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            FEATURED PROJECT
          </span>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Building with AI
          </h1>
        </div>

        {/* Featured Project Card */}
        <div className="featured-project grid overflow-hidden rounded-2xl border border-gray-100 bg-[#f1f2f4] shadow-md lg:grid-cols-2">

          {/* LEFT SECTION */}
          <div className="flex flex-col p-5 sm:p-8 lg:p-9">

            {/* Labels */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-gradient-to-r from-purple-500 to-orange-500 px-3 py-1 text-[10px] font-semibold text-white">
                Final Year Project
              </span>

              <span className="rounded-full bg-gray-200 px-3 py-1 text-[10px] font-medium text-gray-700">
                Autonomous Agents
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-gray-950 sm:text-[26px]">
              AI-Powered Travel Planner
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-600">
              Developed an intelligent, autonomous Travel Planner leveraging
              Python and OpenAI Agents SDK to autonomously curate personalized
              trips, negotiate destination constraints, and build data-rich
              itineraries.
            </p>

            {/* Features */}
            <div className="mt-5 space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="project-feature flex items-start gap-2.5"
                >
                  <span className="mt-0.5 flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <Check size={10} strokeWidth={2.5} />
                  </span>

                  <p className="text-[12px] leading-relaxed text-gray-700">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium text-gray-800 transition-colors hover:border-purple-300 hover:text-purple-700"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* RIGHT SECTION - SCREENSHOTS */}
          <div className="flex items-center justify-center bg-[#e9eaed] p-4 sm:p-6 lg:p-8">

            <div className="grid w-full grid-cols-2 gap-3">

              {screenshots.map((screenshot, index) => (
                <div
                  key={screenshot.src}
                  className={`project-screenshot group relative overflow-hidden rounded-xl border border-white bg-white shadow-sm ${
                    index === 0 ? "col-span-2 aspect-[16/8]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    sizes="(max-width: 1024px) 90vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
