// npm install  
// node app
var fs = require("fs");
var http = require("http");
var request = require('request');
var opn = require('opn');


var proxyServer = 'http://www.yeezan.com';

function handler(req, res){
	if(/\/api\/.*/.test(req.url)){
		var server = proxyServer+req.url;
		request(server, function (error, response, body){
			res.end(body)
		})
	}else if(/\.html/.test(req.url)){
		var url = req.url || "/index.html";
		var content = fs.readFileSync("."+url, "utf-8");
		res.end(content);
	}else{
		res.end("hello donglegend")
	}
}

http.createServer(handler).listen(8080);

opn('http://127.0.0.1:8080/index.html')