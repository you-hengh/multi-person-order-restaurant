import fastify from 'fastify';
import fastifyPlugin from 'fastify-plugin';
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
// 创建一个插件来管理全局状态
// async function globalStatePlugin(fastify, options) {
//   // 订单页详情
//   const orderDetails = {};
//   fastify.decorate('orderDetails', orderDetails);

//   fastify.decorate('updateOrderDetails', data => {
//     fastify.orderDetails = data;
//   });
//   // 购物车详情
//   const realOrderDetails = {
//     realOrderId: '',
//   };
//   fastify.decorate('realOrderDetails', realOrderDetails);

//   fastify.decorate('updateRealOrderDetails', data => {
//     fastify.realOrderDetails = data;
//   });
//   // 餐桌状态缓存
//   const tableStatusCache = {};

//   fastify.decorate('tableStatusCache', tableStatusCache);

//   fastify.decorate('updateTableStatusCache', data => {
//     fastify.tableStatusCache = data;
//   });
// }
// 使用 fastify-plugin 来包装插件
// const globalState = fastifyPlugin(globalStatePlugin);
// const server = fastify();
// 注册插件
server.register(import('@fastify/websocket'));
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
