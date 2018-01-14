var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var bookingModel = new Schema({
    date: {
        type: String
    },
    people: {
        type: Number
    },
    booked: {
        type: Boolean,
        default: false
    },
    title: {
        type: String
    },
    bookingDate: {
        type: Number
    },
    bookingType: {
        type: "ALA_CARTE" | "PLATE"
    },
    totalAmount: {
        type: Number
    },
    advancedAmount: {
        type: Number
    }
})
module.exports = mongoose.model('Booking', bookingModel)