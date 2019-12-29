const express = require("express");
const app = express();

const resolutions = [
  { id: 1, title: "Moins de Netflix" },
  { id: 2, title: "Plus de sport" }
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/good-resolutions", (req, res) => {
  res.json(resolutions);
});

// to set an environment variable on Linux / Mac
// export PORT = 3001
// on Windows
// set PORT = 3001
// in PowerShell
// $env:PORT = 3001
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
