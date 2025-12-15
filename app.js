const express = require("express");

app = express();

app.get("/api/", (req, res) => {
  res.send("Hello, Node ...!");
});

app.listen(3000, () => {
  console.log(`serveur is running at http://localhost:3000`);
});
