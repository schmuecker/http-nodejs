import { createServer } from "http";

createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" }); // http header
  const url = req.url;
  if (url === "/about") {
    res.write("<h1>about us page<h1>"); //write a response
    res.end(); //end the response
  } else if (url === "/contact") {
    res.write("<h1>contact us page<h1>"); //write a response
    res.end(); //end the response
  } else {
    res.write("<h1>Hello World!<h1>"); //write a response
    res.end(); //end the response
  }
}).listen(process.env.PORT);
