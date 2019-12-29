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

app.get("/api/good-resolutions/:id", (req, res) => {
  console.log("req.params", req.params);
  const id = req.params.id;
  res.send(`id ${id}`);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
