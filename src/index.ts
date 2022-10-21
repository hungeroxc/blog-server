import Koa, { Context } from 'koa'
import Router from 'koa-router'
import cors from 'koa2-cors'

const app = new Koa()
const router = new Router()

router.get('/api/list', (ctx: Context) => {
    console.log('连接了')
    ctx.body = {
        data: {
            list: [1,2,3,4]
        }
    }
})

app.use(cors()).use(router.routes()).use(router.allowedMethods())

app.listen(3001)
