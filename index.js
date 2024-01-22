var admin = require("firebase-admin");
const express=require('express')
const app=express()


var serviceAccount = require("./olxfirebasereact-31aea-firebase-adminsdk-wlo85-73adf20726.json");

app.use(express.json())

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


app.post('/send-noti',(req,res)=>{
    console.log(req.body)
    const message={
        notification:{
            title:"new ad",
            body:"new add posted click to open"
        },
        tokens:req.body.tokens
    }
    
    admin.messaging().sendMulticast(message).then(res=>{
        console.log("send successful")
    }).catch(err=>{
        console.log(err)
    })
})

app.listen(3000,()=>{
    console.log('runnign server')
})
