import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function devContactPlugin(apiKey?: string) {
  return {
    name: 'dev-contact-plugin',
    configureServer(server: any) {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        if (req.url === '/.netlify/functions/contact' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => { body += chunk; });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body || '{}');
              const {
                firstName = '',
                lastName = '',
                email = '',
                phone = '',
                organization = '',
                territory = '',
                product = '',
                message = '',
                audience = 'General Inquiry',
              } = data;

              const fullName = `${firstName} ${lastName}`.trim() || 'Website Visitor';
              const subject = `[Elevation Spine] New Inquiry: ${fullName} (${audience}${product ? ` - ${product}` : ''})`;

              const html = `
<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>New Contact Submission from Elevation Spine Website</h2>
  <p><strong>Audience:</strong> ${audience}</p>
  <p><strong>Name:</strong> ${fullName}</p>
  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
  <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
  <p><strong>Organization / Practice:</strong> ${organization || 'N/A'}</p>
  <p><strong>State / Territory:</strong> ${territory || 'N/A'}</p>
  <p><strong>Product of Interest:</strong> ${product || 'General Inquiry'}</p>
  <hr />
  <p><strong>Message:</strong></p>
  <p style="white-space: pre-wrap;">${message || '(No message provided)'}</p>
</body>
</html>`;

              if (!apiKey) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'RESEND_API_KEY not configured in .env.local or environment' }));
                return;
              }

              const deliveryResults = await Promise.all(
                ['marketing@elevationspine.com', 'martinklazmer@elevationspine.com'].map(async (recipient) => {
                  try {
                    const r = await fetch('https://api.resend.com/emails', {
                      method: 'POST',
                      headers: {
                        'Authorization': 'Bearer ' + apiKey,
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        from: 'Elevation Spine <onboarding@resend.dev>',
                        to: [recipient],
                        reply_to: email,
                        subject,
                        html,
                      }),
                    });
                    const d = await r.json();
                    return { recipient, ok: r.ok, status: r.status, data: d };
                  } catch (e: any) {
                    return { recipient, ok: false, error: e.message };
                  }
                })
              );

              const hasSuccess = deliveryResults.some((r) => r.ok);
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = hasSuccess ? 200 : 502;
              res.end(JSON.stringify({ success: hasSuccess, deliveries: deliveryResults }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY;

  return {
    base: process.env.NETLIFY ? '/' : (command === 'serve' ? '/' : './'),
    build: {
      outDir: 'docs',
      emptyOutDir: true,
    },
    plugins: [
      react(),
      tailwindcss(),
      devContactPlugin(apiKey),
    ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
  };
})
