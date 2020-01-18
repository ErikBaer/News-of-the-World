const http = request('http')

server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Node.js talking...')
})