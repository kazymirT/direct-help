"use server";

import { PartnersValues } from "@/lib/validateSchema";
import { transporter } from "./mailer";
import { generatePartnersEmail } from "./emailTemplates";

export async function sendPartnersForm(formData: PartnersValues) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_SEND_FROM,
      to: process.env.EMAIL_SEND_TO,
      subject: "Нова форма",
      text: JSON.stringify(formData, null, 2),
      html: generatePartnersEmail(formData),
    });
    return { success: true };
  } catch (err) {
    console.error("Send error", err);
    return { success: false };
  }
}
