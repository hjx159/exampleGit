// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  getLogs(){
    let that = this
    const ui = wx.getStorageSync('userinfo')
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
        name:"getLogs",
        data:{
          openid:ui.openid
        },
        success:res=>{
          console.log(res)
          that.setData({
            logs:res.result.data
            .map(log=>{
              var date = util.formatTime(new Date(log.date))
              log.date = date
              return log
            })
          })
        },
        fail:err=>{
          console.log(err)
        }
      })
    }
  },
  onShow:function(){
    this.getLogs()
  }
})
