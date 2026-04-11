// /app/api/newsletter/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 🔹 In-memory stores (for demo / portfolio)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const subscribers = new Set<string>();

// 🔹 Config
const RATE_LIMIT = 5; // max requests
const WINDOW_MS = 60 * 1000; // 1 min

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";

    // -------------------------------
    // RATE LIMITING
    // -------------------------------
    const now = Date.now();
    const user = rateLimitMap.get(ip);

    if (user) {
      if (now - user.timestamp < WINDOW_MS) {
        if (user.count >= RATE_LIMIT) {
          return NextResponse.json(
            { message: "Too many requests. Try again later." },
            { status: 429 }
          );
        }
        user.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    // -------------------------------
    // 📩 BODY VALIDATION
    // -------------------------------
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      return NextResponse.json(
        { message: "Invalid email" },
        { status: 400 }
      );
    }

    // -------------------------------
    // 🔁 DUPLICATE CHECK
    // -------------------------------
    console.log("Current subscribers:", Array.from(subscribers));
    if (subscribers.has(email)) {
      return NextResponse.json(
        { message: "Already subscribed" },
        { status: 400 }
      );
    }

    // Save subscriber
    subscribers.add(email);

    // -------------------------------
    // 📧 SEND EMAIL
    // -------------------------------
    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "atibkhan392@outlook.com",
      subject: "New Newsletter Subscription",
      html: `
        <h3>New Subscriber</h3>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    console.log("RESEND:", response);

    return NextResponse.json({
      message: "Subscribed successfully",
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to subscribe" },
      { status: 500 }
    );
  }
}