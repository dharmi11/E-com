const mongoose = require ('mongoose')

const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/e-comm");
                                
        console.log("mongo connect succesfully");
    } catch (error) {
        console.log(error , "error in Database");
    }
};

module.exports = connectDB ;