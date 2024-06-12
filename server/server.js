import fastify from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import path from 'node:path';
// 初始化配置
// export const server = fastify({
//   logger: {
//     transport: {
//       target: 'pino-pretty',
//       options: {
//         translateTime: 'SYS:HH:MM:ss',
//         ignore: 'pid,hostname',
//       },
//     },
//   },
// });
export const server = fastify();
// 注册插件
server.register(import('@fastify/websocket'));
server.register(import('@fastify/static'), { root: path.join(import.meta.dirname, 'public') });
// server.register(globalState);
// 路由模块
server.register(import('./routes/ws.js'));
server.register(import('./routes/admin.js'));

// 启动服务
server.listen({ port: 3000, host: '127.0.0.1' }, (err, address) => {
  if (err) {
    server.log.error(err, address);
    process.exit(1);
  }
});
