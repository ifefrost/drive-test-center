const userModel = require('../models/userModel');

module.exports = (req, res, next)=>{
    if(req.session.userType != 'driver'){
        res.redirect('/');
    }else{
        next();
    }
}