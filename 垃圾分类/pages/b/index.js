Page({
  data: {
    index: 0
  },
  changeTabbar(e) {
    this.setData({ index: e.currentTarget.dataset.id })
  }
})