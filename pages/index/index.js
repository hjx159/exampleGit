// index.js
// 获取应用实例
const app = getApp()

Page({
  addLogs(event){
    const add = event.currentTarget.dataset.add
    const ui = wx.getStorageSync("userinfo")
    if(!ui.openid){
      wx.showToast({
        icon:"none",
        title: '请您先登陆'
      })
      wx.switchTab({
        url: '/pages/me/me',
      })
    }else{
      wx.cloud.callFunction({
        name:"createLogs",
        data:{
          add:add,
          openid:ui.openid,
          date:Date.now()
        }
      })
    }
  }
})
