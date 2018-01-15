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
        var query = {};
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
    
    bookingRouter.use('/:bookingId',function(req,res,next){
        Booking.findById(req.params.bookingId,function(err,booking){
            if(err){
                res.status(500).send(err)
            }else if(booking){
                req.booking = booking;
                next();
            }else{
                res.status(404).send("No booking found")
            }
        })
    })
    bookingRouter.route('/:bookingId')
    .get(function(req,res){
        Booking.findById(req.params.bookingId,function(err,booking){          
                res.json(req.booking)          
        })
    })
    .put(function(req,res){
        req.booking.title = req.body.title;
        req.booking.date = req.body.date;
        req.booking.timestamp = req.body.timestamp;
        req.booking.people = req.body.people;
        req.booking.booked = req.body.booked;
        req.booking.save();
        res.json(req.booking)      
    })
    .patch(function(req,res){
        for(var p in req.body){
            req.booking[p] = req.body[p]
        }
        req.booking.save(function(err){
            if(err){
                res.status(500).send(err)
            }else{
                res.json(req.booking)      
            }
        });
    })
    .delete(function(req,res){
        req.booking.remove(function(err){
            if(err){
                res.status(500).send(err)
            }else{
                res.status(204).send('Removed')      
            }
        });
    });
    return bookingRouter;
}

module.exports = routes
