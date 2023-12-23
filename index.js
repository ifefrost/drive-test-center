const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const userModel = require('./models/userModel')
const bodyParser = require('body-parser')
const session = require('express-session');
const flash = require('connect-flash');
const dotenv = require('dotenv');

const newTestController = require('./controllers/newTest');
const newUserController = require('./controllers/newUser');
const loginUserController = require('./controllers/loginUser');
const logoutController = require('./controllers/logout');
const editCarController = require('./controllers/editCarInfo');
const loginController = require('./controllers/login');
const registerController = require('./controllers/register');
const gTestController = require('./controllers/g');
const g2testController = require('./controllers/g2');
const appointmentsController = require('./controllers/appointments');
const homeController = require('./controllers/home');
const bookAppointController = require('./controllers/bookAppoint');
const findTimeController = require('./controllers/findTime');
const saveTimeController = require('./controllers/saveTime');

const driverAuthMiddleware = require('./middleware/driverAuthMiddleware');
const adminAuthMiddleware = require('./middleware/adminAuthMiddleware');
const userRedirectMiddleware = require('./middleware/userRedirectMiddleware');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.on('connected', ()=>{
    console.log('Connected to the database...');
})

global.loggedIn = null;
global.userType = null;
global.username = null;
global.timeSlots = null;

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(flash())
app.use(session({
    secret: 'bernadette'
}));
app.use("*",(req,res,next)=>{
    loggedIn = req.session.userId;
    userType = req.session.userType;
    username = req.session.username;
    next();
});

app.listen(3000, ()=>{
    console.log('listening on port:', 3000);
})

app.get('/', homeController);
app.get('/g', driverAuthMiddleware, gTestController);
app.get('/g2', driverAuthMiddleware, g2testController);
app.get('/appointments', adminAuthMiddleware, appointmentsController);
app.post('/bookappoint', bookAppointController);
app.get('/login', userRedirectMiddleware, loginController);
app.get('/register', userRedirectMiddleware, registerController);
app.get('/logout', logoutController);
app.post('/editcarinfo', editCarController);
app.post('/submit/newtest', driverAuthMiddleware, newTestController);
app.post('/newuser', userRedirectMiddleware, newUserController);
app.post('/loginuser', userRedirectMiddleware, loginUserController);
app.post('/findtimeslot', findTimeController);
app.post('/savetimeslot', saveTimeController);
app.use((req, res)=> res.render('404'));
