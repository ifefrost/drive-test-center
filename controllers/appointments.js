const appointModel = require('../models/appointModel');

module.exports = async (req, res) => {
    let userName = req.session.userName;
    const appoints = await appointModel.find({});
    // console.log(appoints);
    res.render('appointments', {
        appointments: appoints,
        userName: userName
    });
}