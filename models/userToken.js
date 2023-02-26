import mongoose from "mongoose";

const Schema=mongoose.Schema
const userTokenSchema=new Schema({
    userId:{
    //In moongoose will automatically generate a new objectId value for the 'id' field -->
    //if one isn't provided you can reterive document using their objectId values using mongoose findbyId() method
        type:Schema.Types.ObjectId,
        required:true,
    },
    token:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:30 * 86400 // means 30 days
    }
})

const UserToken= mongoose.model("UserToken",userTokenSchema);
export default UserToken;