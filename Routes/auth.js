import { Router } from "express";
import User from "../models/user";
import bcrypt from 'bcrypt';
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

const router=Router();

// routerPost
// router.post("/signUp",async(req,res)=>{
//     try{

//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:true,message:"Internal Server Error"})
//     }

//     const signUpBodyValidation=(body)=>{
//         const schema=Joi.object({
//             userName:Joi.string().required().label('User Name'),
//             email:Joi.email().required().label("Email"),
//             password:passwordComplexity().required.label("password")
//         })
//     }
// });