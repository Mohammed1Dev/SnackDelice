const mongoose = require('./database/config.js');
const schema = mongoose.Schema;

const ProductSchema = new schema({

    
        nom: {
            type: String,
            required: true,
            trim: true
        },
        prix: {
            type: Number,
            required: true
           
        },
        ingrediens: {
            type: String,
            required: true,
            trim: true
        },
        codePromo: {
            type: String,
        },
        sousCategory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SouCategory'
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        },
        image: {
            type: String
        }
     
}, 
{
  versionKey: false
});


module.exports = mongoose.model('Product', ProductSchema);