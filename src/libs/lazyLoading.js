// export default (url) =>()=>import(`@/views/${url}.vue`)
export default (url) => () => import(`${url}`)
