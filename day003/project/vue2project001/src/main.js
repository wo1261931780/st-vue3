/*
 * @Author: junw wo1261931780@gmail.com
 * @Date: 2023-08-13 15:21:24
 * @LastEditors: junw wo1261931780@gmail.com
 * @LastEditTime: 2023-08-13 16:17:36
 * @FilePath: \vue2project001\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import './styles/base.css' // css 样式重置
import './styles/common.css' // 公共全局样式
import './assets/iconfont/iconfont.css' // 字体图标的样式

// import './styles/index.css' // 页面样式
// 全局注册一遍需要引用多次的组件
import BaseGoodsItem from './components/BaseGoodsItem'
Vue.component('BaseGoodsItem', BaseGoodsItem)
import BaseBrandItem from './components/BaseBrandItem'
Vue.component('BaseBrandItem', BaseBrandItem)




Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
