import express from 'express'
import expressWs from 'express-ws'
import path from 'node:path'

import router from './routes/index.js'

const app = express()

// 将 WebSocket 服务混入 app，相当于为 app 添加 .ws 方法
expressWs(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(import.meta.dirname, 'public')))

app.use('/api', router)

app.listen(3000, () => {
  console.log('服务已启动: http://localhost:3000')
})
