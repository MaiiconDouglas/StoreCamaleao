const { default: mongoose } = require("mongoose");
mongoose.set('strictQuery', false);

const dbConnect = () => {
  try {
  const conn = mongoose.connect("mongodb://127.0.0.1:27017/cammaleao");
  console.log("Banco de Dados Conectado com Sucesso!!");
} catch(error) {
  console.log("Erro no Banco de Dados!")
  }
};

module.exports = dbConnect;