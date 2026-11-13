
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const educationData = [
  {
    id: 1,
    level: "Matriculation",
    year: "2017 – 2019",
    institution: "Warsak Model School & College",
  },
  {
    id: 2,
    level: "Intermediate (FSc)",
    year: "2019 – 2021",
    institution: "Government College Peshawar",
  },
  {
    id: 3,
    level: "BS Computer Science",
    year: "2021 – 2025",
    institution: "Islamia College University Peshawar",
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".education-heading",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".education-item",
        { opacity: 0, y: 15 },
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
      id="education"
      ref={sectionRef}
      className="bg-[#f7f8fa] px-5 py-12 sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="education-heading mb-10 text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-violet-600" />
            <span className="text-xs font-bold tracking-wider text-violet-800">
              MY EDUCATION
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
            My Academic Journey
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            My academic background and educational journey.
          </p>

        </div>

        {/* Education List */}
        <div className="mx-auto max-w-3xl">

          {educationData.map((item, index) => (
            <div
              key={item.id}
              className="education-item border-b border-gray-200 py-6 first:pt-0 last:border-b-0"
            >

              {/* Top Row */}
              <div className="flex items-center justify-between gap-3">

                <h2 className="text-base font-bold text-gray-950 sm:text-lg">
                  <span className="mr-2 text-violet-600">
                    0{index + 1}.
                  </span>
                  {item.level}
                </h2>

                <span className="shrink-0 text-xs font-semibold text-gray-500 sm:text-sm">
                  {item.year}
                </span>

              </div>

              {/* Institution */}
              <p className="mt-2 pl-8 text-sm text-gray-600 sm:text-base">
                {item.institution}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
