const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });

  }
  else if (page == '/api') {
    if ('coinFlip' in params) {
      if (params['coinFlip'] == 'heads') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const coin = ['heads', 'tail']
         flip = coin[Math.floor(Math.random() * coin.length)]

        if (params['coinFlip' == flip]) {
          guess = 'YOU WIN'
        } else {
          guess = 'YOU LOSE'
        }
        const obj = {
          result: `${flip}`,
          message: `${guess}`
        }

        res.end(JSON.stringify(obj));

      }
    }
  } else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }

}); server.listen(8000);
