import { nanoid } from 'nanoid';
import Decimal from 'decimal.js';
import menuData from '../database/menu.json' assert { type: 'json' };
import tableStatus from '../database/tableStatus.json' assert { type: 'json' };
// import { server } from '../server.js';

// // 订单页详情
// const orderDetails = {};
//   totalPrice: '',
//   orderList: [{ total: '', foodID: '', orderUser: { seatNumber: '', count: '' } }],
// };
// 购物车详情;
export const realOrderDetails = {};
// // 餐桌状态缓存
export const tableStatusCache = {};

/**
 *
 * @param {string} tableID 桌号
 * @param {string} orderID 订单号
 * @return {Array<string>} 座位号和订单号
 */
export const getSeatInfo = (tableID, orderID = '') => {
  // TODO: 使用策略模式优化
  let seatNumber = '';
  if (getTableStatus(tableID) === '空闲') {
    tableStatus[tableID].status = '使用中';
    // tableStatus[tableID].orderID = nanoid();
    tableStatus[tableID].orderID = 1;
    // tableStatus[tableID].realOrderId = nanoid();
    tableStatus[tableID].realOrderId = 1;
    // 更新餐桌状态缓存 但是当前未成功
    // server.updateTableStatusCache('TableStatusCache', tableStatus);
    // 分配座位号
    seatNumber = tableStatus[tableID].seatNumber.shift();
    // 更新餐桌缓存
    tableStatusCache;
  } else if (getTableStatus(tableID) === '使用中') {
    seatNumber = tableStatus[tableID].seatNumber.shift();
  }
  return [seatNumber, tableStatus[tableID].orderID, tableStatus[tableID].realOrderId];
};

/**
 * @description 获取菜单
 * @return {Array<object>} 一个json对象的列表
 */
export const getMenu = () => {
  return menuData;
};
/**
 * @description 获取指定餐桌当前状态
 * @param {string} tableID 桌号
 * @return {string} 餐桌状态
 */
export const getTableStatus = tableID => {
  return tableStatus[tableID].status;
};

/**
 * @description 获取订单号
 * @param {string} tableID 桌号
 * @return {string} 订单号
 */
export const getOrder = tableID => {
  if (getTableStatus(tableID) === '空闲') {
    return nanoid();
  } else if (getTableStatus(tableID) === '使用中') {
    return tableStatus[tableID].order;
  }
};

/**
 * @description 获取订单详情
 * @param {Object} msg
 * @param {string} msg.orderID 订单号
 * @param {string} msg.realOrderId 购物车号
 * @param {Array<Object>} msg.orderList 订单列表
 */
// export const getOrderDetails = msg => {
//   const orderID = msg.orderID;
//   const realOrderId = msg.realOrderId;
//   const orderList = msg.orderList;
// };

/**
 * @description 记录ws会话状态
 * @param {Object} data 接受会话信息
 * @param {string} data.join 消息类型
 * @param {string} data.tableID 当前桌号
 * @param {Object} connections 当前会话列表
 * @param {Object} socket 当前ws会话
 * @return {Object}  connections 当前会话列表
 */
export const setWsStatus = (data, connections, socket) => {
  if (connections[data.tableID]) {
    // 从旧分组删除数据
    connections[data.tableID].delete(socket);
    // 删除空分组
    if (connections[data.tableID].size === 0) {
      delete connections[data.tableID];
    }
  }

  // 如果分组不存在，创建新分组
  if (!connections[data.tableID]) {
    connections[data.tableID] = new Set();
  }
  // 将ws会话加入餐桌分组
  connections[data.tableID].add(socket);
  socket.send(JSON.stringify({ event: 'join', status: 'OK' }));

  return connections;
};

/**
 * @description 记录购物车详情并计算总价
 * @param {string} realOrderId 购物车号
 * @param {Array<Object>} orderList 点餐内容
 */
export const addRealOrderDetails = (realOrderId, orderList) => {
  // TODO: 需要先校验购物车号是否存在
  const totalPrice = calculateTotalPrice(orderList);
  realOrderDetails[realOrderId] = { totalPrice, orderList };
  console.log(realOrderDetails);
};

/**
 * @description 计算购物车当前总价
 * @param {Array<Object>} orderList 点餐内容
 * @return {number} 总价
 */
export const calculateTotalPrice = orderList => {
  let totalPrice = new Decimal(0);
  orderList.forEach(item => {
    let price = new Decimal(menuData[item.foodID].foodPrice);
    totalPrice = totalPrice.add(price.mul(item.count));
  });
  return totalPrice.toFixed(2); // 保证返回的结果只有2位小数
};
