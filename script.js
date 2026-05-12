function checkURL() {

  const url = document.getElementById("urlInput").value.trim();

  const result = document.getElementById("result");

  // Empty Input

  if (url === "") {

    result.innerHTML = "⚠️ Please enter a URL";
    result.style.color = "#facc15";

    return;
  }

  // Dangerous Keywords

  const suspiciousWords = [

    "free-money",
    "verify-now",
    "crypto-fast",
    "login-free",
    "gift-card",
    "win-cash",
    "bonus-now",
    "claim-reward",
    "airdrop-free",
    "double-your-btc",
    "instant-profit",
    "freebtc",
    "wallet-verify",
    "bank-update",
    "free-crypto",
    "investment-fast"

  ];

  let risk = 0;

  // Check Suspicious Keywords

  suspiciousWords.forEach(word => {

    if (url.toLowerCase().includes(word)) {
      risk += 2;
    }

  });

  // HTTP check

  if (url.startsWith("http://")) {
    risk += 1;
  }

  // Too many numbers check

  const numbers = url.match(/\d+/g);

  if (numbers && numbers.length > 3) {
    risk += 1;
  }

  // Fake domain patterns

  const fakeDomains = [

    ".xyz",
    ".tk",
    ".gq",
    ".ml",
    ".cf"

  ];

  fakeDomains.forEach(domain => {

    if (url.includes(domain)) {
      risk += 1;
    }

  });

  // Suspicious symbols

  if (url.includes("@") || url.includes("%")) {
    risk += 1;
  }

  // Final Analysis

  if (risk >= 4) {

    result.innerHTML = `
      🚨 Dangerous Website Detected
      <br>
      High scam probability.
    `;

    result.style.color = "#ef4444";

  }

  else if (risk >= 2) {

    result.innerHTML = `
      ⚠️ Suspicious Link
      <br>
      Proceed carefully.
    `;

    result.style.color = "#f59e0b";

  }

  else {

    result.innerHTML = `
      ✅ Link Appears Safe
      <br>
      No major threats detected.
    `;

    result.style.color = "#22c55e";

  }

}

// Smooth Navbar Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({

      behavior: "smooth"

    });

  });

});

// Small Fade Animation

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});