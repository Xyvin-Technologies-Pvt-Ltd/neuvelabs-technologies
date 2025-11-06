export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // In production, you would:
    // 1. Send email using a service like SendGrid, Resend, or AWS SES
    // 2. Save to database
    // 3. Send notification to Slack/Teams
    // For now, we'll just log and return success

    console.log("Contact form submission:", {
      name,
      email,
      company,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service
    // Example with a hypothetical email service:
    // await sendEmail({
    //   to: 'info@neuvelabs.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company || 'N/A'}</p>
    //     <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `
    // });

    return Response.json(
      { message: "Thank you for your message. We'll get back to you soon!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

