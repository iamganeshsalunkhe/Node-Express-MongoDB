const fs = require("fs");
const http = require("http");
const url = require("url");
const slugify = require("slugify");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");

const objdata = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OverView");
  } else if (pathName === "/product") {
    res.end("This is the Product");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });

    res.end("<h1>Page Not Found</h1>");
  }
});
