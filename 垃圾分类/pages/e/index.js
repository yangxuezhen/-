//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    value: "",
    data: "",
    title: 0,
    lei: ''
  },
  onShow() {
    var that = this
    wx.request({
      url: " https://www.kancloud.cn/xika1024/lajiflw",
      header: { 'content-Type': 'application/json' },
      success(res) {
        console.log(res.data.data)
        that.setData({
          data: res.data.data
        })
        that.sp()
      }
    })
  },
  nav() {
    wx.switchTab({
      url: '/pages/set/set'
    })
  },
  sp() {
    var data = this.data.data[this.data.title].common.split('、')
    this.setData({
      lei: data
    })
    console.log(this.data.lei)
  },
  toggle(ev) {
    this.setData({
      title: ev.currentTarget.dataset.index
    })
    this.sp()
  }
})
