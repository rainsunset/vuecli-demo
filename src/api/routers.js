import axios from '@/libs/api.request'

export const getRouterReq = (token) => {
    return axios.request({
    url: 'get_router',
    params: {
      token:token
    },
    method: 'get'
  });
}
