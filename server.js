const express = require("express");
const app = express();
const url = "127.0.0.1";
const port = "3600";

app.use(express.json());

app.get("/inicio", (req, res) => {
  res.send("Olá Mundo!");
});

app.listen(port, url, () => {
  console.log(`Servidor rodando na url http://${url}:${port}`);
});
