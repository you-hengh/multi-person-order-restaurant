import fs from 'fs-extra'
import path from 'node:path'

const userDataPath = path.join(import.meta.dirname, '../database/user.json')
const menuDataPath = path.join(import.meta.dirname, '../database/menu.json')

let userDataCache = null // 用户名缓存
let menuDataCache = null // 菜单缓存

export const getName = () => {
  // 判断是否有数据缓存,没有则读取数据,有缓存则直接用缓存
  if (userDataCache === null) {
    try {
      // 获取用户名
      userDataCache = fs.readJsonSync(userDataPath)
      // 返回数据第一个元素,并删除第一个元素
      return userDataCache.shift()
    } catch (error) {
      console.error(`${import.meta.filename}:${error}`)
      return null
    }
  } else {
    // 返回数据第一个元素,并删除第一个元素
    return userDataCache.shift()
  }
}

export const getMenu = () => {
  if (menuDataCache === null) {
    try {
      menuDataCache = fs.readJsonSync(menuDataPath) || {}
      return menuDataCache
    } catch (error) {
      console.error(`${import.meta.filename}:${error}`)
      return null
    }
  } else {
    return menuDataCache
  }
}

// 如果需要清空缓存，可以提供以下函数
export const clearCache = () => {
  cachedUserData = null
  cachedMenuData = null
}

// {
//   "1" : [
//     {
//       orderId:1111,                       // 订单号
//       createTime:"2022-01-01 12:00:00",   // 创建时间
//       orderStatus:"未提交|已提交|已缴费",    // 订单状态
//       orderTatolPrice: 100,               // 订单总价
//       orderDetail:[                       // 订单详情
//         {
//           foodName:"红烧肉",
//           foodPrice:100,
//           foodCount:1
//         },
//         {
//           foodId:2,
//           foodName:"红烧鱼",
//           foodPrice:100,
//         },
//       ]
//     }
//   ]
// }
