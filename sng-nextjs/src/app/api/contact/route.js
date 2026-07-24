import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, project, message } = data;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and Email are required' }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'siddhinarayangroupdirector@gmail.com',
      replyTo: email,
      subject: `New Inquiry: ${project || 'General Inquiry'} - ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #c2a661; margin-top: 0; text-transform: uppercase; letter-spacing: 2px;">New Inquiry Received</h2>
          <p style="color: #555; font-size: 16px;">You have received a new private viewing inquiry from the website.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 10px 0;"><strong>Project of Interest:</strong> ${project || 'Not Specified'}</p>
          </div>

          <h3 style="color: #333; margin-bottom: 10px;">Message Details:</h3>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin: 0; color: #444; white-space: pre-wrap;">${message || 'No message provided.'}</p>
          
          <div style="margin-top: 30px; font-size: 12px; color: #999; border-top: 1px solid #eaeaea; padding-top: 10px;">
            <p>This is an automated message from the Siddhi Narayan Group Website Form.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email. Check configuration.' }), { status: 500 });
  }
}
