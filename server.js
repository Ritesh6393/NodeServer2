const http=require('http');
const server=http.createServer((req,res)=>{
    const url = req.url;
    //process.exit();
    if (url === '/home') {
        res.write('<html>');
        res.write('<head><title>Welcome Home</title></head>');
        res.write('<body><h1>Welcome to the Home page</h1></body>');
        res.write('</html>');
        return res.end();
      }

      if (url === '/about') {
        res.write('<html>');
        res.write('<head><title>About Us</title></head>');
        res.write('<body><h1>Welcome to the About Us page</h1></body>');
        res.write('</html>');
        return res.end();
      }
    
      if (url === '/node') {
        res.write('<html>');
        res.write('<head><title>Node.js Project</title></head>');
        res.write('<body><h1>Welcome to my Node.js Project</h1></body>');
        res.write('</html>');
        return res.end();
      }
      res.write('<html>');
      res.write('<head><title>404 Not Found</title></head>');
      res.write('<body><h1>404 Not Found</h1></body>');
      res.write('</html>');
      res.end();
})
server.listen(3000);