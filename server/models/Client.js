const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    firstName: { 
        type: String,
        required : true,
        default:"fakefirstname"
    },
    lastName: {
        type:String,
        required:true,
        default:"fakelastname"
    },
    email: {
        type:String,
        required:true,
        default:"fakeemail@gmail.com"
    },
    password: {
        type: String,
        required: true
    },
    register_date: {
        type: Date,
        default: Date.now
    },
    address: {
        type:String,
        //required:true,
        default:"fakeaddress"
    },
    phoneNumber: {
        type:Number,
        //required:true,
        default:5555555555
    },

    //cart:[ItemSchema]
});

module.exports = Client = mongoose.model('client', ClientSchema);