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
        type:Number,
        required:true,
        default: 0
    },

    // foodInfo: {
    //     isHeartHealthy:Boolean,
    //     isDiabeticFriendly:Boolean
    // },

    // foodGroups:[String]
});

module.exports = Item = mongoose.model('item', ItemSchema);