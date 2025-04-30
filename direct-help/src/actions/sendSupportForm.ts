"use server";

import { SupportValues } from "@/lib/validateSchema";
import { transporter } from "./mailer";
import { generateSupportEmail } from "./emailTemplates";

export async function sendSupportForm(formData: SupportValues) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_SEND_FROM,
      to: process.env.EMAIL_SEND_TO,
      subject: "Нова форма",
      text: JSON.stringify(formData, null, 2),
      html: generateSupportEmail(formData),
    });
    return { success: true };
  } catch (err) {
    console.error("Send error", err);
    return { success: false };
  }
}
