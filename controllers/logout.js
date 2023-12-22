module.exports = (req, res)=>{
    req.session.destroy();
    timeSlots = null;
    
    res.redirect('/login');
}