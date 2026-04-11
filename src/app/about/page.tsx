"use client";

import { FaCode } from "react-icons/fa";

const card =
  "bg-(--color-ash)/80 backdrop-blur-md border border-(--color-border) rounded-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl";

const AboutPage = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20 px-4 space-y-24">

      {/* Heading */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-(--color-paper)">
          About Me
        </h1>

        <p className="text-lg md:text-xl text-(--color-mist) max-w-3xl mx-auto leading-relaxed">
          Full-stack developer with experience building scalable, production-ready web applications end to end. I design robust backend systems and APIs while crafting intuitive and responsive frontend experiences. I focus on clean architecture, performance, and maintainability.
        </p>
      </section>

      {/* Skills */}
      <section className="space-y-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-(--color-paper)">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "Frontend",
              items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML / CSS"],
            },
            {
              title: "Backend",
              items: ["Node.js", "Express", "NestJS", "Python", "PostgreSQL / MongoDB"],
            },
            {
              title: "Tools & Practices",
              items: ["Git / GitHub", "Docker", "AWS", "CI/CD", "Testing", "Agile"],
            },
          ].map((section) => (
            <div key={section.title} className={card}>
              <FaCode className="h-8 w-8 text-(--color-gold) mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-(--color-paper)">
                {section.title}
              </h3>
              <ul className="space-y-1 text-(--color-mist)">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </section>

      {/* Experience */}
    <section className="space-y-12">
  <h2 className="text-2xl md:text-3xl font-semibold text-center text-(--color-paper)">
    Experience
  </h2>

  <div className="max-w-3xl mx-auto relative">

    {/* Timeline line */}
    <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-(--color-border)" />

    <div className="space-y-12">

      {[
        {
          role: "Senior Full Stack Developer",
          company: "Turing",
          duration: "2024 — Present",
          points: [
            "Engineered and optimized REST APIs handling thousands of daily requests, improving response time by 15–25%",
            "Resolved critical production issues, reducing downtime and improving system reliability",
            "Improved backend performance by eliminating redundant API calls and optimizing database queries",
            "Integrated frontend with backend APIs, ensuring scalable and efficient data flow",
          ],
        },
        {
          role: "Senior Full Stack Developer",
          company: "Lystloc",
          duration: "2022 — 2024",
          points: [
            "Built and scaled high-availability backend services for a real-time location tracking platform",
            "Implemented 20+ REST APIs using Node.js (Express, NestJS), improving system modularity",
            "Optimized database queries and schema design, reducing response time by 25–40%",
            "Designed real-time features using WebSockets and deployed serverless solutions with AWS Lambda",
          ],
        },
        {
          role: "Software Developer",
          company: "Carvita Technologies",
          duration: "2022",
          points: [
            "Implemented backend APIs using Node.js and Express for core features",
            "Fixed production issues and improved system stability",
            "Built React UI components integrated with backend services",
            "Improved frontend performance and state management",
          ],
        },
      ].map((job, index) => (
        <div key={index} className="relative pl-12">

          {/* Timeline dot */}
          <div className="absolute left-0 top-2 w-6 h-6 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-(--color-gold)" />
          </div>

          {/* Card */}
          <div
            className="
            bg-(--color-ash)/70
            backdrop-blur-lg
            border border-(--color-border)
            rounded-xl
            p-6 md:p-7
            shadow-lg
            transition-all duration-300
            hover:shadow-2xl
            hover:-translate-y-1
          "
          >
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-semibold text-(--color-paper)">
                {job.role}
              </h3>

              <p className="text-sm text-(--color-mist) mt-1">
                <span className="font-medium text-(--color-paper)">
                  {job.company}
                </span>{" "}
                · {job.duration}
              </p>
            </div>

            {/* Points */}
            <ul className="space-y-3 text-sm md:text-[15px] text-(--color-mist) leading-relaxed">
              {job.points.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 w-1.5 h-1.5 bg-(--color-gold) rounded-full shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>

      {/* Education */}
      <section className="space-y-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-(--color-paper)">
          Education
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className={card}>
            <h3 className="text-xl font-semibold text-(--color-paper)">
              Masters in Computer Science
            </h3>
            <p className="text-(--color-mist) mt-1">
              AISC (Pune University) · 2020 — 2022
            </p>
            <p className="mt-3 text-sm text-(--color-mist)">
              Graduated with First Class with Distinction
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;