export const prerender = false;
import type { APIRoute } from "astro";
import sgMail from "@sendgrid/mail";

interface EmailMessage {
  to: string | { email: string; name: string }[];
  from: string;
  replyTo: { email: string; name: string };
  subject: string;
  text: string;
}
sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);
async function sendEmail(msg: EmailMessage): Promise<void> {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    throw new Error("Error sending email");
  }
}

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const phone = data.get("phone") as string;
  const message = data.get("message") as string;

  //   Validation pending

  if (!name || !email || !message || !phone) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }

  const msg: EmailMessage = {
    to: [
      { email: "ipmovilesdev@gmail.com", name: "IP Moviles" },
      { email: "andres.morales@ipmoviles.net", name: "Andres" },
    ],
    from: "ipmovilesdev@gmail.com",
    replyTo: { email, name },
    subject: `Contact form submission from ${name}`,
    text: `Subject: Contact from ${name}\n\nHello,\n\nYou have received a new inquiry from a potential customer. Here are the details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\n\nPlease follow up with them to provide the attention they need. Building strong customer relationships is key to our success.\n\nBest regards,\nIP Moviles Website`,
  };

  try {
    await sendEmail(msg);
    return new Response(
      JSON.stringify({
        message:
          "Thank you for getting in touch with us! Your message has been successfully sent. We will be in touch with you soon.",
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Error sending email",
      }),
      { status: 500 }
    );
  }
};
