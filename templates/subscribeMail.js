const subscribeMailAdmin = (email) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>🚀 Next‑level subscriber alert · MERN stack</title>
  <style>
    /* -------------------- reset & global -------------------- */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: #030614;
      background-image: radial-gradient(circle at 25% 0%, rgba(20, 184, 166, 0.05) 0%, transparent 25%),
                        radial-gradient(circle at 75% 100%, rgba(20, 184, 166, 0.08) 0%, transparent 30%);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #e2e8f0;
      line-height: 1.5;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px 16px;
      margin: 0;
    }

    /* main card – glass + deep tech vibe */
    .wrapper {
      width: 100%;
      max-width: 680px;
      margin: 0 auto;
    }

    .card {
      background: rgba(10, 18, 30, 0.85);
      backdrop-filter: blur(2px);            /* subtle glass (works in modern email clients that support it) */
      -webkit-backdrop-filter: blur(2px);
      border-radius: 32px;
      border: 1px solid rgba(20, 184, 166, 0.3);
      box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.8),
                  0 0 0 1px rgba(20, 184, 166, 0.2) inset,
                  0 0 30px rgba(20, 184, 166, 0.3);
      overflow: hidden;
      transition: all 0.2s ease;
    }

    /* ----- header with gradient & glow ----- */
    .header {
      padding: 28px 32px 20px 32px;
      background: linear-gradient(145deg, rgba(20, 184, 166, 0.18) 0%, rgba(2, 10, 22, 0.9) 70%);
      border-bottom: 1px solid rgba(20, 184, 166, 0.4);
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    .header-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #14b8a6, #0d9488);
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 20px rgba(20, 184, 166, 0.6), 0 0 0 2px rgba(255,255,255,0.1) inset;
    }

    .header-icon span {
      font-size: 28px;
      filter: drop-shadow(0 2px 4px black);
    }

    .header-text {
      flex: 1;
    }

    .header-text h1 {
      font-size: 24px;
      font-weight: 700;
      letter-spacing: -0.01em;
      background: linear-gradient(135deg, #ffffff 0%, #b2f0e8 90%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      margin-bottom: 4px;
      text-shadow: 0 2px 5px rgba(20,184,166,0.3);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .new-badge {
      background: #14b8a6;
      color: #020617;
      font-size: 12px;
      font-weight: 800;
      padding: 4px 12px;
      border-radius: 40px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      box-shadow: 0 0 15px #14b8a6;
    }

    .sub-header {
      font-size: 15px;
      color: #9caabf;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .sub-header .live-dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: #14b8a6;
      border-radius: 50%;
      box-shadow: 0 0 12px #14b8a6;
      animation: pulse 1.8s infinite;
    }

    /* ----- main content ----- */
    .content {
      padding: 30px 32px;
    }

    /* alert box – futuristic terminal / data card */
    .alert-card {
      background: rgba(2, 8, 20, 0.7);
      border-radius: 28px;
      padding: 24px;
      border: 1px solid rgba(20, 184, 166, 0.35);
      box-shadow: 0 20px 35px -12px black, 0 0 0 1px rgba(20,184,166,0.4) inset, 0 0 25px #14b8a610;
      backdrop-filter: blur(1px);
    }

    .data-row {
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
    }

    .data-label {
      font-size: 13px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #14b8a6;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .data-label span {
      color: #a0b3d9;
      font-size: 18px;
    }

    .email-value {
      background: rgba(0, 0, 0, 0.45);
      padding: 16px 20px;
      border-radius: 20px;
      font-size: 20px;
      font-weight: 600;
      font-family: 'Fira Code', 'JetBrains Mono', 'Cascadia Code', monospace;
      color: #d1f2eb;
      border: 1px solid #14b8a640;
      box-shadow: 0 4px 12px rgba(0,0,0,0.6), 0 0 0 1px #14b8a6 inset;
      word-break: break-all;
      letter-spacing: 0.2px;
      transition: 0.2s;
    }

    .email-value::before {
      content: "✉️";
      margin-right: 12px;
      filter: drop-shadow(0 0 5px #14b8a6);
      opacity: 0.9;
    }

    /* divider — glowing cyan */
    .divider-cosmic {
      margin: 28px 0 24px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #14b8a6, #2dd4bf, #14b8a6, transparent);
      box-shadow: 0 0 12px #14b8a6, 0 0 4px #5eead4;
      border: 0;
    }

    /* meta grid */
    .meta-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 20px 32px;
      background: rgba(0, 15, 20, 0.4);
      border-radius: 24px;
      padding: 18px 24px;
      border: 1px dashed rgba(20, 184, 166, 0.5);
    }

    .meta-item {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .meta-item .meta-tag {
      font-size: 12px;
      font-weight: 500;
      color: #7890b0;
      letter-spacing: 0.5px;
    }

    .meta-item .meta-value {
      font-size: 16px;
      font-weight: 600;
      color: #e6edff;
      background: #0b1729;
      padding: 5px 16px;
      border-radius: 40px;
      border: 1px solid #14b8a650;
      box-shadow: 0 0 10px #14b8a620;
      display: inline-block;
    }

    .meta-value strong {
      color: #14b8a6;
      font-weight: 700;
    }

    /* footer — clean, subtle, but with glow */
    .footer {
      padding: 20px 32px;
      text-align: center;
      background: rgba(0, 5, 15, 0.8);
      border-top: 1px solid rgba(20, 184, 166, 0.35);
      font-size: 14px;
      color: #8193b0;
      box-shadow: 0 -5px 20px rgba(20,184,166,0.1);
      backdrop-filter: blur(2px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }

    .footer-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .shield-icon {
      background: #1e293b;
      border-radius: 30px;
      padding: 5px 10px;
      font-size: 16px;
      border: 1px solid #14b8a670;
    }

    .footer-right {
      font-family: monospace;
      background: #0f172a;
      padding: 6px 18px;
      border-radius: 60px;
      border: 1px solid #14b8a670;
      color: #ccf0e6;
      box-shadow: 0 0 8px #14b8a6;
    }

    /* tiny pulse animation (safe, email clients that support animation) */
    @keyframes pulse {
      0% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.2); }
      100% { opacity: 1; transform: scale(1); }
    }

    /* responsive touch */
    @media (max-width: 480px) {
      .header {
        padding: 22px 18px;
      }
      .content {
        padding: 22px 18px;
      }
      .email-value {
        font-size: 18px;
        padding: 12px 16px;
      }
      .footer {
        flex-direction: column;
        text-align: center;
      }
    }

    /* fallback for non-support */
    .email-value, .meta-value, .new-badge {
      text-shadow: 0 0 5px currentColor;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="card">

      <!-- header with next-level icon & badge -->
      <div class="header">
        <div class="header-icon">
          <span>🚀</span>
        </div>
        <div class="header-text">
          <h1>
            New subscriber alert
            <span class="new-badge">LIVE</span>
          </h1>
          <div class="sub-header">
            <span class="live-dot"></span>
            <span>ScamPulse · real‑time webhook</span>
          </div>
        </div>
      </div>

      <!-- main content area -->
      <div class="content">
        <div class="alert-card">
          
          <!-- email block with ultra-modern treatment -->
          <div class="data-row">
            <div class="data-label">
              <span>📬</span> SUBSCRIBER EMAIL
            </div>
            <div class="email-value">
              ${email}
            </div>
          </div>

          <!-- cosmic divider (looks insane) -->
          <div class="divider-cosmic"></div>

          <!-- metadata grid – professional & structured -->
          <div class="meta-grid">
            <div class="meta-item">
              <span class="meta-tag">🔗 SOURCE</span>
              <span class="meta-value"><strong>ScamPulse</strong> Website</span>
            </div>
            <div class="meta-item">
              <span class="meta-tag">⏱️ TIMESTAMP</span>
              <span class="meta-value" id="dynamicTimestamp">${new Date().toLocaleString()}</span>
            </div>
            <div class="meta-item">
              <span class="meta-tag">🌐 ENV</span>
              <span class="meta-value"><strong>MERN</strong> stack · prod</span>
            </div>
          </div>

          <!-- extra vibe: tiny deco (optional) -->
          <div style="margin-top: 22px; display: flex; gap: 12px; align-items: center; opacity: 0.9; font-size: 13px; color: #14b8a6; border-left: 2px solid #14b8a6; padding-left: 18px;">
            <span>⚡</span>
            <span>webhook delivered · subscriber added to mongodb</span>
          </div>
        </div>
      </div>

      <!-- footer with next-level mern details -->
      <div class="footer">
        <div class="footer-left">
          <span class="shield-icon">🛡️</span>
          <span>ScamPulse · Admin notification</span>
        </div>
        <div class="footer-right">
          <span>ACTION: no reply needed  ✦  cluster: atlas</span>
        </div>
      </div>

    </div> <!-- end card -->
  </div> <!-- end wrapper -->
</body>
</html>

        `;
};

const subscribeMailUser = (email) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>✨ Welcome to ScamPulse – you're in</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: #030717;
      background-image: radial-gradient(circle at 100% 30%, rgba(20, 184, 166, 0.08) 0%, transparent 40%),
                        radial-gradient(circle at 0% 80%, rgba(20, 184, 166, 0.05) 0%, transparent 40%);
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

    /* main card – ultra premium */
    .email-card {
      max-width: 620px;
      width: 100%;
      background: rgba(8, 16, 28, 0.9);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border-radius: 40px;
      border: 1px solid rgba(20, 184, 166, 0.35);
      box-shadow: 0 40px 80px -15px rgba(0, 0, 0, 0.9),
                  0 0 0 1px rgba(20, 184, 166, 0.3) inset,
                  0 0 40px rgba(20, 184, 166, 0.2);
      overflow: hidden;
      transition: transform 0.3s ease;
    }

    /* header with glowing icon + gradient */
    .hero {
      padding: 40px 36px 24px 36px;
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

    .brand-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 18px;
      background: linear-gradient(145deg, #0e2a34, #05121e);
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #14b8a6;
      box-shadow: 0 15px 30px -8px #14b8a680, 0 0 0 3px rgba(20, 184, 166, 0.3) inset;
    }

    .brand-icon span {
      font-size: 44px;
      filter: drop-shadow(0 0 8px #14b8a6);
    }

    .brand-name {
      font-size: 32px;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 6px;
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

    .greeting-badge {
      display: inline-block;
      background: rgba(20, 184, 166, 0.18);
      border: 1px solid #14b8a6;
      border-radius: 60px;
      padding: 8px 24px;
      margin-top: 16px;
      font-size: 15px;
      font-weight: 500;
      color: #d9f3ee;
      box-shadow: 0 0 20px #14b8a630;
      backdrop-filter: blur(5px);
    }

    .greeting-badge::before {
      content: "✓";
      display: inline-block;
      background: #14b8a6;
      color: #020617;
      font-weight: 900;
      width: 22px;
      height: 22px;
      border-radius: 30px;
      margin-right: 10px;
      line-height: 22px;
      font-size: 14px;
      box-shadow: 0 0 12px #14b8a6;
    }

    /* main content */
    .content {
      padding: 36px 36px 28px;
    }

    h2 {
      font-size: 26px;
      font-weight: 700;
      margin-bottom: 16px;
      color: #ffffff;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    h2 span {
      font-size: 32px;
    }

    .intro-text {
      font-size: 16px;
      color: #cbd9f2;
      margin-bottom: 24px;
      border-left: 4px solid #14b8a6;
      padding-left: 20px;
      background: linear-gradient(90deg, rgba(20,184,166,0.1), transparent);
    }

    .feature-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin: 28px 0 24px;
    }

    .feature-item {
      background: rgba(0, 12, 22, 0.6);
      border: 1px solid rgba(20, 184, 166, 0.35);
      border-radius: 24px;
      padding: 18px 12px;
      backdrop-filter: blur(2px);
      box-shadow: 0 6px 14px rgba(0,0,0,0.4);
      transition: 0.2s;
    }

    .feature-item:hover {
      border-color: #14b8a6;
      box-shadow: 0 0 18px #14b8a640;
    }

    .feature-icon {
      font-size: 28px;
      margin-bottom: 10px;
      display: block;
    }

    .feature-title {
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 6px;
      font-size: 16px;
    }

    .feature-desc {
      font-size: 13px;
      color: #9fb0cf;
    }

    .email-highlight {
      background: rgba(2, 18, 28, 0.9);
      border-radius: 30px;
      padding: 22px 26px;
      margin: 30px 0 20px;
      border: 2px dashed rgba(20, 184, 166, 0.7);
      text-align: center;
      box-shadow: 0 0 0 2px rgba(20,184,166,0.2) inset, 0 0 30px #14b8a620;
    }

    .email-label {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 500;
      color: #14b8a6;
      margin-bottom: 12px;
    }

    .email-value {
      font-size: 24px;
      font-weight: 600;
      font-family: 'Fira Code', 'JetBrains Mono', monospace;
      color: #ffffff;
      background: #020d18;
      padding: 14px 22px;
      border-radius: 60px;
      display: inline-block;
      border: 1px solid #14b8a6;
      box-shadow: 0 0 25px #14b8a6, 0 0 0 1px #14b8a6 inset;
      word-break: break-all;
    }

    .email-value::before {
      content: "📬";
      margin-right: 14px;
      font-size: 26px;
      filter: drop-shadow(0 0 6px white);
    }

    .divider-cosmic {
      margin: 32px 0 28px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #14b8a6, #5eead4, #14b8a6, transparent);
      filter: blur(1.5px);
    }

    .next-steps {
      background: rgba(20, 184, 166, 0.05);
      border-radius: 28px;
      padding: 22px 28px;
      border: 1px solid rgba(20,184,166,0.25);
    }

    .next-steps p {
      display: flex;
      align-items: center;
      gap: 14px;
      font-size: 15px;
      color: #d4e2fc;
    }

    .next-steps .arrow {
      font-size: 22px;
    }

    .footer {
      padding: 28px 36px;
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

    .footer-left {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .footer-badge {
      background: #0f1a2b;
      padding: 5px 15px;
      border-radius: 40px;
      border: 1px solid #14b8a680;
      color: #b3e6dc;
    }

    .footer a {
      color: #14b8a6;
      text-decoration: none;
      font-weight: 600;
      border-bottom: 1px dotted #14b8a6;
    }

    .footer a:hover {
      text-shadow: 0 0 6px #14b8a6;
    }

    /* responsive */
    @media (max-width: 500px) {
      .hero { padding: 30px 20px; }
      .content { padding: 25px 20px; }
      .feature-grid { grid-template-columns: 1fr; }
      .email-value { font-size: 18px; }
      .footer { flex-direction: column; gap: 15px; text-align: center; }
    }

    /* tiny animation for live feel */
    @keyframes softPulse {
      0% { opacity: 0.8; box-shadow: 0 0 0 0 #14b8a6; }
      50% { opacity: 1; box-shadow: 0 0 20px 2px #14b8a6; }
      100% { opacity: 0.8; box-shadow: 0 0 0 0 #14b8a6; }
    }
    .brand-icon {
      animation: softPulse 3s infinite;
    }
  </style>
</head>
<body>
  <div class="email-card">
    <!-- hero with brand icon & badge -->
    <div class="hero">
      <div class="brand-icon">
        <span>🛡️</span>
      </div>
      <div class="brand-name">
        <span class="scam">Scam</span><span class="pulse">Pulse</span>
      </div>
      <div class="greeting-badge">
        welcome aboard · verified subscriber
      </div>
    </div>

    <!-- main content area -->
    <div class="content">
      <h2>
        <span>✨</span> You're officially protected
      </h2>
      <div class="intro-text">
        Thanks for joining the most advanced scam intelligence network. Your subscription is active and you’re now part of a community that stays ahead of threats.
      </div>

      <!-- feature grid – adds value & next-level feel -->
      <div class="feature-grid">
        <div class="feature-item">
          <span class="feature-icon">⚡</span>
          <div class="feature-title">real‑time alerts</div>
          <div class="feature-desc">Instant notifications about emerging fraud patterns</div>
        </div>
        <div class="feature-item">
          <span class="feature-icon">🔒</span>
          <div class="feature-title">enterprise grade</div>
          <div class="feature-desc">bank‑level encryption for your data</div>
        </div>
        <div class="feature-item">
          <span class="feature-icon">🌐</span>
          <div class="feature-title">global intelligence</div>
          <div class="feature-desc">threats detected from 50+ sources</div>
        </div>
        <div class="feature-item">
          <span class="feature-icon">🎯</span>
          <div class="feature-title">personalized</div>
          <div class="feature-desc">insights tailored to your activity</div>
        </div>
      </div>

      <!-- email box with ultra glow -->
      <div class="email-highlight">
        <div class="email-label">registered email</div>
        <div class="email-value">${email}</div>
      </div>

      <!-- cosmic divider -->
      <div class="divider-cosmic"></div>

      <!-- next steps / reassuring message -->
      <div class="next-steps">
        <p>
          <span class="arrow">➡️</span>
          <strong>next step:</strong> keep an eye on your inbox – we’ll send you a curated fraud report every week. no spam, only signals.
        </p>
        <p style="margin-top: 16px; opacity: 0.9;">
          <span style="color:#14b8a6;">⏱️</span> timestamp of subscription: ${new Date().toLocaleString()}
        </p>
      </div>
    </div>

    <!-- footer with mern tech detail & reassurance -->
    <div class="footer">
      <div class="footer-left">
        <span class="footer-badge">MERN stack · secure</span>
        <span>© 2026 ScamPulse</span>
      </div>
      <div>
        <a href="https://scampulse.com/dashboard">dashboard</a> · 
        <a href="mailto:scampulse.io@gmail.com">report scam</a> · 
        <span style="color:#14b8a6;">${new Date().getFullYear()}</span>
      </div>
    </div>
  </div>
</body>
</html>

    `;
};

export { subscribeMailAdmin, subscribeMailUser };
