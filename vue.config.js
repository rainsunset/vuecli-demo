const path = require('path')
// const config = require('./config')//配置项
// const isdev = process.env.NODE_ENV !== 'production'//是否开发环境

const resolve = dir => {
    return path.join(__dirname, dir)
}
const BASE_URL = process.env.BASE_URL

// 参见:https://cli.vuejs.org/guide/webpack.html
module.exports = {
    baseUrl: BASE_URL, // 根域上下文目录
    outputDir: 'dist', // 构建输出目录
    lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
    productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_c', resolve('src/components'))
            .set('_conf', resolve('config'))
    },
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8089,
        https: false,
        hotOnly: false,
        // 代理
        proxy: null,
        before: app => {}
    }
}
