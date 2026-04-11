"use client";

import { projects } from "@/contents/projects";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const featuredProjects = projects.slice(0, 3); 

  return (
    <section className="py-24 container space-y-16">

      {/* Heading */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-display text-(--color-paper)">
          Featured Projects
        </h2>
        <p className="text-(--color-mist) max-w-2xl mx-auto text-sm md:text-base">
          A selection of projects showcasing my full-stack development experience.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="
              group flex flex-col rounded-xl
              border border-(--color-border)
              bg-(--color-ash)/80 backdrop-blur-md
              overflow-hidden
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl
            "
          >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">

              <h3 className="text-lg md:text-xl font-semibold text-(--color-paper) mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-(--color-mist) leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="
                      text-xs px-3 py-1 rounded-full
                      border border-(--color-gold)
                      text-(--color-gold)
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-5 mt-auto pt-3 text-sm border-t border-(--color-border)">
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="flex items-center gap-2 text-(--color-paper) hover:text-(--color-gold) transition"
                >
                  <FaGithub className="w-4 h-4" />
                  Code
                </Link>

                <Link
                  href={project.demoLink}
                  target="_blank"
                  className="flex items-center gap-2 text-(--color-paper) hover:text-(--color-gold) transition"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  Live
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/projects"
          className="
            inline-block px-6 py-3 rounded-lg
            bg-(--color-gold)
            text-black font-medium
            hover:brightness-110
            transition
          "
        >
          View All Projects →
        </Link>
      </div>

    </section>
  );
};

export default Projects;