// app

// app.js/app.json  文件 是小程序入口文件，必须配置
// js里 必须要注册程序： App()  => new Vue()
// js里一般就注册 生命周期（小程序）和全局数据（globalData）
// json 里必须要配置pages  ，来告诉程序我有多少个页面
// pages是个数组/ 数组第一条就是首页
//所有的生命周期或者钩子函数都可以通过wx全局api来监听
//  wx.onError(callback)  ....
// app.wxss

// page: (js wxml wxss json)

// 必须要注册页面： Page()
// page 可以定义 生命周期（页面）/ 页面逻辑（methods）/data 
// 模板语法
// vue  =》  data {{}}  props v-bind:test="js表达式"
// 小程序 =》  {{data}}   props 无指令  test="js表达式"
// react =>   {state}   props   test={js表达式}
// onload()
// 参数：当前页面参数信息
// getCurrentPages   =》 获取当前页面栈 ['a','b']  数组的最后一个当前展示页面
// 小程序里最多打开10个页面

// Page.prototype.setData函数 更新data渲染视图

// wxml（一切皆组件）
// 常用组件：
// view < ---> div
// text < ---> h1 - h6 / p / span
// icon < ---> i.icon
// Input / checkbox / radio / bindtap=‘chooseImage’/button   <--->  input[type=*] 
// picker < ---> select
// navigator < ---> a
// Image < ---> img
// 小程序所有组件都支持的属性 （公共属性）
// id、class、style、hidden（v-if）、data-*（自定义属性）、bind*（事件）、catch*(见事件系统)
// 组件私有的属性（见文档）

// JSON见文档




App({
  onLaunch(options){
    console.log('onlaunch')
    console.log(options);
  },
  onShow(options){
    // 切前台/或者刚运行
    console.log('onShow');
    console.log(options);
  },
  onHide(){
    console.log('onHide');
  },
  onError(err){
    console.log(err)
  },
  onPageNotFound(){

  },
  globalData:{  
    msg:'hello'
  },
  abc:{

  }
});