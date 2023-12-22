const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

module.exports = (req, res)=>{
    userModel.findOne({username:req.body.username},(error, data)=>{
        if(data){
            bcrypt.compare(req.body.password, data.password, (err, result)=>{
                if(result){
                    req.session.userId = data._id;
                    req.session.userType = data.userType;
                    req.session.username = data.username;
                    res.redirect('/');
                }else{
                    err = 'Invalid Password';
                    req.flash('error', err);
                    res.redirect('/login');
                }
            });
        }else if(error == null){
            error = 'User does not exist';
            req.flash('error', error);
            res.redirect('/login');
        } else {
            error = 'Error';
            req.flash('error', error);
            res.redirect('/login');
        }
    });
} 