
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Bot,
  Check,
  CloudSun,
  ExternalLink,
  MapPin,
  Plane,
  Sparkles,
  CalendarDays,
  Hotel,
} from "lucide-react";

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects"
      ref={sectionRef}
      className="min-h-screen bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="project-heading mb-9">
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold tracking-wider text-gray-700">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            FEATURED PROJECT
          </span>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Building with AI
          </h1>
        </div>

        {/* Featured project */}
        <div className="featured-project grid overflow-hidden rounded-2xl border border-gray-100 bg-[#f1f2f4] shadow-md lg:grid-cols-2">
          {/* Left section */}
          <div className="flex flex-col p-6 sm:p-8 lg:p-9">
            {/* Project labels */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-gradient-to-r from-purple-500 to-orange-500 px-3 py-1 text-[10px] font-semibold text-white">
                Final Year Project
              </span>

              <span className="rounded-full bg-gray-200 px-3 py-1 text-[10px] font-medium text-gray-700">
                Autonomous Agents
              </span>
            </div>

            {/* Title and description */}
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-gray-950 sm:text-[26px]">
              AI-Powered Travel Planner
            </h2>

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

          {/* Right section - Travel Planner UI preview */}
          <div className="flex items-center justify-center bg-[#e9ebee] p-5 sm:p-8 lg:p-10">
            <div className="w-full max-w-[430px] rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:p-5">
              {/* Agent header */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500 text-white">
                    <Bot size={17} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-[11px] font-semibold text-gray-900">
                      Travel Orchestrator Agent
                    </h3>
                    <p className="text-[9px] text-gray-500">
                      Status: Active • Multi-agent swarm
                    </p>
                  </div>
                </div>

                <span className="shrink-0 rounded-full bg-purple-50 px-2 py-1 text-[9px] font-medium text-purple-600">
                  GPT-4o • Live
                </span>
              </div>

              {/* User query */}
              <div className="mt-5 rounded-3xl bg-gray-100 p-3">
                <p className="text-[9px] font-semibold text-gray-800">
                  User Query:
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-gray-600">
                  "Plan a 4-day tech-culture trip to Tokyo with budget
                  boutique hotel suggestions and sunny days prioritized."
                </p>
              </div>

              {/* Generated itinerary */}
              <div className="mt-4 rounded-3xl border border-gray-100 p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Plane size={15} className="text-purple-600" />
                    <h4 className="text-[11px] font-bold text-gray-900">
                      Tokyo, Japan (4 Days)
                    </h4>
                  </div>

                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[9px] font-semibold text-gray-700">
                    98% Match
                  </span>
                </div>

                {/* Weather and hotel */}
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-full bg-gray-100 px-3 py-2">
                  <div className="flex items-center gap-1">
                    <CloudSun size={12} className="text-orange-500" />
                    <span className="text-[9px] text-gray-700">
                      Forecast: 22°C Clear
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Hotel size={11} className="text-purple-600" />
                    <span className="text-[9px] text-purple-600">
                      Shibuya Granbell ($110/nt)
                    </span>
                  </div>
                </div>

                {/* Daily plans */}
                <div className="mt-3 space-y-1.5">
                  <p className="text-[10px] font-medium leading-relaxed text-gray-800">
                    • Day 01: Akihabara Electronics Mart + TeamLab Borderless
                  </p>
                  <p className="text-[10px] font-medium leading-relaxed text-gray-800">
                    • Day 02: Roppongi Hills Architecture & Local Ramen Hunt
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <p className="text-[9px] text-gray-600">
                  Exporting to Calendar & Maps API
                </p>

                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-[10px] font-semibold text-white transition-colors hover:bg-purple-700"
                >
                  <MapPin size={11} />
                  View Route
                  <ExternalLink size={10} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
