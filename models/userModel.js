const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserModelSchema = new Schema({
    firstname: {type:String, default:'default'},
    lastname: {type:String, default:'default'},
    licenseNo: {type:String, default:'default'},
    username: { type:String, required:true, unique: true},
    password: {type:String, required:true},
    userType: String,
    dob: {type: Date, deafult: 0},
    car_details: {
        make: {type:String, default:'default'},
        model: {type:String, default:'default'},
        year: {type:Number, default:0},
        plateNo: {type:String, default:'default'}
    },
    appointmentId: {type: Schema.Types.ObjectId, ref: 'appointModel'}
});

UserModelSchema.pre('save', function (next){
    const user = this;
    bcrypt.hash(user.password, 10, (err, hash)=>{
        user.password = hash;
        next();
    })
});

const userModel = mongoose.model('userModel', UserModelSchema);

module.exports = userModel;