/* const express = require('express')
const app = express()
const port = 8080


function name(){
    return "Hello";
}

app.get('/', (req, res) => res.send(name()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))*/

var express = require('express');
var app = express();
var port = 8080;

app.get('/',function(req,res){
   res.send('Hello World');

});
app.get('/address',function(req,res){
       res.send('Hello NY');
});


 app.get('/name',function(req,res){
        res.send('Hello Everybody');
 });

app.listen(port,function(){
    console.log(`example app listening on port ${port}!`)
})




