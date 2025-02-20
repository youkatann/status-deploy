import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email, score } = await req.json();

  if (!email) return NextResponse.json({ message: "Email is required" }, { status: 400 });

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: { user: "ilyataypole@gmail.com", pass: "jplq wtlb lklr dlhm" },
  });

  try {
    await transporter.sendMail({
      from: "ilyataypole@gmail.com",
      to: email,
      subject: "Ваш результат тесту",
      text: `Ваш рівень англійської: ${score} / 3`,
    });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    return NextResponse.json({ message: "Error sending email", error }, { status: 500 });
  }
}
