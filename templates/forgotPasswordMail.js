const forgotPasswordMail = (email, resetLink) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reset Your Password · ScamPulse</title>
  <style>
    /* Reset & base */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: #030614;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #e2e8f0;
      line-height: 1.5;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px 16px;
    }

    /* Main card */
    .reset-card {
      max-width: 560px;
      width: 100%;
      background: #0b1424;
      border-radius: 32px;
      border: 1px solid #14b8a6;
      box-shadow: 0 30px 60px -10px #000000cc, 0 0 0 1px #14b8a633 inset, 0 0 40px #14b8a6;
      overflow: hidden;
    }

    /* Header */
    .header {
      padding: 32px 32px 20px;
      text-align: center;
      background: linear-gradient(145deg, #0e1a28, #030b16);
      border-bottom: 1px solid #14b8a6;
    }

    .logo {
      font-size: 32px;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin-bottom: 8px;
    }

    .logo .scam {
      color: #ffffff;
      text-shadow: 0 0 10px #14b8a6;
    }

    .logo .pulse {
      color: #14b8a6;
      text-shadow: 0 0 15px #14b8a6;
    }

    .badge {
      display: inline-block;
      background: #14b8a620;
      border: 1px solid #14b8a6;
      border-radius: 40px;
      padding: 6px 22px;
      font-size: 14px;
      font-weight: 500;
      color: #d1f2eb;
      margin-top: 8px;
    }

    /* Content */
    .content {
      padding: 32px 32px 28px;
    }

    h1 {
      font-size: 26px;
      font-weight: 700;
      margin-bottom: 16px;
      color: #ffffff;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    h1 span {
      font-size: 32px;
    }

    .message {
      font-size: 16px;
      color: #cbd5f5;
      margin-bottom: 24px;
      padding-left: 16px;
      border-left: 4px solid #14b8a6;
    }

    .message strong {
      color: #14b8a6;
    }

    /* Email display */
    .email-block {
      background: #0f1a2e;
      border-radius: 20px;
      padding: 18px 22px;
      margin: 24px 0;
      border: 1px solid #14b8a6;
      box-shadow: 0 0 0 2px #14b8a61a inset, 0 0 20px #14b8a6;
    }

    .email-label {
      font-size: 13px;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }

    .email-value {
      font-size: 20px;
      font-weight: 600;
      font-family: 'Fira Code', monospace;
      color: #ffffff;
      word-break: break-all;
    }

    .email-value::before {
      content: "📧";
      margin-right: 10px;
      filter: drop-shadow(0 0 5px #14b8a6);
    }

    /* CTA Button */
    .btn-wrapper {
      text-align: center;
      margin: 32px 0 16px;
    }

    .reset-btn {
      display: inline-block;
      background: linear-gradient(145deg, #14b8a6, #0d9488);
      color: #020617;
      font-weight: 700;
      font-size: 18px;
      padding: 16px 42px;
      border-radius: 60px;
      text-decoration: none;
      box-shadow: 0 12px 24px -8px #14b8a6, 0 0 0 2px #ffffff1a inset;
      transition: all 0.2s;
      border: none;
    }

    .reset-btn:hover {
      box-shadow: 0 16px 32px -8px #14b8a6, 0 0 0 3px #ffffff33 inset;
      transform: scale(1.02);
    }

    .reset-btn span {
      margin-right: 8px;
    }

    /* Link fallback */
    .link-fallback {
      font-size: 14px;
      color: #94a3b8;
      text-align: center;
      margin: 20px 0 10px;
      word-break: break-all;
    }

    .link-fallback a {
      color: #14b8a6;
      text-decoration: none;
      border-bottom: 1px dotted #14b8a6;
    }

    /* Divider */
    .divider {
      height: 2px;
      background: linear-gradient(90deg, transparent, #14b8a6, #5eead4, #14b8a6, transparent);
      margin: 28px 0 20px;
      filter: blur(1px);
    }

    /* Footer note */
    .note {
      font-size: 13px;
      color: #94a3b8;
      text-align: center;
      margin-bottom: 10px;
    }

    .note strong {
      color: #e2e8f0;
    }

    /* Footer */
    .footer {
      padding: 22px 32px;
      background: #030b16;
      border-top: 1px solid #14b8a6;
      text-align: center;
      font-size: 13px;
      color: #7f8ea3;
    }

    .footer a {
      color: #14b8a6;
      text-decoration: none;
      font-weight: 600;
      border-bottom: 1px dotted #14b8a6;
      margin: 0 8px;
    }

    @media (max-width: 500px) {
      .content { padding: 24px 20px; }
      h1 { font-size: 24px; }
      .reset-btn { width: 100%; }
    }
  </style>
</head>
<body>
  <div class="reset-card">
    <!-- Header -->
    <div class="header">
      <div class="logo">
        <span class="scam">Scam</span><span class="pulse">Pulse</span>
      </div>
      <div class="badge">password reset request</div>
    </div>

    <!-- Content -->
    <div class="content">
      <h1>
        <span>🔐</span> Forgot your password?
      </h1>

      <div class="message">
        We received a request to reset the password for your <strong>ScamPulse</strong> account.
      </div>

      <!-- User email (dynamic) -->
      <div class="email-block">
        <div class="email-label">account email</div>
        <div class="email-value">${email}</div>
      </div>

      <!-- Main CTA Button -->
      <div class="btn-wrapper">
        <a href="${resetLink}" class="reset-btn">
          <span>🔄</span> Reset Password
        </a>
      </div>

      <!-- Fallback link (if button doesn't work) -->
      <div class="link-fallback">
        Or copy this link: <br />
        <a href="${resetLink}">${resetLink}</a>
      </div>

      <!-- Divider -->
      <div class="divider"></div>

      <!-- Important notes -->
      <div class="note">
        ⏳ This link will expire in <strong>10 minutes</strong>.<br />
        If you didn't request a password reset, you can safely ignore this email.
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <span>© ${new Date().getFullYear()} ScamPulse · Secure your digital life</span><br />
      <a href="#">Help Center</a> · <a href="#">Report Abuse</a>
    </div>
  </div>
</body>
</html>
    `
}


export default forgotPasswordMail;