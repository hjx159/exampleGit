// app.js
App({
  onLaunch() {
    wx.cloud.init({
      env:'pinbei-0gwjlz0r8825e878',
      traceUser:true
    })
  },
  globalData: {
    userInfo: null
  }
})
