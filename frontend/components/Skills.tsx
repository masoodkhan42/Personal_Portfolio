
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Server,
  BrainCircuit,
  MonitorSmartphone,
  Database,
  Terminal,
} from "lucide-react";

const categories = [
  {
    title: "Backend Development",
    description:
      "Building reliable server-side applications, RESTful APIs, authentication systems, and scalable backend architectures.",
    icon: Server,
    primary: true,
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "AI & Emerging Technologies",
    description:
      "Exploring intelligent applications, AI agents, and automation using modern AI technologies.",
    icon: BrainCircuit,
    skills: [
      "Agentic AI",
      "OpenAI Agents SDK",
      "Prompt Engineering",
      "AI Integration",
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Creating responsive and modern user interfaces using contemporary frontend technologies.",
    icon: MonitorSmartphone,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Database Management",
    description:
      "Designing relational databases, managing data relationships, and performing efficient database operations.",
    icon: Database,
    skills: [
      "PostgreSQL",
      "SQLite",
      "Database Design",
      "CRUD Operations",
      "Django ORM",
    ],
  },
  {
    title: "Development Tools",
    description:
      "Using modern development tools for version control, API testing, coding, and debugging.",
    icon: Terminal,
    skills: [
      "Git & GitHub",
      "Postman",
      "VS Code",
      "Linux Basics",
    ],
  },
];

export default function SkillsPage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-heading",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".skill-card",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          delay: 0.2,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-white px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="skills-heading mb-12 text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-violet-600" />
            <span className="text-xs font-bold tracking-wider text-violet-800">
              MY EXPERTISE
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
            Technologies I Work With
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-700 sm:text-base">
            Technologies and tools I use to build modern web applications
            and explore intelligent software solutions.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className={`
                  skill-card flex min-h-[290px] flex-col
                  rounded-2xl border border-gray-200
                  p-6 sm:p-7
                  shadow-[0_6px_20px_rgba(0,0,0,0.12)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                  ${
                    category.primary
                      ? "md:col-span-2 bg-gradient-to-br from-violet-50 via-white to-purple-100"
                      : "bg-gray-50"
                  }
                `}
              >

                {/* Icon and Badge */}
                <div className="mb-5 flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                    <Icon size={24} strokeWidth={2.2} />
                  </div>

                  {category.primary && (
                    <span className="rounded-full bg-violet-700 px-4 py-2 text-xs font-bold text-white">
                      Primary Focus
                    </span>
                  )}

                </div>

                {/* Title */}
                <h2 className="mb-3 text-xl font-bold text-gray-950">
                  {category.title}
                </h2>

                {/* Description */}
                <p className="mb-6 text-sm leading-7 text-gray-700">
                  {category.description}
                </p>

                {/* Skills */}
                <div className="mt-auto flex flex-wrap gap-2">

                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full border border-gray-300
                        bg-white px-4 py-2
                        text-xs font-semibold text-gray-900
                        shadow-sm transition-colors
                        hover:border-violet-400
                        hover:bg-violet-50
                      "
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}
