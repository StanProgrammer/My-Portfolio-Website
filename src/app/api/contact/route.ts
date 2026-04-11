import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log("CONTACT API HIT");

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "atibkhan392@outlook.com",
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("RESEND RESPONSE:", response);

    if (!response || response.error) {
      console.error("Resend error:", response);
      return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent" });

  } catch (err) {
    console.error("ERROR:", err);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}