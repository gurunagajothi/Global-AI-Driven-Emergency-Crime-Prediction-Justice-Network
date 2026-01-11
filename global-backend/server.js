const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const emergencyNumbers = {
  IN: "112",
  US: "911",
  UK: "999",
  EU: "112"
};

app.post("/sos/:country", (req, res) => {
  const country = req.params.country.toUpperCase();
  const number = emergencyNumbers[country];

  if (!number) {
    return res.status(400).send("Unknown country");
  }

  console.log(`🚨 SOS received from ${country}`);
  res.send(`SOS routed to ${number}`);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("🌍 SURAKSHA-OMEGA Global Backend Live on port", PORT);
});
