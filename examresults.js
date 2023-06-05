import express from "express";
import mongoose from "mongoose";
// import connectDB from "./db.js";
const router=express.Router();

const examresult=[{
           examname:"1st mid-term",
           total_grade:"pass",
          totalmark:"345/500",
          subject: "Language 1" ,
          mark:"80",
          sub_grade:"pass",
          remarks:"Good at scoring marks games and behaviour"
}]
mongoose.set("strictQuery", false);
 const examresultSchema=mongoose.Schema([   
    {
      examname:{
        type:String,
       required:true,
    },  
      total_grade:{
        type:String,
       required:true,
    },  
      totalmark:{
        type:String,
       required:true,
    },  
    subject:{
        type:String,
       required:true,
    },  
    mark:{
        type:String,
       required:true,
    },  
    sub_grade:{
        type:String,
    },
   remarks:{
        type:String,
       required:true,
    },  
    }]
    )
 var Examresult = mongoose.model('Examresult', examresultSchema);
 examresultSchema.plugin(Examresult);

 router.get("/",(req,res) =>
 {
     try{
         res.status(200).send(examresult);
     }
     catch(error){
         res.json({message:"not available"});
     }
 });
 router.get("/:id",(req,res)=>{
     console.log(req.params.id);
     Examresult.findById(req.params.id)
     
     .then(result=>{
         res.status(200).json({
             examresult:result
         })
     })
     .catch(err=> {
     console.log(err);
     res.status(505).json({
         error:err
     })
     }
   )
 })
 router.post("/",async(req,res)=>{
     try{
         const examresult={
            examname:req.body.examname,
           total_grade:req.body.total_grade,
          totalmark:req.body.totalmark,
         subject:req.body.subject ,
         mark:req.body.mark,
         sub_grade:req.body.sub_grade,
         remarks:req.body.remarks
         }
         console.log(examresult);
         var create=new Examresult(examresult);
         var examresultCreated=await create.save();
       
         if(examresultCreated){
             console.log("created");
         res.status(201).json({message:"show details"});
         }
 else{
     res.status(401);
     throw new error("not found");
 }
 }catch(err){
     return res.status(500).json({message:err.message});
 }}
 )
 router.put('/:id',(req,res)=>{
     console.log(req.params.id);
     Examresult.findOneAndUpdate({_id:req.params.id},{
         $set:{
            examname:req.body.examname,
            total_grade:req.body.total_grade,
           totalmark:req.body.totalmark,
          subject:req.body.subject ,
          mark:req.body.mark,
          sub_grade:req.body.sub_grade,
          remarks:req.body.remarks
         }
     })
     .then(result=>{
         res.status(200).json({
             updated_examresult:result       
          })
     })
     .catch(err=>{
         console.log(err)
         res.status(500).json({
             error:err
         })
     })
     })
     router.delete("/:id",(req,res)=>{
         console.log(req.params.id);
         Examresult.deleteOne({_id:req.params.id},{
             $set:{
                
                examname:req.body.examname,
                total_grade:req.body.total_grade,
               totalmark:req.body.totalmark,
              subject:req.body.subject ,
              mark:req.body.mark,
              sub_grade:req.body.sub_grade,
              remarks:req.body.remarks
     
             }
         })
         .then(result=>{
             res.status(200).json({
                 deleted_examresult:result       
              })
         })
         .catch(err=>{
             console.log(err)
             res.status(500).json({
                 error:err
             })
         })
         })
         router.delete("/",(req,res)=>{
    
        Examresult.deleteMany({}).then((result) => {
                res.send(result);
            })
        });
         export default router;