"use client";

import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Enter a valid email");
      return;
    }

  try {
  setLoading(true);
  setError("");
  setSuccess(false);

  const res = await fetch("/api/newsletter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Failed to subscribe");
  }

  setSuccess(true);
  setEmail("");

} catch (err: unknown) {
  const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again.";
  setError(errorMessage);
} finally {
  setLoading(false);
}
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          className="
          relative
          bg-(--color-ash)/80
          backdrop-blur-md
          border border-(--color-border)
          rounded-2xl
          p-8 md:p-10
          shadow-2xl
          ring-1 ring-white/5
        "
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-(--color-gold)/10 to-transparent opacity-30 pointer-events-none" />

          {/* Content */}
          <div className="relative text-center md:text-left mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-(--color-paper) mb-3">
              Subscribe to my Newsletter
            </h2>
            <p className="text-(--color-mist) max-w-xl mx-auto md:mx-0">
              Get updates on projects, backend engineering, and what I&apos;m building.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="
                flex-1 px-5 py-3 rounded-xl
                bg-transparent
                border border-(--color-border)
                text-(--color-paper)
                placeholder-(--color-mist)
                focus:outline-none
                focus:border-(--color-gold)
                focus:ring-2 focus:ring-(--color-gold)
                transition-all
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                px-6 py-3 rounded-xl
                bg-(--color-gold)
                text-black font-semibold
                hover:brightness-110
                hover:shadow-lg
                active:scale-95
                disabled:opacity-60
                transition-all
                whitespace-nowrap
              "
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {/* Messages */}
          {error && (
            <p className="mt-4 text-sm text-red-500">{error}</p>
          )}

          {success && (
            <p className="mt-4 text-sm text-green-500">
              Successfully subscribed!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;