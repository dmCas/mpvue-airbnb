// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const houseList = await db.collection('houseInfo')
0
  .get()

  return houseList
}
///