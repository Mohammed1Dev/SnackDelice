const mongoose = require('./database/config.js');
const schema = mongoose.Schema;

const SousCategory = new Schema(
    {
      nom: {
        type: String,
        required: true,
        trim: true
      },
      category: {
          type: mongoose.Schema.Types.ObjectId,
          ref : 'Category'
        }
    },
    {
      versionKey: false
  }
  );


  module.exports = mongoose.model("SousCategory", SousCategory);