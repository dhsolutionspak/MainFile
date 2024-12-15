import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, subject, message, company, services } =
      req.body;

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
      secure: process.env.SMTP_SECURE === "true", // Convert to boolean
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender details
      to: "hello@dhsol.net", // Your company email
      subject: `New Contact Form Submission: ${subject}`,
      text: `You have received a new message from your contact form.\n\n
        Name: ${name}\n
        Email: ${email}\n
        Phone: ${phone || "N/A"}\n
        Subject: ${subject}\n
        Company: ${company}\n
        Services Wanted: ${services}\n
        Message:\n${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({
        success: false,
        message: "Failed to send email. Please try again later.",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
