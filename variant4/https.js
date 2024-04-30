const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('server.key'), // 秘密鍵のパス
  cert: fs.readFileSync('server.crt') // 証明書のパス
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello HTTPS World!');
}).listen(443); // HTTPSポート
