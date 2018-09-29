import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'
import { getParams } from '@/libs/util'

export const getTableData = req => {
    let tableData = []
    doCustomTimes(5, () => {
        tableData.push(Mock.mock({
            name: '@name',
            email: '@email',
            createTime: '@date'
        }))
    })
    return {
        code: 200,
        data: tableData,
        msg: ''
    }
}

export const getPageInfo = req => {
    const params = getParams(req.url)
    let pageInfo = {
        total: 100,
        current: params.current ? params.current : 1,
        pageSize: params.pageSize ? params.pageSize : 10,
        data: [{
            name: 'lili',
            sex: 1
        }, {
            name: 'lili',
            sex: 1
        }, {
            name: 'lili',
            sex: 1
        }, {
            name: 'lili',
            sex: 1
        }, {
            name: 'lili',
            sex: 1
        }, {
            name: 'lili',
            sex: 1
        }, {
            name: 'lili',
            sex: 1
        }]
    }
    return {
        code: 200,
        data: pageInfo,
        msg: ''
    }
}
