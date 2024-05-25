import express from 'express';
import expressWs from 'express-ws';
import path from 'node:path';
import https from 'node:https';
// import http2 from 'node:http2'
import fs from 'fs-extra';
import router from './routers/index.js';

const app = express();

// 读取SSL证书和私钥
const options = {
  key: fs.readFileSync('/etc/nginx/certs/api/api.bddxg.top.key'),
  cert: fs.readFileSync('/etc/nginx/certs/api/api.bddxg.top.pem'),
};
const httpsServer = https.createServer(options);
// const httpsServer = http2.createSecureServer(options)  // 使用http2建立链接失败,原因未知
// 将 WebSocket 服务混入 app，相当于为 app 添加 .ws 方法
expressWs(app, httpsServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(import.meta.dirname, 'public')));

app.use('/api', router);

// app.listen(3000, () => {
//   console.log('服务已启动: http://localhost:3000')
// })

// 启动 HTTP/2 服务器并监听端口
httpsServer.on('request', app);
httpsServer.listen(3000, () => {
  console.log('服务已启动: https://localhost:3000');
});
