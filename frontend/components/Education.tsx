
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  GraduationCap,
  Landmark,
  SquareTerminal,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface EducationItem {
  id: number;
  level: string;
  period: string;
  institution: string;
  qualification: string;
  description?: string;
  score?: string;
  percentage?: string;
  gpa?: string;
  icon: LucideIcon;
  featured?: boolean;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    level: "01 • Matriculation",
    period: "2017 – 2019",
    institution: "Warsak Model School & College",
    qualification: "Secondary School Certificate (Science curriculum)",
    score: "926 / 1100",
    percentage: "84%",
    icon: GraduationCap,
  },
  {
    id: 2,
    level: "02 • Intermediate (FSc)",
    period: "2019 – 2021",
    institution: "Government College Peshawar",
    qualification:
      "Higher Secondary Certificate with focus on Pre-Engineering & Sciences",
    score: "922 / 1100",
    percentage: "83.8%",
    icon: Landmark,
  },
  {
    id: 3,
    level: "03 • Bachelor of Science (BSc)",
    period: "2021 – 2025",
    institution: "Islamia College University Peshawar",
    qualification: "Bachelor of Science in Computer Science",
    description:
      "Comprehensive study of algorithms, data structures, database engineering, web architectures, and intelligent systems.",
    gpa: "3.46",
    icon: SquareTerminal,
    featured: false,
  },
];

function EducationCard({ item }: { item: EducationItem }) {
  const Icon = item.icon;

  return (
    <article
      className={`education-card relative flex min-h-[345px] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        item.featured ? "border-t-4 border-t-purple-500" : ""
      }`}
    >
      {/* Top information */}
      <div className="flex items-center justify-between gap-2">
        <span
          className={`rounded-full px-3 py-1 text-[10px] font-semibold tracking-wide ${
            item.featured
              ? "bg-purple-100 text-purple-800"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {item.featured && <Sparkles className="mr-1 inline h-3 w-3" />}
          {item.level}
        </span>

        <span className="shrink-0 text-[11px] font-medium text-gray-700">
          {item.period}
        </span>
      </div>

      {/* Icon */}
      <div
        className={`mt-5 flex h-10 w-10 items-center justify-center rounded-full ${
          item.featured
            ? "bg-purple-100 text-purple-700"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        <Icon size={19} strokeWidth={1.8} />
      </div>

      {/* Education details */}
      <div className="mt-4">
        <h2 className="text-[17px] font-semibold leading-snug tracking-tight text-gray-950">
          {item.institution}
        </h2>

        <p
          className={`mt-2 text-[12px] font-medium leading-relaxed ${
            item.featured ? "text-purple-700" : "text-gray-600"
          }`}
        >
          {item.qualification}
        </p>

        {item.description && (
          <p className="mt-2 text-[12px] leading-relaxed text-gray-600">
            {item.description}
          </p>
        )}
      </div>

      {/* Score / GPA */}
      <div className="mt-auto pt-5">
        {item.gpa ? (
          <div className="flex items-center justify-between gap-2 rounded-full bg-gray-100 px-4 py-3">
            <span className="text-[11px] text-gray-600">
              Cumulative GPA
            </span>

            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold tracking-tight text-gray-950">
                {item.gpa}
              </span>
              <span className="text-[10px] text-gray-500">/ 4.00</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] text-gray-500">Score</span>

            <div className="flex items-baseline gap-1.5">
              <span className="text-[13px] font-bold text-gray-950">
                {item.score}
              </span>
              <span className="text-[11px] font-semibold text-purple-700">
                ({item.percentage})
              </span>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".education-heading",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".education-card",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#f7f8fa] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Page heading */}
         <div className="skills-heading mb-12 text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-violet-600" />
            <span className="text-xs font-bold tracking-wider text-violet-800">
              MY EDUCATION
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
            My Academic Journey
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-700 sm:text-base">
            A brief overview of my academic background, highlighting the institutions I've attended, the qualifications I've earned, and the skills I've acquired along the way.
          </p>

        </div>

        {/* Education cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {educationData.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
