import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Create email content
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

    // In a real application, you would use a service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - Resend
    // - AWS SES

    // For now, we'll simulate sending the email
    console.log("Email would be sent to: pmhoroscope@gmail.com")
    console.log("Email content:", emailContent)

    // Here you would integrate with your email service
    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: 'pmhoroscope@gmail.com',
      subject: 'New Consultation Request - PM Astrology',
      text: emailContent,
      from: 'noreply@pmastrology.com'
    })
    */

    return NextResponse.json({
      success: true,
      message: "Consultation request submitted successfully",
    })
  } catch (error) {
    console.error("Error processing consultation request:", error)
    return NextResponse.json({ success: false, message: "Failed to submit consultation request" }, { status: 500 })
  }
}
