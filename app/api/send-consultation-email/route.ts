import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    const emailContent = `
New Consultation Request - PM Astrology

Client Details:
================
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

Birth Information:
==================
Birth Date: ${formData.birthDate || "Not provided"}
Birth Time: ${formData.birthTime || "Not provided"}
Birth Place: ${formData.birthPlace || "Not provided"}

Questions/Areas of Interest:
============================
${formData.questions || "No specific questions provided"}

Submitted on: ${new Date().toLocaleString()}

Please contact the client within 24 hours to schedule their consultation.
    `

    // Debug environment variables
    console.log("DEBUG - GMAIL_USER:", process.env.GMAIL_USER)
    console.log("DEBUG - GMAIL_PASS:", process.env.GMAIL_PASS ? "[HIDDEN]" : "NOT SET")
    console.log("DEBUG - TO_EMAIL:", process.env.TO_EMAIL)

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"PM Astrology" <${process.env.GMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: "New Consultation Request - PM Astrology",
      text: emailContent,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: "Consultation request submitted and email sent successfully",
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    )
  }
}
