const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;  // PORTA DO SERVIDOR 4000
const authRouter = require("./routes/authRoute");

dbConnect();  // Conecta com o banco de dados

app.use("/api/user", authRouter);
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`); //O servidor está rodando em PORT
});