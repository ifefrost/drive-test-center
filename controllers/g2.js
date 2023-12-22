const userModel = require('../models/userModel');
const appointModel = require('../models/appointModel');

module.exports = async (req, res) =>{
    if(loggedIn) {
        const data = await userModel.findOne({_id: loggedIn});
        let appointmentId = data.appointmentId;
        const appointmentData = await appointModel.findOne({_id: appointmentId});
            return res.render('g2', {data, appointmentData});
    }
};