const appointModel = require('../models/appointModel');

module.exports = async (req, res) => {

    let appointments = await appointModel.find({});
    console.log(appointments);
    for (let i = 0; i < appointments.length; i++) {
        if (appointments[i].date == req.body.date && appointments[i].time == req.body.time) {
            console.log('This appointment time slot is already booked!');
            return;
        }else {
            console.log('This appointment time slot is available!');
        }
    }
    await appointModel.create(req.body, (error, data) => {
        if (error) {
            console.log(error);
        } else {
            console.log(data);
            console.log('Appointment booked!');
        }
    });
    res.redirect('/appointments');
}