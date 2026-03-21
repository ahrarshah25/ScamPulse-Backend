const loginAlertMail = (
  loginTime,
  timeZone,
  device,
  browser,
  city,
  region,
  country,
  ipAddress,
) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>🔐 Login Alert · ScamPulse</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: #030717;
      background-image: radial-gradient(circle at 20% 20%, rgba(20, 184, 166, 0.1) 0%, transparent 40%),
                        radial-gradient(circle at 90% 70%, rgba(239, 68, 68, 0.08) 0%, transparent 40%);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #e2eaf1;
      line-height: 1.6;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px 18px;
      margin: 0;
    }

    .alert-card {
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

    /* header – alert version with red/cyan mix */
    .alert-header {
      padding: 32px 32px 20px;
      background: linear-gradient(165deg, rgba(239, 68, 68, 0.15) 0%, rgba(2, 18, 28, 0.95) 70%);
      border-bottom: 1px solid rgba(239, 68, 68, 0.5);
      text-align: center;
      position: relative;
    }

    .alert-header::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 10%;
      width: 80%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #ef4444, #f59e0b, #14b8a6, transparent);
      filter: blur(2px);
    }

    .alert-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 16px;
      background: linear-gradient(145deg, #2a1a1a, #140c0c);
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #ef4444;
      box-shadow: 0 15px 30px -8px #ef4444a0, 0 0 0 3px rgba(239, 68, 68, 0.3) inset;
    }

    .alert-icon span {
      font-size: 44px;
      filter: drop-shadow(0 0 8px #ef4444);
    }

    .brand-small {
      font-size: 22px;
      font-weight: 700;
      letter-spacing: -0.01em;
      margin-bottom: 6px;
    }

    .brand-small .scam {
      color: #ffffff;
      text-shadow: 0 0 8px #14b8a6;
    }

    .brand-small .pulse {
      color: #14b8a6;
    }

    .badge-alert {
      display: inline-block;
      background: rgba(239, 68, 68, 0.2);
      border: 1px solid #ef4444;
      border-radius: 60px;
      padding: 8px 28px;
      margin-top: 12px;
      font-size: 16px;
      font-weight: 600;
      color: #ffd9d9;
      box-shadow: 0 0 25px #ef4444a0;
      backdrop-filter: blur(5px);
    }

    .badge-alert::before {
      content: "⚠️";
      margin-right: 10px;
      font-size: 18px;
    }

    /* content */
    .content {
      padding: 32px 36px 30px;
    }

    h2 {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 20px;
      color: #ffffff;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    h2 span {
      font-size: 34px;
    }

    .warning-note {
      font-size: 16px;
      color: #f9d3d3;
      background: rgba(239, 68, 68, 0.1);
      border-left: 5px solid #ef4444;
      padding: 14px 20px;
      border-radius: 18px;
      margin-bottom: 28px;
    }

    /* details grid – using same style as feature grid but two columns */
    .details-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin: 24px 0 28px;
    }

    .detail-item {
      background: rgba(0, 12, 22, 0.7);
      border: 1px solid rgba(20, 184, 166, 0.3);
      border-radius: 24px;
      padding: 18px 16px;
      backdrop-filter: blur(2px);
      box-shadow: 0 6px 14px rgba(0,0,0,0.5);
    }

    .detail-icon {
      font-size: 26px;
      margin-bottom: 10px;
      display: block;
    }

    .detail-label {
      font-weight: 600;
      color: #96b8d4;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 6px;
    }

    .detail-value {
      font-weight: 700;
      color: #ffffff;
      font-size: 18px;
      word-break: break-word;
    }

    .detail-value small {
      font-weight: 400;
      font-size: 14px;
      color: #14b8a6;
    }

    /* ip / location specific style */
    .ip-value {
      font-family: 'Fira Code', monospace;
      background: #0b1729;
      padding: 8px 14px;
      border-radius: 40px;
      border: 1px solid #14b8a6;
      display: inline-block;
    }

    .divider-alert {
      margin: 28px 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, #ef4444, #f59e0b, #14b8a6, transparent);
      filter: blur(1.5px);
    }

    /* action buttons */
    .action-group {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      margin: 36px 0 18px;
    }

    .btn-primary {
      background: linear-gradient(145deg, #14b8a6, #0d9488);
      border: none;
      padding: 16px 38px;
      border-radius: 60px;
      font-weight: 700;
      font-size: 16px;
      color: #020617;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 10px 20px -5px #14b8a6, 0 0 0 2px rgba(255,255,255,0.1) inset;
      transition: 0.2s;
    }

    .btn-primary:hover {
      box-shadow: 0 15px 25px -5px #14b8a6, 0 0 0 2px #ffffff40 inset;
      transform: scale(1.02);
    }

    .btn-secondary {
      background: transparent;
      border: 2px solid #14b8a6;
      padding: 14px 30px;
      border-radius: 60px;
      font-weight: 600;
      font-size: 16px;
      color: #e2f0f0;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 0 15px #14b8a640;
    }

    .btn-secondary:hover {
      background: #14b8a620;
    }

    .footnote {
      font-size: 13px;
      color: #94a3b8;
      text-align: center;
      margin-top: 24px;
      padding: 10px;
      border-radius: 30px;
      background: #0f1a2b60;
    }

    .footer {
      padding: 24px 36px;
      background: rgba(0, 6, 16, 0.9);
      border-top: 1px solid rgba(239, 68, 68, 0.4);
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
      .content { padding: 22px 18px; }
      .details-grid { grid-template-columns: 1fr; }
      .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
      .footer { flex-direction: column; gap: 15px; text-align: center; }
    }
  </style>
</head>
<body>
  <div class="alert-card">
    <!-- header with alert styling -->
    <div class="alert-header">
      <div class="alert-icon">
        <span>🔐</span>
      </div>
      <div class="brand-small">
        <span class="scam">Scam</span><span class="pulse">Pulse</span>
      </div>
      <div class="badge-alert">
        login alert · action may be needed
      </div>
    </div>

    <!-- main content -->
    <div class="content">
      <h2>
        <span>⚠️</span> New login to your account
      </h2>

      <div class="warning-note">
        We detected a new sign‑in to your ScamPulse account. If this was you, you can ignore this alert. If you don’t recognize this activity, secure your account immediately.
      </div>

      <!-- login details grid (like feature grid but for info) -->
      <div class="details-grid">
        <div class="detail-item">
          <span class="detail-icon">🕒</span>
          <div class="detail-label">time</div>
          <div class="detail-value">${loginTime}<br><small>${timeZone}</small></div>
        </div>
        <div class="detail-item">
          <span class="detail-icon">📱</span>
          <div class="detail-label">device & browser</div>
          <div class="detail-value">${device}<br><small>${browser}</small></div>
        </div>
        <div class="detail-item">
          <span class="detail-icon">📍</span>
          <div class="detail-label">location (approx)</div>
          <div class="detail-value">${city}, ${region}<br><small>${country}</small></div>
        </div>
        <div class="detail-item">
          <span class="detail-icon">🌐</span>
          <div class="detail-label">IP address</div>
          <div class="detail-value"><span class="ip-value">${ipAddress}</span></div>
        </div>
      </div>

      <!-- cosmic divider -->
      <div class="divider-alert"></div>

      <!-- two call-to-action buttons -->
      <div class="action-group">
        <a href="#" class="btn-primary">
          <span>🔒</span> Secure your account
        </a>
        <a href="#" class="btn-secondary">
          <span>✅</span> It was me
        </a>
      </div>

      <div class="footnote">
        If you choose "It was me", this device will be trusted for future logins.<br>
        You can always review sessions in your account dashboard.
      </div>
    </div>

    <!-- footer with support & timestamp -->
    <div class="footer">
      <div>
        <span style="color:#ef4444;">⚠️</span> ScamPulse security · ${new Date().toLocaleString()}
      </div>
      <div>
        <a href="#">report fraud</a> · <a href="#">contact support</a>
      </div>
    </div>
  </div>
</body>
</html>
    `;
};

export default loginAlertMail;
