import {connect} from "mongoose";
import dotenv from "dotenv"


const connectMongo = async() => {
    dotenv.config();
    await connect(process.env.MONGO_URL!).then(() => console.log("Mongo connected!")).catch((err) => console.log("Mongodb conn error! ", err))
}

export { connectMongo}