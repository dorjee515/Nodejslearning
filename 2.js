//using http module to interact with server 
var http=require('http');
//creating a server which print the hi in the webpage and got a request in console
var server=http.createServer(function(req,res){
console.log('got a request');
res.write('hi');
res.end();
});
//listen the server in port 3000
server.listen(3000);