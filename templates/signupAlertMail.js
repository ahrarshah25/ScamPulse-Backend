const signupAlertMail = (name, email) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>🎉 Welcome to ScamPulse – Let’s get started</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: #030717;
      background-image: radial-gradient(circle at 100% 20%, rgba(20, 184, 166, 0.08) 0%, transparent 40%),
                        radial-gradient(circle at 0% 90%, rgba(20, 184, 166, 0.05) 0%, transparent 40%);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #e2eaf1;
      line-height: 1.6;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 28px 18px;
      margin: 0;
    }

    .welcome-card {
      max-width: 640px;
      width: 100%;
      background: rgba(8, 16, 28, 0.9);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border-radius: 42px;
      border: 1px solid rgba(20, 184, 166, 0.4);
      box-shadow: 0 40px 80px -10px rgba(0, 0, 0, 0.9),
                  0 0 0 1px rgba(20, 184, 166, 0.3) inset,
                  0 0 50px rgba(20, 184, 166, 0.3);
      overflow: hidden;
      transition: all 0.2s ease;
    }

    /* header with illustration */
    .hero {
      padding: 40px 36px 20px;
      background: linear-gradient(165deg, rgba(20, 184, 166, 0.2) 0%, rgba(2, 18, 28, 0.95) 70%);
      text-align: center;
      border-bottom: 1px solid rgba(20, 184, 166, 0.5);
      position: relative;
    }

    .hero::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 10%;
      width: 80%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #14b8a6, #2dd4bf, #14b8a6, transparent);
      filter: blur(2px);
    }

    .hero-icon {
      width: 90px;
      height: 90px;
      margin: 0 auto 18px;
      background: linear-gradient(145deg, #0e2a34, #05121e);
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #14b8a6;
      box-shadow: 0 15px 30px -8px #14b8a6, 0 0 0 3px rgba(20, 184, 166, 0.3) inset;
    }

    .hero-icon span {
      font-size: 48px;
      filter: drop-shadow(0 0 8px #14b8a6);
    }

    .brand-name {
      font-size: 34px;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 8px;
    }

    .brand-name .scam {
      background: linear-gradient(145deg, #ffffff, #b4f0f0);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      text-shadow: 0 0 15px #14b8a6;
    }

    .brand-name .pulse {
      color: #14b8a6;
      text-shadow: 0 0 20px #14b8a6;
    }

    .welcome-badge {
      display: inline-block;
      background: rgba(20, 184, 166, 0.18);
      border: 1px solid #14b8a6;
      border-radius: 60px;
      padding: 8px 24px;
      margin-top: 10px;
      font-size: 15px;
      font-weight: 500;
      color: #d9f3ee;
      box-shadow: 0 0 20px #14b8a6;
      backdrop-filter: blur(5px);
    }

    .welcome-badge::before {
      content: "🎉";
      margin-right: 10px;
      font-size: 18px;
    }

    /* main content */
    .content {
      padding: 36px 36px 30px;
    }

    h1 {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 12px;
      color: #ffffff;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    h1 span {
      font-size: 36px;
    }

    .greeting {
      font-size: 18px;
      margin-bottom: 24px;
      color: #cbd9f2;
      border-left: 4px solid #14b8a6;
      padding-left: 20px;
      background: linear-gradient(90deg, rgba(20,184,166,0.1), transparent);
    }

    .greeting strong {
      color: #14b8a6;
      font-weight: 700;
    }

    /* user email card */
    .user-card {
      background: rgba(2, 18, 28, 0.7);
      border-radius: 28px;
      padding: 18px 22px;
      margin: 28px 0;
      border: 1px solid #14b8a6;
      box-shadow: 0 0 0 2px rgba(20,184,166,0.2) inset, 0 0 30px #14b8a6;
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    .user-avatar {
      width: 56px;
      height: 56px;
      background: #0d2a38;
      border-radius: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #14b8a6;
    }

    .user-avatar span {
      font-size: 30px;
    }

    .user-details {
      flex: 1;
    }

    .user-details .label {
      font-size: 13px;
      color: #94a3b8;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .user-details .email {
      font-size: 22px;
      font-weight: 600;
      font-family: 'Fira Code', monospace;
      color: #ffffff;
      word-break: break-all;
    }

    .user-details .email::before {
      content: "📧";
      margin-right: 8px;
      font-size: 20px;
      filter: drop-shadow(0 0 5px #14b8a6);
    }

    /* feature grid */
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;
      margin: 32px 0 28px;
    }

    .feature-item {
      background: rgba(0, 12, 22, 0.7);
      border: 1px solid rgba(20, 184, 166, 0.35);
      border-radius: 24px;
      padding: 20px 16px;
      backdrop-filter: blur(2px);
      transition: all 0.2s;
    }

    .feature-item:hover {
      border-color: #14b8a6;
      box-shadow: 0 0 20px #14b8a6;
    }

    .feature-icon {
      font-size: 30px;
      margin-bottom: 12px;
      display: block;
    }

    .feature-title {
      font-weight: 700;
      font-size: 18px;
      color: #ffffff;
      margin-bottom: 6px;
    }

    .feature-desc {
      font-size: 13px;
      color: #9fb0cf;
    }

    /* CTA button */
    .cta-section {
      text-align: center;
      margin: 32px 0 18px;
    }

    .btn-primary {
      background: linear-gradient(145deg, #14b8a6, #0d9488);
      border: none;
      padding: 18px 48px;
      border-radius: 60px;
      font-weight: 700;
      font-size: 18px;
      color: #020617;
      text-decoration: none;
      display: inline-block;
      box-shadow: 0 12px 25px -5px #14b8a6, 0 0 0 2px rgba(255,255,255,0.1) inset;
      transition: all 0.2s;
    }

    .btn-primary:hover {
      box-shadow: 0 18px 30px -5px #14b8a6, 0 0 0 2px #ffffff40 inset;
      transform: scale(1.02);
    }

    .btn-primary span {
      margin-right: 10px;
    }

    .footnote {
      font-size: 13px;
      color: #94a3b8;
      text-align: center;
      margin-top: 24px;
    }

    /* divider */
    .divider {
      margin: 28px 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, #14b8a6, #5eead4, #14b8a6, transparent);
      filter: blur(1.5px);
    }

    /* footer */
    .footer {
      padding: 24px 36px;
      background: rgba(0, 6, 16, 0.9);
      border-top: 1px solid rgba(20, 184, 166, 0.4);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
      color: #8ba0c2;
      backdrop-filter: blur(2px);
    }

    .footer a {
      color: #14b8a6;
      text-decoration: none;
      font-weight: 600;
      border-bottom: 1px dotted #14b8a6;
    }

    @media (max-width: 550px) {
      .hero { padding: 30px 18px; }
      .content { padding: 24px 18px; }
      .feature-grid { grid-template-columns: 1fr; }
      .btn-primary { width: 100%; }
      .footer { flex-direction: column; gap: 15px; text-align: center; }
      .user-card { flex-direction: column; text-align: center; }
    }
  </style>
</head>
<body>
  <div class="welcome-card">
    <div class="hero">
      <div class="hero-icon">
        <span>🛡️</span>
      </div>
      <div class="brand-name">
        <span class="scam">Scam</span><span class="pulse">Pulse</span>
      </div>
      <div class="welcome-badge">
        welcome to the family
      </div>
    </div>

    <div class="content">
      <h1>
        <span>👋</span> Hey ${name || 'there'}!
      </h1>
      <div class="greeting">
        Thanks for joining <strong>ScamPulse</strong>. You're now part of a community that stays one step ahead of fraudsters.
      </div>

      <!-- user email card (personalized) -->
      <div class="user-card">
        <div class="user-avatar">
          <span>👤</span>
        </div>
        <div class="user-details">
          <div class="label">your registered email</div>
          <div class="email">${email}</div>
        </div>
      </div>

      <!-- what's next -->
      <h2 style="font-size: 22px; margin: 16px 0 10px; color:#ffffff;">✨ What's next?</h2>
      <div class="feature-grid">
        <div class="feature-item">
          <span class="feature-icon">🔍</span>
          <div class="feature-title">Verify your email</div>
          <div class="feature-desc">Click the link we sent to confirm your account and enable full protection.</div>
        </div>
        <div class="feature-item">
          <span class="feature-icon">📊</span>
          <div class="feature-title">Complete your profile</div>
          <div class="feature-desc">Add your phone and preferences for personalized alerts.</div>
        </div>
        <!--<div class="feature-item">-->
        <!--  <span class="feature-icon">📱</span>-->
        <!--  <div class="feature-title">Download the app</div>-->
        <!--  <div class="feature-desc">Get real-time scam alerts on the go (iOS & Android).</div>-->
        <!--</div>-->
        <div class="feature-item">
          <span class="feature-icon">🛡️</span>
          <div class="feature-title">Explore dashboard</div>
          <div class="feature-desc">See recent threats, your protection score, and more.</div>
        </div>
      </div>

      <!-- CTA button -->
      

      <div class="footnote"
        If you didn't sign up, please ignore this email.
      </div>

      <!-- divider -->
      <div class="divider"></div>

      <!-- extra info -->
      <div style="background: rgba(20,184,166,0.05); border-radius: 18px; padding: 16px; border: 1px dashed #14b8a6;">
        <p style="display: flex; align-items: center; gap: 12px; color: #ccf0f0; margin:0;">
          <span style="font-size:22px;">⏱️</span>
          <span><strong>Joined on:</strong> ${new Date().toLocaleString()}</span>
        </p>
      </div>
    </div>

    <div class="footer">
      <div>
        <span style="color:#14b8a6;">© ${new Date().getFullYear()} ScamPulse</span> · All rights reserved.
      </div>
      <div>
        <a href="#">Help Center</a> · <a href="#">Privacy</a> · <a href="#">Unsubscribe</a>
      </div>
    </div>
  </div>
</body>
</html>
    `
};

export default signupAlertMail;