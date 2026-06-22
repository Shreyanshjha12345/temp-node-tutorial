const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        return res.end('Welcome to About page')
    }
    //always return!! not just res.end() when we are trying if else cases
    res.end(`
        <h1>Oops!</h1>
        <p>We cant seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
    //We cant send res.end() more than once
})

server.listen(5000);
