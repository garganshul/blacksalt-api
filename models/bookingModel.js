var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var bookingModel = new Schema({
    date: {
        type: String
    },
    people: {
        type: Number
    },
    status: {
        type: String,
        default: false
    },
    title: {
        type: String
    },
    bookingDate: {
        type: Number
    },
    partyType: {
        type: String
    },
    totalAmount: {
        type: Number
    },
    advanceAmount: {
        type: Number
    },
    delete:{
        type:Boolean,
        default:false
    }
})
module.exports = mongoose.model('Booking', bookingModel)