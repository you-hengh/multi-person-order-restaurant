// import { nanoid } from 'nanoid';
import fastifyPlugin from 'fastify-plugin';
import {
  getMenu,
  getSeatInfo,
  getOrderDetails,
  setWsStatus,
  addRealOrderDetails,
  realOrderDetails,
} from '../utils/getData.js';

// 存储链接
let connections = {};

// 建立ws链接
const ws = async fastify => {
  fastify.get('/restaurant/ws', { websocket: true }, (socket, req) => {
    // 初始化桌号
    let tableID = null;
    // const option = {
    //   join: (data, connections, socket) => {
    //     connections = { ...connections, ...setWsStatus(data, connections, tableID, socket) };
    //   },
    //   broadcast: (data, connections, socket) => {
    //     connections[data.tableID].forEach(socket => {
    //       // readyState 1 表示连接是打开的
    //       if (socket.readyState === 1) {
    //         socket.send(JSON.stringify(data));
    //       }
    //     });
    //   },
    // };

    socket.on('message', message => {
      // 处理接受到的消息
      const data = JSON.parse(message);
      // 通过策略模式执行不同策略
      // option[data.event](data, connections, socket);
      if (data.event === 'join') {
        // 1. 校验参数 - 判断桌号是否合法
        const tableIDNum = parseInt(data.tableID);
        if (!tableIDNum || tableIDNum < 1 || tableIDNum > 10) {
          socket.send(
            JSON.stringify({
              result: 'failed',
              error: '客户端错误: 桌号不合法',
            }),
          );

          return socket.close();
        }
        // 2. 把会话加入到餐桌组
        connections = setWsStatus(data, connections, socket);

        // 3. 发送菜单和用户名
        const menu = getMenu();
        const [seatNumber, orderID, realOrderId] = getSeatInfo(data.tableID);
        const tableID = data.tableID;
        socket.send(JSON.stringify({ result: 'success', data: { menu, tableID, seatNumber, orderID, realOrderId } }));
      } else if (data.event === 'shoping') {
        addRealOrderDetails(data.realOrderId, data.orderList);
        socket.send(JSON.stringify({ result: 'success', data: { realOrderDetails } }));
      } else {
        socket.send(
          JSON.stringify({
            result: 'failed',
            error: '客户端错误: event不合法',
          }),
        );

        return socket.close();
      }

      // 处理分组广播消息
      setInterval(() => {});
    });

    socket.on('close', (code, reason) => {
      // 移除断开的链接
      if (tableID && connections[tableID]) {
        connections[tableID].delete(socket);
        // 删除空分组
        if (connections[tableID].size === 0) {
          delete connections[tableID];
        }
      }
    });
  });
};

export default fastifyPlugin(ws);
