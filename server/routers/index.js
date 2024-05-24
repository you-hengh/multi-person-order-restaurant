import express from 'express'
import { nanoid } from 'nanoid'
import expressWs from 'express-ws'
import { getMenu, getName } from '../utils/index.js'

const router = express.Router()
expressWs(router)
// 建立ws链接,共享菜单状态
router.ws('/:tableID', (ws, req) => {
  // 首次链接后 提供菜单内容和用户名

  ws.on('message', msg => {
    const message = JSON.parse(msg)
    if (message.type === 'getName') {
      ws.send(
        JSON.stringify({
          menu: getMenu(),
          tableID: req.params.tableID,
          username: getName(),
          orderID: nanoid(),
        })
      )
    } else {
      ws.send('发送消息格式错误')
    }
  })
})

export default router
