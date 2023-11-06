const User = require("../models/userModel");

const createUser = async ( req, res ) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });

  if (!findUser) {
    // Criando um novo usuario
    const newUser = User.create(req.body);
    res.json(newUser);
  } else {
      res.json({
        msg: "Usuário já Existe!",
        success: false,
    });
  }
};

module.exports = { createUser };