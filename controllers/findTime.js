const appointModel = require('../models/appointModel');

module.exports = async (req, res) => {
    const slots = await appointModel.find({date: req.body.date});
    global.timeSlots = slots;
    res.redirect('/g2');
};