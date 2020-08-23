/**
 * Toy Browser, Server
 */

const http = require('http');

hhttp.createServer((request, response)=>{
    let body = [];
    request.on('error', (err)=>{
        console.error('err',err);
    }).on('data', (chunk)=>{
        console.log('on=>',chunk)
        // body.push(chunk.toString());
        body.push(Buffer.from(chunk));

    }).on('end', ()=>{
        console.log('end=>',body)
        body = Buffer.concat(body).toString();
        console.log('body',body);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(
`<html>
<head>
    <style>
#container{
        width:500px;
        height:300px;
        display:flex;
        background-color:rgb(255,255,255);
}
#container #myid{
    width:200px;
    height:100px;
    background-color:rgb(255,0,0);
}
#container .c1{
    flex:1;
    background-color:rgb(0,255,0);
}
    </style>
</head>
<body>
    <div id="container">
        <div id="myid"></div>
        <div class="c1"></div>
    </div>
</body>
</html>`);
        
    });
}).listen(8088);
console.log('server started');