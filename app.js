const express = require("express");
const utils = require("./utils");
const app = express();

const resolutions = [
  { id: 1, title: "Moins de Netflix" },
  { id: 2, title: "Plus de sport" },
  { id: 3, title: "Aller se coucher avant 1h00 du matin" }
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/good-resolutions", (req, res) => {
  const orderBy = req.query.orderBy;
  console.log("req.query", req.query);
  if (orderBy === "title") {
    const orderedResolutions = utils.sortByTitle(resolutions);
    console.log("orderedResolutions", orderedResolutions);
    res.send(orderedResolutions);
  } else {
    console.log("resolutions", resolutions);
    res.send(resolutions);
  }
});

app.get("/api/good-resolutions/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const resolution = resolutions.find(r => r.id === id);
  if (!resolution) {
    return res.status(404).send({ message: `No resolution with id ${id}` });
  }
  res.send(resolution);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
