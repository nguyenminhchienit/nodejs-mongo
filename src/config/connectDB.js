const mongoose = require('mongoose');


const mongoURI = 'mongodb://localhost:27017/test-mongodb';
async function connectDB() {
    try {
        await mongoose.connect(mongoURI)
        console.log("Connect database success");
    } catch (error) {
        console.log("Connect fail",error)
    }
}


module.exports = connectDB