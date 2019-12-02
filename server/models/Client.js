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
        default:"fakeaddress"
    },
    phoneNumber: {
        type:Number,
        default:5555555555
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

module.exports = Client = mongoose.model('client', ClientSchema);