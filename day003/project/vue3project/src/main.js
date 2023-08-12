/*
 * @Author: junw wo1261931780@gmail.com
 * @Date: 2023-08-12 19:24:39
 * @LastEditors: junw wo1261931780@gmail.com
 * @LastEditTime: 2023-08-12 20:34:13
 * @FilePath: \vue3project\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 导入核心包
import Vue from 'vue'
// 导入根组件
import App from './App.vue'
// 全局组件需要引入
import CommonButton from "./components/CommonButton.vue"
// 全局注册的好处，在所有范围内都能直接使用
Vue.component('CommonButton', CommonButton)

Vue.config.productionTip = false
// 最核心的内容
// vue实例化
// 提供render方法，基于app.vue渲染index.html
new Vue({
    // render: h => h(App),
    render: (element) => {
        // 实际上是这样的过程，上面做了简化
        return element(App)
    }
}).$mount('#app')
// $mount('#app')=el:'#app'
