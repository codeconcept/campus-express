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

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
