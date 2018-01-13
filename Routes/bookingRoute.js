var express = require('express');

var routes = function(Booking){
    var bookingRouter = express.Router();
    bookingRouter.route('/')
    .post(function(req,res){
        var booking = new Booking(req.body)
        booking.save()
        res.status(201).send(booking)
    })
    .get(function(req,res){
        let query = {};
        if(req.query.date){
            query.date = req.query.date
        }
        Booking.find(query,function(err,bookings){
            if(err){
                res.status(500).send(err)
            }else{
                res.json(bookings)
            }
        })
    })
    
    bookingRouter.route('/:date').get(function(req,res){
        let query = {};
        query.date = req.params.date;
        Booking.findById(req.params.date,function(err,bookings){
            if(err){
                res.status(500).send(err)
            }else{
                res.json(bookings)
            }
        })
    })
    return bookingRouter;
}

module.exports = routes