var express = require('express'),
mongoose = require('mongoose')

var db = mongoose.connect('mongodb://localhost/blacksalt')

var Booking = require('./models/bookingModel')

var app = express();
var port = process.env.PORT || 3000

var bookingRouter = express.Router();

bookingRouter.route('/Bookings').get(function(req,res){
    Booking.find(function(err,bookings){
        if(err){
            res.status(500).send(err)
        }else{
            res.json(bookings)
        }
    })
})

app.use('/api', bookingRouter)
app.get('/', function(req,res){
    res.send('welcome to my API')
})

app.listen(port, function(){
    console.log('Running on PORT:'+port)
})