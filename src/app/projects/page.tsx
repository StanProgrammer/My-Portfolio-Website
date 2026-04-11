import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { projects } from "@/contents/projects";
import Image from "next/image";
const ProjectsPage = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-(--color-paper) text-center mb-12">My Projects</h1>
      <p className="text-lg md:text-xl text-(--color-mist) max-w-3xl mx-auto leading-relaxed text-center">
        Here are the projects I&apos;ve worked on recently. I focus on building scalable, production-ready web
        applications with clean architecture and intuitive user experiences.
      </p>
      <section className="py-24 container">
        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-xl border border-(--color-border)
                        bg-(--color-ash) overflow-hidden
                        transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden shrink-0">
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
                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-(--color-paper) mb-2">{project.title}</h3>

                {/* Description */}
                <p className="text-sm text-(--color-mist) leading-relaxed mb-4">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full
                                border border-(--color-gold)
                                text-(--color-gold)
                                hover:bg-(--color-gold) hover:text-(--color-ash)
                                transition cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links — pushed to bottom */}
                <div className="flex items-center gap-5 mt-auto pt-2 text-sm border-t border-(--color-border)">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-(--color-paper) hover:text-(--color-gold) transition"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </Link>

                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-(--color-paper) hover:text-(--color-gold) transition"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        {/* <div className="text-center mt-12 ">
                      <Link href="/learning" className="inline-block px-6 py-3 bg-(--color-gold) text-(--color-ash) font-semibold rounded-full hover:bg-(--color-gold) hover:text-(--color-ash) transition">
                        View My Learning
                      </Link>
                    </div> */}
      </section>
      <div className="text-center mt-6">
        <p className="text-(--color-mist) mb-4 text-sm md:text-base">Want to explore more of my work?</p>

        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="
      inline-flex items-center gap-2
      px-6 py-3 rounded-lg
      border border-(--color-border)
      text-(--color-paper)
      hover:border-(--color-gold)
      hover:text-(--color-gold)
      transition-all duration-300
    "
        >
          View More on GitHub →
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;
