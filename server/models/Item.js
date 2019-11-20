const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type:String,
        required:true,
        default:"fakeitemname"
    },
    // itemID: {
    //     type:String,
    //     required:true,
    //     unique:true,
    //     default:"fakeitemid"
    // },

    price: {
        type: String,
        required:true,
        default: 0
    },
    image: {
        type: Object,
        default: null
    }

    // foodInfo: {
    //     isHeartHealthy:Boolean,
    //     isDiabeticFriendly:Boolean
    // },

    // foodGroups:[String]
});

module.exports = Item = mongoose.model('item', ItemSchema);