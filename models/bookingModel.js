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
    timestamp: {
        type: Number
    }
})
module.exports = mongoose.model('Booking', bookingModel)