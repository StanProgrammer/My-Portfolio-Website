"use client";

import { blogs } from "@/contents/blogs";
import Link from "next/link";
import { FaCalendar, FaClock } from "react-icons/fa";

const Learning = () => {
  return (
    <section className="py-20">
      <div className="container">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-(--color-paper)">
            Currently Learning
          </h2>
          <p className="mt-3 text-sm md:text-base text-(--color-mist) max-w-xl mx-auto">
            Concepts and technologies I am actively exploring to build scalable and production-ready applications
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <article
                className="
                h-full flex flex-col justify-between
                bg-(--color-ash)
                border border-(--color-border)
                rounded-xl p-6 md:p-7
                shadow-sm
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-(--color-gold)
                cursor-pointer
              "
              >
                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-(--color-paper) group-hover:text-(--color-gold) transition">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-(--color-mist) leading-relaxed">
                  {blog.excerpt}
                </p>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between text-xs text-(--color-mist)">
                  
                  <span className="flex items-center gap-2">
                    <FaCalendar className="opacity-70" />
                    {new Date(blog.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaClock className="opacity-70" />
                    {blog.readTime}
                  </span>
                </div>

                {/* CTA */}
                <div className="mt-4 text-sm font-medium text-(--color-gold) opacity-0 group-hover:opacity-100 transition">
                  Read Article →
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learning;