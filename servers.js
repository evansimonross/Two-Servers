var http = require('http');

function niceRequest(request, response) {
    var phrases = ["You are a kind and beautiful soul", 
        "You deserve the very best", 
        "Don't let anyone try to keep you down",
        "You are loved"
    ]
    response.end(phrases[Math.floor(Math.random()*phrases.length)]);
}

function meanRequest(request, response) {
    var phrases = ["You tried your best, but it wasn't good enough",
        "You will never succeed no matter how hard you try",
    ]
    response.end(phrases[Math.floor(Math.random()*phrases.length)]);
}

const NICEPORT = 7000;
const MEANPORT = 7500;

var niceServer = http.createServer(niceRequest);

niceServer.listen(NICEPORT, function(){
    console.log("Server listening on http://localhost:%s", NICEPORT);
});

var meanServer = http.createServer(meanRequest);

meanServer.listen(MEANPORT, function(){
    console.log("Server listening on http://localhost:%s", MEANPORT);
});
