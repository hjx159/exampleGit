// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  try{
    return await cloud.database().collection("logs").add({
      data:{
        add:event.add,
        openid:event.openid,
        date:event.date
      }
    })
  }catch(e){
    console.log(e)
  }
}