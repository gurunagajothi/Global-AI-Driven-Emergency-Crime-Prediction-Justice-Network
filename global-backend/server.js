const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 8080;

app.post("/sos/:country", (req, res) => {
    const country = req.params.country;
    let number;
    switch(country) {
        case "IN": number = 112; break;
        case "US": number = 911; break;
        case "UK": number = 999; break;
        case "EU": number = 112; break;
        default: number = 000;
    }
    res.send(`SOS routed to ${number}`);
});

app.listen(PORT, () => {
    console.log("🌍 SURAKSHA-OMEGA Global Backend Live");
});
