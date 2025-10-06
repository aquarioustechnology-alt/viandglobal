import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_acbZcVN2_BkXBX1TtrQfMV8YUrVsnziE6")

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, source } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #D50D0D; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: #666; margin: 5px 0 0 0;">Viand Global</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">Contact Details</h2>
            
            <div style="margin-bottom: 12px;">
              <strong style="color: #555; display: inline-block; width: 80px;">Name:</strong>
              <span style="color: #333;">${name}</span>
            </div>
            
            <div style="margin-bottom: 12px;">
              <strong style="color: #555; display: inline-block; width: 80px;">Email:</strong>
              <span style="color: #333;">${email}</span>
            </div>
            
            ${
              phone
                ? `
            <div style="margin-bottom: 12px;">
              <strong style="color: #555; display: inline-block; width: 80px;">Phone:</strong>
              <span style="color: #333;">${phone}</span>
            </div>
            `
                : ""
            }
            
            <div style="margin-bottom: 12px;">
              <strong style="color: #555; display: inline-block; width: 80px;">Source:</strong>
              <span style="color: #333;">${source || "Contact Form"}</span>
            </div>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px;">
            <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">Message</h2>
            <p style="color: #333; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
            <p style="color: #888; font-size: 12px; margin: 0;">
              Submitted on ${new Date().toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })} IST
            </p>
          </div>
        </div>
      </div>
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Viand Global <noreply@viandglobal.com>",
      to: ["info@viandglobal.com"],
      cc: ["aquatechdesigner@gmail.com"],
      subject: `New Contact Form Submission - ${name}`,
      html: emailHtml,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ message: "Email sent successfully", id: data?.id }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
