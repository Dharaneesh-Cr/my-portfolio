const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();

const contactRoutes=require("./routes/Contact.js")
const app=express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/", (req,res)=>{
     res.send("Backend is running.....");
});

const PORT=process.env.PORT || 5000;

app.listen(PORT,"0.0.0.0",()=>{
     console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
     console.log("MongoDB Connected");
})
.catch((err)=>{
     console.log(err);
});
