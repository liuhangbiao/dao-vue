// eslint-disable-next-line prettier/prettier
import Vue from 'vue'

// 自动加载 global 目录下的 .js 结尾的文件
// eslint-disable-next-line prettier/prettier
const componentsContext = require.context('./global', true, /\.js$/)

componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component)
  /**
  * 兼容 import export 和 require module.export 两种规范
  */
  // eslint-disable-next-line prettier/prettier
  const ctrl = componentConfig.default || componentConfig
  Vue.component(ctrl.name, ctrl)
})

// 自定义组件
// import * as cps from 'comps/ui'
// Object.keys(cps).forEach(key => {
//   Vue.component(key, cps[key])
// })
//自定义组件 end