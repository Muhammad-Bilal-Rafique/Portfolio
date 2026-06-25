"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Please fill out all fields." };
  }

  try {
const data = await resend.emails.send({
      from: "Portfolio Contact <hello@bilaldev.tech>",
      to: "bilalrafique271@gmail.com",
      subject: `📩 New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: 'Inter', Helvetica, sans-serif; background-color: #09090b; padding: 40px 20px; color: #e4e4e7;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #18181b; border: 1px solid #27272a; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);">
            
            
            <div style="padding: 24px; border-bottom: 1px solid #27272a;">
              <h2 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 600; letter-spacing: -0.02em;">New Contact Request</h2>
              <p style="margin: 8px 0 0 0; color: #a1a1aa; font-size: 14px;">Incoming message from bilaldev.tech</p>
            </div>
            
            
            <div style="padding: 24px;">
              
              <!-- Sender Info -->
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 4px 0; color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Sender Details</p>
                <p style="margin: 0 0 2px 0; color: #ffffff; font-size: 16px; font-weight: 500;">${name}</p>
                <a href="mailto:${email}" style="color: #34d399; text-decoration: none; font-size: 14px;">${email}</a>
              </div>
              
             
              <div>
                <p style="margin: 0 0 8px 0; color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Message</p>
                <div style="background-color: #09090b; padding: 16px; border-radius: 6px; border: 1px solid #27272a;">
                  <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #d4d4d8; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      `,
    });

    return { success: true, data };
  } catch {
    return { error: "Something went wrong. Please try again." };
  }
}