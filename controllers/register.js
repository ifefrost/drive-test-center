const userModel = require('../models/userModel');

module.exports = (req, res)=>{
    res.render('register',{error:req.flash('error')});
}