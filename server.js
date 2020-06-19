const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => res.send("api running"));

app.use("/api/users", require("./routes/api/users"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server  started on port ${PORT}`));
