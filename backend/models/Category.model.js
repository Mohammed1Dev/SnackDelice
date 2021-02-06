const mongoose = require('./database/config.js');
const schema = mongoose.Schema;

const Category = new Schema(
    {
      nom: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3
      }
      
    },
    {
      versionKey: false
  }
  );
  
 
  module.exports =  mongoose.model("Category", Category);