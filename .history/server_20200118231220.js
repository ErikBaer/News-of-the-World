const http = request('http');
const port = 3000;

server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Node.js talking...')
});

server.listen(port, () => {

});