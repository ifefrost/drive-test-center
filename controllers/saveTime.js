const appointModel = require('../models/appointModel');
const userModel = require('../models/userModel');

module.exports = async (req, res) => {
    let date = timeSlots[0].date;
    const appointment = await appointModel.find({date: date, time: req.body.time});
    console.log(appointment);
    await userModel.findOneAndUpdate({_id: loggedIn}, {
        appointmentId: appointment[0]._id
    });
    await appointModel.findOneAndUpdate({_id: appointment[0]._id}, {
        slotAvailable: false
    });
    timeSlots = null;
    res.redirect('/');
}