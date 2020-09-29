//usinig express framework to handle multiple req
//inclduing the express module 
const express=require('express');
const { format } = require('path');
//declaring app to include all fuctions of express
const app=express();
//get fuction is fetching data from the server
//get(url,fuction)
app.get('/',function (req,res){
res.send('THIS IS THE HOME PAGE')
})
app.get('/contact',function(req,res){
res.send('THIS IS CONTACT PAGE')
})
app.get('/about',function(req,res){
res.send('THIS IS ABOUT PAGE')
})
//using get to use dynamic url
app.get('/about/:id',function(req,res){
const id=req.params.id;
var name=['pratap','dinesh','karan','sagar','raj'];
var b=1;
for(var i=0;i<name.length;i++){
    if(id==i){
        b=0;
        res.send('Hey '+name[i]+' your id is '+id);
        break;
    }
}
if(b)
 res.send('Sorry No one is from this id');
})
app.listen(3000,function(req,res){
console.log('server is running');
});