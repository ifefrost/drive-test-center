const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AppointmentModelSchema = new Schema({
    date: {type:String, required:true},
    time: {type:String, required:true},
    slotAvailable: {type:Boolean, default:true, required:true}
});

const appointModel = mongoose.model('appointModel', AppointmentModelSchema);
module.exports = appointModel;