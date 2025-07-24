const express = require('express');
const cors = require ('cors');
const { PrismaClient } = require("@prisma/client");
const { parse } = require('dotenv');
require("dotenv").config();

const app = express();
const prisma = new PrismaClient();

app.use(cors( {origin: `${process.env.CLIENT_URL}`}));
app.use(express.json());
app.post('/register', async(req,res)=> {
  const {name, email} =req.body;
  const user = await prisma.user.create({
    data:{
      name,email,
    }
  });
 if (user) {
    return res.status(200).json({user});
  } else {
    return res.sendStatus(500);
  }
})

app.get('/users', async(req,res)=> {
  const id= parseInt(req.query.id);
  
  if (!id) {
    return res.status(400).json({ message: "Email requis" });
  }
  try{
  const user = await prisma.user.findUnique({
    where:{id},
    select:{
      id:true,
      name:true,
      email:true
    }
  });
  res.status(200).json(user);}
    catch(err) {
    return res.sendStatus(403);
  }
})

const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});