const mongoose =  require('mongoose');

const connectDB = (url) =>{
    mongoose.connect(url).then((res)=>{
        console.log('Connected to the database');
    }).catch((err)=>{
        console.log('Failed to connect to database');
    })
};

module.exports = connectDB;

