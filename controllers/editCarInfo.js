const userModel = require('../models/userModel');

module.exports = (req, res)=>{
    userModel.findOneAndUpdate({_id:loggedIn}, { car_details:{
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        plateNo: req.body.plateNo
    }},
        (error, data)=>{
        });
    res.redirect('g');
}