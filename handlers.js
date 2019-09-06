exports.impares = function impares(req, res) {
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