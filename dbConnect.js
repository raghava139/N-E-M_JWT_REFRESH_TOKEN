import mongoose from "mongoose";

const dbConnect = () => {
// mongoose.set('strictQuery', true);
//   const connectionParams = { useNewUrlParser: true };

mongoose.set('strictQuery', false);
  mongoose.connect(process.env.DB,{useNewUrlParser: true, useUnifiedTopology: true});

  mongoose.connection.on("connected", () => {
    console.log("database connected successfully");
  });

  mongoose.connection.on("error", () => {
    console.log("connection error in database");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("database is disconnected");
  });
};
export default dbConnect;
