require("dotenv").config;
const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

//rutas
const entriesRoutes = require("./routes/entries.routes");
const authorsRoutes = require("./routes/authors.routes");

// Middlewares
const morgan = require("./middlewares/morgan");

// Logger
app.use(morgan(":method :host :status :param[id] - :response-time ms :body"));

//Default
app.get("/", (req, res) => {
  res.send("BBDD  Blog de Noticias");
});
app.use("/api/entries", entriesRoutes.router);
app.use("/api/authors", authorsRoutes.router);

// Para rutas no existentes
app.get("*", (req, res) => {
  res.status(404).send("Gatito triste - 404 not found");
});

app.listen(PORT, () => {
  console.log(`Example app listening on http://localhost:${PORT}`);
});
