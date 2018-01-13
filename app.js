var express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser')

var db = mongoose.connect('mongodb://localhost/blacksalt')

var Booking = require('./Models/bookingModel')

var app = express();
var port = process.env.PORT || 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
var bookingRouter = require('./Routes/bookingRoute')(Booking);


app.use('/api/bookings', bookingRouter)
app.get('/', function(req,res){
    res.send('welcome to my API')
})

app.listen(port, function(){
    console.log('Running on PORT:'+port)
})