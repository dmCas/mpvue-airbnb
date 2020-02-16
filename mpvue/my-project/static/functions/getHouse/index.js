// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const houseList = await db.collection('houseInfo')
  .get()
  const listHouse =  await db.collection('houseInfo')
  .where({
    cityId: event.cityId
  })
  .get()
  return {
    houseList,
    listHouse
  }
}
///