const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type:String,
        required:true,
        default:"fakeitemname"
    },
    price: {
        type: String,
        required:true,
        default: 0
    },
    image: {
        type: Object,
        default: null
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);