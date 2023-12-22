const userModel = require('../models/userModel');

module.exports = async (req, res)=>{
    await userModel.findOneAndUpdate({_id:loggedIn}, { 
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        licenseNo: req.body.licenseNo,
        age: req.body.age,
        dob: req.body.dob,
        car_details:{
            make: req.body.make,
            model: req.body.model,
            year: req.body.year,
            plateNo: req.body.plateNo
        }});
    res.redirect('/g');
}