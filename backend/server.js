require('dotenv').config()

const express = require('express');
const mongoose =  require('mongoose');
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const validator = require('validator')

const app = express();


// Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log (req.path, req.method);
    next()
})

// Routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to database
mongoose.connect(process.env.MONGO_URI)
.then((data) => {
    app.listen(process.env.PORT, () => {
    console.log('connected!', process.env.PORT)
})
})
.catch((err) => {
    console.log(err);
})