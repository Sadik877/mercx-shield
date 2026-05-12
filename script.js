function checkURL() {

  const url = document.getElementById("urlInput").value.trim();

  const result = document.getElementById("result");

  if (url === "") {

    result.innerHTML = "⚠️ Please enter a URL";
    result.style.color = "#facc15";

    return;
  }

  let risk = 0;

  // Convert to lowercase

  const lowerURL = url.toLowerCase();

  // Suspicious keywords

  const suspiciousWords = [

    "free-money",
    "verify-now",
    "crypto-fast",
    "login-free",
    "gift-card",
    "win-cash",
    "claim-reward",
    "bonus-now",
    "wallet-verify",
    "bank-update",
    "freebtc",
    "airdrop",
    "instant-profit",
    "double-your-btc",
    "password-reset",
    "account-verify",
    "unlock-account"

  ];

  suspiciousWords.forEach(word => {

    if (lowerURL.includes(word)) {
      risk += 2;
    }

  });

  // Dangerous domains

  const riskyDomains = [

    ".tk",
    ".xyz",
    ".gq",
    ".cf",
    ".ml",
    ".top",
    ".buzz",
    ".click"

  ];

  riskyDomains.forEach(domain => {

    if (lowerURL.includes(domain)) {
      risk += 2;
    }

  });

  // URL shorteners

  const shorteners = [

    "bit.ly",
    "tinyurl",
    "goo.gl",
    "t.co",
    "shorturl"

  ];

  shorteners.forEach(shortener => {

    if (lowerURL.includes(shortener)) {
      risk += 2;
    }

  });

  // HTTP instead of HTTPS

  if (lowerURL.startsWith("http://")) {
    risk += 1;
  }

  // Too many numbers

  const numbers = lowerURL.match(/\d/g);

  if (numbers && numbers.length > 6) {
    risk += 1;
  }

  // Too many hyphens

  const hyphens = lowerURL.match(/-/g);

  if (hyphens && hyphens.length > 4) {
    risk += 1;
  }

  // IP address detection

  const ipPattern =
    /https?:\/\/(\d{1,3}\.){3}\d{1,3}/;

  if (ipPattern.test(lowerURL)) {
    risk += 3;
  }

  // Suspicious symbols

  if (
    lowerURL.includes("@") ||
    lowerURL.includes("%") ||
    lowerURL.includes("//")
  ) {
    risk += 1;
  }

  // Fake brand checks

  const fakeBrands = [

    "paypaI",
    "arnazon",
    "faceb00k",
    "micr0soft",
    "goog1e"

  ];

  fakeBrands.forEach(brand => {

    if (lowerURL.includes(brand.toLowerCase())) {
      risk += 3;
    }

  });

  // Final Detection

  if (risk >= 7) {

    result.innerHTML = `
      🚨 HIGH RISK SCAM DETECTED
      <br>
      This website appears extremely dangerous.
    `;

    result.style.color = "#ef4444";

  }

  else if (risk >= 4) {

    result.innerHTML = `
      ⚠️ Suspicious Website
      <br>
      Proceed carefully and avoid sensitive information.
    `;

    result.style.color = "#f59e0b";

  }

  else {

    result.innerHTML = `
      ✅ Link Appears Relatively Safe
      <br>
      No major phishing patterns detected.
    `;

    result.style.color = "#22c55e";

  }

}