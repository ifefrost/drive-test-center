const userModel = require('../models/userModel');

module.exports = async (req, res) => {
    if(loggedIn) {
        const data = await userModel.findOne({_id: loggedIn});
            return res.render('g', {data});
    }
}