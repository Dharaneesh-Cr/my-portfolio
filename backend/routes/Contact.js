const express=require("express");
const router=express.Router();

const Contact=require("../models/Contact.js");

router.post("/",async(req,res)=>{
     console.log(req.body);
     try{
          const contact=new Contact(req.body);

          await contact.save();

          res.status(201).json({
               message:"Message saved successfully"
          });
     }catch(err){
          console.log(err);
          res.status(500).json({
               message:err.message
          });
     }
});

module.exports=router;