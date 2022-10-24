import { Context } from 'koa'

import { appDataSource } from './../index'
import { User } from './../entity'

const UsersController = {
    async getUserList(ctx: Context) {
        const usersRepo = appDataSource.getRepository(User)
        const users = await usersRepo
            .createQueryBuilder('users')
            .getManyAndCount()

        ctx.body = {
            data: {
                list: users
            }
        }
    }
}

export default UsersController
