import mongoose from "mongoose";

// IN relational it is a schema
// Here ,In monogdb is schemaless--->here we are using data-models (or) document model
const Schema=mongoose.Schema;

const userSchema=new Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    roles:{
        type:[String],
        // Mongoose has several inbuilt validators. Strings have enum as one of the validators.-->
        // So enum creates a validator and checks if the value is given in an array.
        enum:["user","admin","super_admin"],
        default:["user"]
    }
})

const User= mongoose.model("User",userSchema)
export default User;