import axios from '@/libs/api.request'

export const getTableData = () => {
    return axios.request({
        url: 'get_table_data',
        method: 'get'
    })
}

export const getPageInfoData = (current, pageSize) => {
    const data = {
        current: current,
        pageSize: pageSize
    }
    return axios.request({
        url: 'gte_page_info',
        method: 'get',
        params: {
            data
        }
    })
}
