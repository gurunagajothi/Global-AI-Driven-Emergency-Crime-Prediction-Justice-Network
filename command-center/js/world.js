// world.js - SURAKSHA-OMEGA Professional Dashboard
// Shows live SOS status for multiple countries with auto-refresh

const statusDiv = document.getElementById("status");

// List of countries to monitor
const countries = ["IN", "US", "UK", "EU"]; // Add more as needed

// Fetch SOS status from backend for a single country
async function fetchSOS(country) {
  try {
    const response = await fetch(`http://localhost:8080/sos/${country}`, {
      method: "POST",
    });
    const text = await response.text();
    return `${country}: ${text}`;
  } catch (err) {
    console.error(err);
    return `${country}: ⚠️ Backend not reachable!`;
  }
}

// Fetch all countries and update dashboard
async function updateDashboard() {
  const results = await Promise.all(countries.map(fetchSOS));
  statusDiv.innerHTML = ""; // clear previous
  results.forEach(r => {
    const p = document.createElement("p");
    p.innerText = r;
    statusDiv.appendChild(p);
  });
}

// Initial load
updateDashboard();

// Auto-refresh every 5 seconds
setInterval(updateDashboard, 5000);
