const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/clients", (req, res) => {
  try {
    const client = req.body;

    const clients = JSON.parse(fs.readFileSync("./clients.json", "utf-8"));

    clients.push(client);

    fs.writeFileSync("./clients.json", JSON.stringify(clients, null, 2));

    res.status(201).json({
      message: "Client saved successfully",
      client: client,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to save client",
    });
  }
});

app.get("/clients", (req, res) => {
  const clients = JSON.parse(fs.readFileSync("./clients.json", "utf-8"));

  res.json(clients);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
