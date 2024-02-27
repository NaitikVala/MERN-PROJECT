import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
    // eslint-disable-next-line no-undef
    .connect(process.env.MONGO_URI, {
        dbName: "RESTAURANT",
    }).then(() => {
        console.log("Connected to database Successfully !!!");
    }).catch((err)=> {
        console.log(`Some error  during database connectivity!! ${err}`);
    })
}