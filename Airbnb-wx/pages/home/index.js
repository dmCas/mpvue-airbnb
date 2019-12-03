// pages/home/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    advData:[],
    interval: 5000,
    current: 0,
    latitude: '',
    longitude: ''
  },
  requestAdvertise(){
    wx.request({
      url: 'http://localhost:3000/indexPage',
      success: (res) => {
        const advData = res.data.advertise
        this.setData({
          advData
        })
      }
    })
  },
  currentHandle(e){
    let {current} = e.detail
    this.setData({
      current
    })
  },
  //获取用户地理位置
  getLocation(){
    console.log(1)
    wx.getLocation({
      type: 'wgs84',
      altitude: true,
      success: (res) => {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log(res)
        this.setData({
          latitude,
          longitude
        })
      },
      fail: () => {},
      complete: () => {}
    });
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestAdvertise()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let vm = this
    vm.getLocation()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})