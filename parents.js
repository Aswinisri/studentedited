import express from "express";
import subject from "./subject.js";
import attendance from "./attendance.js";
import homework from "./homework.js";
import profile from "./profile.js";
import teachers from "./teachers.js";
import library from "./library.js";
import timetable from "./timetable.js";
import leave from "./leave.js";
import remark from "./remark.js";
import meeting from "./meeting.js";
import gallery from "./gallery.js";
import exam from "./exam.js";
import examresults from "./examresults.js";
import fees from "./fees.js";
import sports from "./sports.js";
import complaint from "./complaint.js";
import event from "./event.js";
import alert from "./alert.js";
import notifytodayclass from "./notifytodayclass.js";
import notifytassignment from "./notifyassignment.js";
import notifyschedule from "./notifyschedule.js";
import student from "./student.js";
import assignments from "./assignments.js";

import connectDB from "./db.js";
const app=express();
connectDB();
app.use(express.json());
app.use('/subject',subject);
app.use('/attendance',attendance);
app.use('/homework',homework);
app.use('/profile',profile);
app.use('/teachers',teachers);
app.use('/library',library);
app.use('/timetable',timetable);
app.use('/exam',exam);
app.use('/examresults',examresults);
app.use('/leave',leave);
app.use('/remark',remark);
app.use('/meeting',meeting);
app.use('/gallery',gallery);
app.use('/fees',fees);
app.use('/sports',sports);
app.use('/complaint',complaint);
app.use('/event',event);
app.use('/alert',alert);
app.use('/notifytodayclass',notifytodayclass);
app.use('/notifyassignment',notifytassignment);
app.use('/notifyschedule',notifyschedule);
app.use('/student',student);
app.use('/assignments',assignments);


 
const port=5000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
});
