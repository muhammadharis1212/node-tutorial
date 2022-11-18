const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Welcome to Home Page");
  else if (req.url === "/about") {
    res.end("Welcome to About Page");
  } else
    res.end(`
    <h1>Oops</h1>
    <p>Can't find what you are looking for.</p>
    <a href="/">Back Home</a>`);
});
server.listen(5000);
