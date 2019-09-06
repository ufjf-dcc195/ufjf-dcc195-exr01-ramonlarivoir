exports.impares = function impares(req, res) {
    console.log("impar");
    
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<ul>");
    for(let i = 1; i <= 100; i++) {
        if(i % 2 != 0) {
            res.write(`<li>${i}</li>`);
        }
    }
    res.write("</ul>");
    res.end();
}

exports.notfound = function (req, res) {
    res.writeHead(404, {"Content-Type": "text/html"});
    res.write(`<h1>Página não encontrada: ${req.url}</h1>`);
    res.end();
}