const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected!")
    }catch (error){
        console.log(error)
        ;
        process.exit(500);
    }
};

module.exports = connectDB;