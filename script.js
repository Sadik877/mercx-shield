/* script.js */

function checkURL() {

  const url =
    document.getElementById("urlInput").value.trim();

  const result =
    document.getElementById("result");

  if (url === "") {

    result.innerHTML =
      "⚠️ Please enter a URL";

    result.style.color = "#facc15";

    return;
  }

  let risk = 0;

  const lowerURL = url.toLowerCase();

  // Suspicious words

  const suspiciousWords = [

    "free-money",
    "verify-now",
    "crypto-fast",
    "gift-card",
    "win-cash",
    "claim-reward",
    "bonus-now",
    "wallet-verify",
    "bank-update",
    "freebtc",
    "airdrop",
    "double-your-btc",
    "password-reset",
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
    "t.co"

  ];

  shorteners.forEach(shortener => {

    if (lowerURL.includes(shortener)) {
      risk += 2;
    }

  });

  // HTTP

  if (lowerURL.startsWith("http://")) {
    risk += 1;
  }

  // IP Address

  const ipPattern =
    /https?:\/\/(\d{1,3}\.){3}\d{1,3}/;

  if (ipPattern.test(lowerURL)) {
    risk += 3;
  }

  // Suspicious symbols

  if (
    lowerURL.includes("@") ||
    lowerURL.includes("%")
  ) {
    risk += 1;
  }

  // Final Result

  if (risk >= 7) {

    result.innerHTML = `
      🚨 HIGH RISK SCAM DETECTED
      <br>
      Dangerous website detected.
    `;

    result.style.color = "#ef4444";

  }

  else if (risk >= 4) {

    result.innerHTML = `
      ⚠️ Suspicious Website
      <br>
      Proceed carefully.
    `;

    result.style.color = "#f59e0b";

  }

  else {

    result.innerHTML = `
      ✅ Link Appears Safe
      <br>
      No major phishing patterns found.
    `;

    result.style.color = "#22c55e";

  }

}