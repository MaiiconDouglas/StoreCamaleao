const mongoose = require("mongoose"); // Erase if already required


var prodcategorySchema = new mongoose.Schema( // Declare the Schema of the Mongo model
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
	{
		timestamps: true,
	}
);


module.exports = mongoose.model("PCategory", prodcategorySchema); //Export the model