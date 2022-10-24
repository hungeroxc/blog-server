import {
    UsersController,
} from './../controller/index'

export interface RouteItem {
    path: string
    method: 'get' | 'post' | 'put' | 'delete'
    action: any
}

export const AppRoutes: RouteItem[] = [
    {
        path: '/api/users/list',
        method: 'get',
        action: UsersController.getUserList
    },
]
