"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/utils/animations";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      className="container max-w-7xl mx-auto py-20 px-4"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {/* Heading */}
      <motion.h1
        variants={fadeInUp}
        className="text-4xl md:text-5xl font-bold text-(--color-paper) text-center mb-14"
      >
        Contact Me
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <motion.div variants={slideInLeft} className="space-y-8">

          <motion.p
            variants={fadeInUp}
            className="text-lg text-(--color-mist) leading-relaxed"
          >
            I&apos;m always open to discussing new projects, ideas, or opportunities.
            Let&apos;s build something great together.
          </motion.p>

          {/* Info Items */}
          {[
            {
              icon: <FaEnvelope />,
              title: "Email",
              value: "atibkhan392@gmail.com",
              link: "mailto:atibkhan392@gmail.com",
            },
            {
              icon: <FaPhone />,
              title: "Phone",
              value: "+91 7020353286",
              link: "tel:7020353286",
            },
            {
              icon: <FaMapMarkerAlt />,
              title: "Location",
              value: "Pune, India",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="flex items-center gap-4 group"
            >
              <div className="p-3 rounded-lg bg-(--color-ash) border border-(--color-border) group-hover:border-(--color-gold) transition">
                <span className="text-(--color-gold)">{item.icon}</span>
              </div>

              <div>
                <p className="text-sm text-(--color-mist)">
                  {item.title}
                </p>

                {item.link ? (
                  <Link
                    href={item.link}
                    className="text-(--color-paper) hover:text-(--color-gold) transition"
                  >
                    {item.value}
                  </Link>
                ) : (
                  <p className="text-(--color-paper)">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.div
          variants={slideInRight}
          className="
            relative
            bg-(--color-ash)/70
            backdrop-blur-xl
            border border-(--color-border)
            rounded-2xl
            p-8
            shadow-xl
          "
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-(--color-gold)/10 to-transparent opacity-30 pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-6 relative">

            {/* Floating Input */}
            {["name", "email"].map((field) => (
              <motion.div key={field} variants={fadeInUp} className="relative">
                <input
                  id={field}
                  type={field === "email" ? "email" : "text"}
                  value={formData[field as keyof FormData]}
                  onChange={handleChange}
                  required
                  className="
                    w-full px-4 pt-6 pb-2 rounded-lg
                    bg-transparent
                    border border-(--color-border)
                    text-(--color-paper)
                    focus:outline-none focus:border-(--color-gold)
                  "
                />
                <label className="
                  absolute left-4 top-2 text-xs text-(--color-mist)
                ">
                  {field}
                </label>
              </motion.div>
            ))}

            {/* Textarea */}
            <motion.div variants={fadeInUp} className="relative">
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="
                  w-full px-4 pt-6 pb-2 rounded-lg
                  bg-transparent
                  border border-(--color-border)
                  text-(--color-paper)
                  focus:outline-none focus:border-(--color-gold)
                "
              />
              <label className="absolute left-4 top-2 text-xs text-(--color-mist)">
                message
              </label>
            </motion.div>

            {/* Status */}
            {status === "success" && (
              <p className="text-green-500 text-sm">
                Message sent successfully
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-sm">
                Failed to send message
              </p>
            )}

            {/* Button */}
            <motion.button
              type="submit"
              disabled={status === "submitting"}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                w-full py-3 rounded-lg
                bg-(--color-gold)
                text-black font-medium
                hover:brightness-110
                disabled:opacity-50
                transition
              "
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </motion.button>

          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;