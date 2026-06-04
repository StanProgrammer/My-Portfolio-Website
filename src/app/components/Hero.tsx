"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import {
  fadeInUp,
  scaleIn,
  staggerContainer,
} from "@/utils/animations";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center container">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto text-center"
      >

        {/* Profile Image */}
        <motion.div
          variants={scaleIn}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <Image
              src="/profile.png"
              alt="Profile"
              width={140}
              height={140}
              priority
              className="rounded-full object-cover w-32 h-32 md:w-36 md:h-36 
              ring-2 ring-(--color-gold) 
              shadow-[0_8px_30px_rgba(0,0,0,0.15)] 
              dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            />

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-(--color-gold) blur-2xl opacity-20 -z-10"></div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-(--color-paper)"
        >
          Hi, I&apos;m{" "}
          <span className="text-(--color-gold)">
            Atib Khan
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg md:text-xl text-(--color-mist) tracking-wide"
        >
          Full Stack Developer | Backend Developer
        </motion.p>

        {/* Social Icons */}
        <motion.div
          variants={fadeInUp}
          className="flex justify-center gap-6 mt-6 mb-8"
        >
          <Link
            href="https://github.com/StanProgrammer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-(--color-mist) hover:text-(--color-gold) transition transform hover:-translate-y-1"
          >
            <FaGithub size={24} />
          </Link>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Link
            href="/projects"
            className="inline-block px-8 py-3 rounded-md text-sm tracking-wide font-medium 
            bg-(--color-gold) text-black dark:text-(--color-ink)
            hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]
            transition-all"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-md text-sm tracking-wide font-medium 
            border border-(--color-border) text-(--color-paper)
            hover:border-(--color-gold) hover:text-(--color-gold)
            hover:scale-[1.03] active:scale-[0.98]
            transition-all"
          >
            Contact Me
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
