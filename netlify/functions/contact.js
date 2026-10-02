const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAILS = ["marketing@elevationspine.com", "martinklazmer@elevationspine.com"];
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Elevation Spine <onboarding@resend.dev>";

export async function handler(event, context) {
  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    let payload = {};
    if (event.body) {
      try {
        payload = JSON.parse(event.body);
      } catch {
        const params = new URLSearchParams(event.body);
        payload = Object.fromEntries(params.entries());
      }
    }

    const {
      firstName = "",
      lastName = "",
      email = "",
      phone = "",
      organization = "",
      territory = "",
      product = "",
      message = "",
      audience = "General Inquiry",
    } = payload;

    if (!email) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Email is required" }),
      };
    }

    const fullName = `${firstName} ${lastName}`.trim() || "Website Visitor";
    const subject = `[Elevation Spine] New Inquiry: ${fullName} (${audience}${product ? ` - ${product}` : ""})`;

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #0f172a; }
    .card { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
    .header { background: #0a0e17; padding: 28px 32px; color: #ffffff; }
    .header h1 { margin: 0 0 6px 0; font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: -0.01em; }
    .header p { margin: 0; font-size: 13px; color: #2ac4f4; text-transform: uppercase; letter-spacing: 0.12em; font-family: monospace; font-weight: 600; }
    .content { padding: 32px; }
    .pill { display: inline-block; padding: 4px 10px; border-radius: 4px; background: #f0f9ff; color: #0284c7; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 20px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    th { text-align: left; padding: 10px 12px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; font-weight: 600; border-bottom: 1px solid #f1f5f9; width: 35%; }
    td { padding: 10px 12px; font-size: 14px; color: #1e293b; border-bottom: 1px solid #f1f5f9; }
    .message-box { background: #f8fafc; border-left: 3px solid #2ac4f4; padding: 16px; border-radius: 0 6px 6px 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; margin-top: 8px; }
    .footer { padding: 20px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
    a { color: #0284c7; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Website Lead / Contact Submission</h1>
      <p>Elevation Spine Web Portal</p>
    </div>
    <div class="content">
      <div class="pill">Audience: ${audience}</div>
      <table>
        <tr>
          <th>Full Name</th>
          <td><strong>${fullName}</strong></td>
        </tr>
        <tr>
          <th>Email Address</th>
          <td><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <th>Phone Number</th>
          <td>${phone ? `<a href="tel:${phone}">${phone}</a>` : "Not provided"}</td>
        </tr>
        <tr>
          <th>Organization / Facility</th>
          <td>${organization || "Not provided"}</td>
        </tr>
        <tr>
          <th>State / Territory</th>
          <td>${territory || "Not provided"}</td>
        </tr>
        <tr>
          <th>Product of Interest</th>
          <td><strong>${product || "General Inquiry"}</strong></td>
        </tr>
      </table>

      <h3 style="margin: 20px 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b;">Message / Inquiry:</h3>
      <div class="message-box">${message || "(No message provided)"}</div>
    </div>
    <div class="footer">
      Sent from the official Elevation Spine Website contact form.<br/>
      You can reply directly to this email to contact <strong>${fullName}</strong> at <a href="mailto:${email}">${email}</a>.
    </div>
  </div>
</body>
</html>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAILS,
        reply_to: email,
        subject,
        html,
      }),
    });

    const resendData = await resendRes.json();

    if (!resendRes.ok) {
      console.error("Resend API error:", resendData);
      return {
        statusCode: resendRes.status,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: resendData }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ success: true, id: resendData.id }),
    };
  } catch (err) {
    console.error("Contact handler error:", err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: err.message }),
    };
  }
}
