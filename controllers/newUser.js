const userModel = require('../models/userModel');

module.exports = async (req, res)=>{
    if (req.body.password === req.body.confpassword){
        await userModel.create(req.body,(error, data)=>{
            if(error){
                req.flash('error', 'User already exists');
            }else{
                console.log(data);
                console.log('User Registered');
            }
        });
        res.redirect('/login');
    }else{
        req.flash('error', 'Passwords do not match');
        res.redirect('/register');
    }
}