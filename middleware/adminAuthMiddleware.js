const userModel = require('../models/userModel');

module.exports = (req, res, next)=>{
    if(req.session.userType != 'admin'){
        res.redirect('/');
    }else{
        next();
    }
}