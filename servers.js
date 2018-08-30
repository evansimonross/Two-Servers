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

var niceServer = http.createServer(niceRequest);

niceServer.listen(7000, function(){
    console.log("Server listening on http://localhost:%s", 7000);
});

var meanServer = http.createServer(meanRequest);

meanServer.listen(7500, function(){
    console.log("Server listening on http://localhost:%s", 7500);
});
