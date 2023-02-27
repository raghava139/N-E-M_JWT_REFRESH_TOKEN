import { Router } from "express";
import User from "../models/user";
import bcrypt from 'bcrypt';
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

// Here, router is an instance of the Express router
const router=Router();

 // function to handle the HTTP POST request
router.post('/users', async(req, res)=> {
// req--->retrieve data from the request body or params
//  res--->send a response to the client

    try{
      const {error}=signUpBodyValidation(req.body);
      if(error){
        return res.status(400).json({error:true,message:error.details})
      }

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:true,message:"Internal Server Error"})
    }
  });

  //signUpBodyValidation
  const signUpBodyValidation=(body)=>{
    //  syntax-->Joi.object([schema])-->it is might be use to valdate an incoming json payload example --> userName,email,password
      const schema=Joi.object({
          userName:Joi.string().required().label('user Name'),
          email:Joi.string().email().required().label('Email'),
        //here the password commplexity()--->It can help prevent the weak passwords from being improve the overal security of your application
          password:passwordComplexity()

      })
      return schema.validate(body)
  }
