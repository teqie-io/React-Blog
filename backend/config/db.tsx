
require('dotenv').config();
const mongoose =require('mongoose');

 const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser :true ,
            useUnifiedTopology: true
        })
        console.log("connection success");
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}
export default connectDB;