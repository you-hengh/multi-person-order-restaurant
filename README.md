# 多人同时点餐系统

## 项目介绍

本项目是一个多人同时点餐系统，主要实现的功能是让多位顾客在扫码后得到一个菜单页面，所有的顾客点餐的内容都会实时同步在菜单页上，每位顾客都可以看到其他人点的内容。前端包括顾客访问的菜单页和商户的后台管理，负责订单的处理、菜品上下架、价格修改、折扣计算等功能。

## 技术栈

本项目前端使用 Vue3 + TypeScript + Vite + webSocket 实现，并配置了自动导入来优化重复导入带来的心智负担。服务端使用 Node JS，采用 express 框架，express-ws 建立 websocket 的方式, 数据库采用读写本地 json 文件的方法来实现。

## 安装与运行

1. 克隆本项目到本地：

   ```bash
   git clone git@github.com:you-hengh/multi-person-order-restaurant.git
   ```

2. 进入项目目录，安装依赖：

   顾客端:

   ```bash
   cd multi-person-order-restaurant/client
   pnpm install
   ```

   商户端:

   ```bash
   cd multi-person-order-restaurant/admin
   pnpm install
   ```

   服务端:

   ```bash
   cd multi-person-order-restaurant/server
   pnpm install
   ```

3. 启动服务端：

   ```bash
   cd multi-person-order-restaurant/server
   pnpm devServ
   ```

4. 在另一个终端窗口启动前端：

   ```bash
   cd multi-person-order-restaurant/client
   pnpm dev
   ```

5. 打开浏览器，访问`http://localhost:5173`，即可看到菜单页。

## 功能说明

- [ ] **顾客点餐**
      顾客扫码后进入菜单页，可以看到所有菜品的列表，包括菜品名称、价格、描述等信息。顾客可以选择自己喜欢的菜品，点击“加入购物车”按钮，已选菜品会显示在购物车列表中。顾客可以修改菜品数量或删除已选菜品。
- [ ] **实时同步**
      所有顾客的点餐内容会实时同步在菜单页上，每位顾客都可以看到其他人点的内容。当有新的点餐信息时，页面会自动更新。

- [ ] **商户后台管理**
      商户可以通过后台管理页面查看所有订单信息，包括订单号、顾客名称、点餐内容、总价等。商户可以对菜品进行上下架、价格修改、折扣计算等操作。

## 项目结构

```text
multi-person-order-restaurant/
├─ admin             // 商户端
│  ├─ public
│  ├─ src
│  └─ package.json
├─ client            // 顾客端
│  ├─ public
│  ├─ src
│  └─ package.json
├─ server            // 服务端
│  ├─ database       // 数据库文件
│  ├─ public
│  ├─ routes         // 路由文件
│  ├─ utils          // 工具文件
│  └─ package.json
├─ package.json
└─ README.md

```

## 项目截图

## 注意事项

1. 本项目仅供学习交流使用，请勿用于商业用途。
2. 本项目采用读写本地 json 文件的方法实现数据库功能，实际项目中建议使用更稳定的数据库系统，如 MySQL、MongoDB 等。
3. 本项目前端使用 Vue3 + TypeScript + Vite 实现，如需调整技术栈，请自行修改。

## 联系方式

如有任何问题或建议，请通过以下方式联系我们：

- [Discord](https://discord.gg/3YBJqGtZKA)
- [GitHub-Issue](https://github.com/you-hengh/multi-person-order-restaurant/issues)

感谢您的使用！
