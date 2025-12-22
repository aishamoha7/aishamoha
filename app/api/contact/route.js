import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        // Basic validation
        if (!name || !email || !message) {
            return Response.json(
                { success: false, error: "Missing required fields" },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: ["caishamohamed252@gmail.com"],
            subject: `New message from ${name}`,
            reply_to: email,
            html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br>")}</p>
      `,
        });

        return Response.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Resend error:", error);
        return Response.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
