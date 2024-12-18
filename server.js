const express=require('express')
const app=express()
app.listen(4000,()=>{console.log("listening on 4000")})

app.get('/',(request,response)=>{response.send("you are on home page")})

