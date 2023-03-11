const http = require('http');

const redirects = {
  '/old-url1': '/new-url1',
  '/old-url2': '/new-url2',
  '/old-url3': '/new-url3',
  // add more URLs and their corresponding destinations here
};

const server = http.createServer((req, res) => {
  const redirectUrl = redirects[req.url];
  if (redirectUrl) {
    res.writeHead(302, { 'Location': redirectUrl });
    res.end();
  } else {
    res.writeHead(404);
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
