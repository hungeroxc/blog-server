import Koa, { Context } from 'koa'
import Router from 'koa-router'
import cors from 'koa2-cors'
import { DataSource } from 'typeorm'

import { AppRoutes } from './routes'

const app = new Koa()
const router = new Router()

export const appDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "test",
    entities: ['src/entity/*{.ts,.js}'],
    timezone: 'Z',
})

appDataSource.initialize().then(() => {
    console.log('连接成功')

    // 注册路由
    AppRoutes.forEach(route => router[route.method](route.path, route.action))
    
    app.use(cors())
    .use(router.routes())
    .use(router.allowedMethods())
    
    app.listen(3001)
}).catch(err => {
    console.error("连接错误", err)
})


