
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const experiences = [
  {
    title: "Core Backend Architecture",
    description:
      "Learned and applied Python and Django for structured backend development, modular routing, and server-side request pipelines.",
    icon: "check",
  },
  {
    title: "REST APIs & DRF",
    description:
      "Gained practical experience creating structured endpoints with Django REST Framework (DRF), custom serializers, and authentication tokens.",
    icon: "api",
  },
  {
    title: "Database Models & CRUD",
    description:
      "Architected database models, established relational mappings (One-to-Many, Many-to-Many), optimized queries, and wrote robust CRUD logic.",
    icon: "database",
  },
  {
    title: "Team Collaboration & Git Workflow",
    description:
      "Collaborated directly with lead engineers via version control, participated in code reviews, and implemented feature enhancements.",
    icon: "team",
  },
];

const technologies = ["Python", "Django", "DRF", "PostgreSQL"];

function ExperienceIcon({ name }: { name: string }) {
  const common = {
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "check":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8.5 12 2.3 2.3 4.7-4.8" />
        </svg>
      );

    case "api":
      return (
        <svg {...common}>
          <path d="m12 2 2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2Z" />
          <path d="m19 14 1.3 3.2L23 18.5l-2.7 1.3L19 23l-1.3-3.2-2.7-1.3 2.7-1.3L19 14Z" />
        </svg>
      );

    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
          <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
        </svg>
      );

    case "team":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="10" cy="7" r="4" />
          <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M18 8h4m-2-2v4" />
        </svg>
      );

    default:
      return null;
  }
}

function LocationIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export default function ExperiencePage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        ".experience-heading",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        }
      )
        .fromTo(
          ".experience-intro",
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .fromTo(
          ".experience-container",
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.3"
        )
        .fromTo(
          ".experience-item",
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
          },
          "-=0.35"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={sectionRef}
      className="min-h-screen w-full bg-white px-5 pb-20 pt-14 sm:px-8 sm:pt-16 lg:px-10"
    >
      <section className="mx-auto w-full max-w-[840px]">

        {/* Section Heading */}
        <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">

          <div className="experience-heading">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#f1f2f4] px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              <span className="text-[9px] font-medium uppercase tracking-wide text-[#30334a]">
                Professional Experience
              </span>
            </div>

            <h1 className="text-[29px] font-bold leading-tight tracking-[-1.2px] text-black sm:text-[34px] lg:text-[36px]">
              Where I&apos;ve Gained Experience
            </h1>
          </div>

          <p className="experience-intro max-w-[340px] pb-1 text-[12px] leading-[1.7] text-[#555d79] sm:text-[13px]">
            Hands-on technical internships and team-driven software delivery
            in fast-paced software environments.
          </p>
        </div>

        {/* Experience Container */}
        <div className="experience-container rounded-[20px] bg-[#f1f2f4] p-6 sm:p-7 lg:p-[30px]">

          {/* Company Header */}
          <div className="mb-9 flex flex-col justify-between gap-5 lg:flex-row lg:items-start">

            <div>
              <div className="mb-1.5 flex flex-wrap items-center gap-3">
                <h2 className="text-[20px] font-semibold tracking-[-0.6px] text-black sm:text-[22px]">
                  UQA SOFTS (PVT) LTD
                </h2>

                <span className="rounded-full bg-[#e8d9ff] px-3 py-1 text-[9px] font-semibold text-[#6734bc]">
                  Backend Developer Intern
                </span>
              </div>

              {/* Location and Duration */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] text-[#27314d]">
                <span className="flex items-center gap-1.5">
                  <LocationIcon />
                  Peshawar, Pakistan
                </span>

                <span className="hidden text-[#313b56] sm:inline">•</span>

                <span className="flex items-center gap-1.5">
                  <ClockIcon />
                  April – June (2 Months)
                </span>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap items-center gap-1.5 lg:justify-end">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white px-3 py-1.5 text-[10px] font-medium text-[#171717] transition-colors duration-200 hover:bg-[#e8d9ff]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Details Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

            {experiences.map((item) => (
              <article
                key={item.title}
                className="experience-item group flex min-h-[90px] gap-3 rounded-[13px] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-4"
              >
                {/* Icon */}
                <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[#eadcff] text-[#7539df]">
                  <ExperienceIcon name={item.icon} />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="mb-1 text-[12px] font-semibold leading-snug text-[#111827] sm:text-[12.5px]">
                    {item.title}
                  </h3>

                  <p className="text-[10.5px] leading-[1.55] text-[#515b79] sm:text-[11px]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}
