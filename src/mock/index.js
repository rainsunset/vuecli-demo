import Mock from 'mockjs'
import { login, logout, getUserInfo } from './login'
import { getTableData } from './data'
import {getPageInfo} from './data'
import {getRouters} from './routers'

// 登录相关和获取用户信息
Mock.mock(/\/login/, login)
Mock.mock(/\/get_info/, getUserInfo)
Mock.mock(/\/logout/, logout)
Mock.mock(/\/get_table_data/, getTableData)
Mock.mock(/\/gte_page_info/, getPageInfo)
Mock.mock(/\/get_router/, getRouters)

export default Mock
