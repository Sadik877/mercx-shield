function checkURL() {

  const input = document.getElementById("urlInput");
  const result = document.getElementById("result");

  if (!input || !result) return;

  const url = input.value.trim().toLowerCase();

  if (url === "") {
    result.innerHTML = `
      <div class="result-box warning">
        ⚠️ Please enter a URL
      </div>
    `;
    return;
  }

  let score = 0;
  let reasons = [];

  // Suspicious keywords
  const suspiciousWords = [
    "free-money",
    "verify-now",
    "crypto-fast",
    "login-free",
    "gift-card",
    "win-cash",
    "airdrop",
    "bonus",
    "casino",
    "investment",
    "wallet",
    "bank-update",
    "claim",
    "reward",
    "urgent",
    "telegram",
    "paypal-secure",
    "steam-free",
    "giveaway"
  ];

  suspiciousWords.forEach(word => {
    if (url.includes(word)) {
      score += 2;
      reasons.push(`Keyword detected: ${word}`);
    }
  });

  // Risky domains
  const riskyDomains = [
    ".xyz",
    ".top",
    ".click",
    ".buzz",
    ".gq",
    ".tk",
    ".ml",
    ".work",
    ".country"
  ];

  riskyDomains.forEach(domain => {
    if (url.includes(domain)) {
      score += 2;
      reasons.push(`Risky domain: ${domain}`);
    }
  });

  // URL shorteners
  const shorteners = [
    "bit.ly",
    "tinyurl",
    "goo.gl",
    "t.co",
    "rb.gy",
    "cutt.ly"
  ];

  shorteners.forEach(short => {
    if (url.includes(short)) {
      score += 3;
      reasons.push("Shortened URL detected");
    }
  });

  // @ symbol
  if (url.includes("@")) {
    score += 3;
    reasons.push("@ symbol detected");
  }

  // Too many dashes
  const dashCount = (url.match(/-/g) || []).length;

  if (dashCount >= 4) {
    score += 2;
    reasons.push("Too many hyphens");
  }

  // Too many numbers
  const numberCount = (url.match(/[0-9]/g) || []).length;

  if (numberCount >= 6) {
    score += 2;
    reasons.push("Too many numbers");
  }

  // IP phishing
  const ipPattern = /https?:\/\/\d{1,3}(\.\d{1,3}){3}/;

  if (ipPattern.test(url)) {
    score += 5;
    reasons.push("IP address URL detected");
  }

  // Fake HTTPS tricks
  if (
    url.includes("https-secure") ||
    url.includes("http-login")
  ) {
    score += 3;
    reasons.push("Fake security wording");
  }

  // Long URL
  if (url.length > 100) {
    score += 1;
    reasons.push("Very long URL");
  }

  // Too many subdomains
  const dotCount = (url.match(/\./g) || []).length;

  if (dotCount >= 5) {
    score += 2;
    reasons.push("Too many subdomains");
  }

  // Unicode phishing
  const unicodePattern = /[^\x00-\x7F]/;

  if (unicodePattern.test(url)) {
    score += 4;
    reasons.push("Unicode phishing detected");
  }

  // Final result
  let riskLevel = "";
  let resultClass = "";

  if (score >= 10) {
    riskLevel = "🚨 HIGH RISK PHISHING LINK";
    resultClass = "danger";
  }
  else if (score >= 5) {
    riskLevel = "⚠️ Suspicious Link";
    resultClass = "warning";
  }
  else {
    riskLevel = "✅ Link Appears Safe";
    resultClass = "safe";
  }

  result.innerHTML = `
    <div class="result-box ${resultClass}">

      <h3>${riskLevel}</h3>

      <p class="score">
        Risk Score: ${score}/20
      </p>

      <div class="reasons">
        ${
          reasons.length > 0
            ? reasons.map(reason => `<p>• ${reason}</p>`).join("")
            : "<p>• No major phishing patterns found.</p>"
        }
      </div>

    </div>
  `;
}