require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

//Routers
const studentRoute = require('./app/routes/student_routes');
const enrollmentRoute = require('./app/routes/enrollment_routes');
const courseRoute = require('./app/routes/course_routes');
const gradeRoute = require('./app/routes/grade_routes');

//init app
const app = express();

//middleware 
app.use(express.json());
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

mongoose.connect(process.env.DB_URI)
    .then(() =>{
        app.listen(process.env.PORT || 9000, () =>{
            console.log(`Connected to database and listening to port ${process.env.PORT}`)
        })
    }).catch(error =>{
        console.log(error)
    })

const requestMapper = '/api'
app.use(requestMapper+'/students', studentRoute);
app.use(requestMapper+'/enrollment', enrollmentRoute);
app.use(requestMapper+'/course', courseRoute);
app.use(requestMapper+'/grade', gradeRoute);


//if no request match
app.use((req, res) =>{
    res.status(404).json({error: 'No such endpoint exists'})
})