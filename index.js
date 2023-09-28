const express = require('express');
const app = express();
const { StatusCodes } = require('http-status-codes')
require('dotenv').config()
const connectDB = require('./database/connect')
const departmentRoutes = require('./routes/departmentRoutes')
const userRoutes = require('./routes/userRoute')
const bodyParser = require('body-parser');
const morgan = require('morgan');


//AUTH - MIDDLE

const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(morgan('combined'));


app.get('/testing', async (req, res, next) => {
    res.status(StatusCodes.CREATED).send('WORKING')
})

app.use('/departments', departmentRoutes)
app.use('/users', userRoutes);


const initialiseServer = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, function () {
            console.log('server is running on port ' + port);
        });
    } catch (error) {
        console.log(error);
    }
}

initialiseServer()
