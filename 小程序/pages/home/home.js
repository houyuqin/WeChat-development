// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      message:'hello'
    });
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

  },


  getInput(e){
    this.setData({
      userInput:e.detail.value
    });
  },

  postForm(f){
    console.log(f)
  },

  jumpIndex(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  jumpTest() {
    wx.navigateTo({
      url: '/pages/test/test?a=1234'
    })
  },

 /* takePhoto(){
    var cm = wx.createCameraContext();
    cm.takePhoto({
      quality:'high',
      success:(res)=>{
        this.setData({
          tempImage:res.tempImagePath
        });
      }
    });
  },*/

  jumpList(){
    wx.navigateTo({
      url: '/pages/list/list',
    })
  },

  showList(f){
    wx.navigateTo({
      url:'/pages/list/list?kwd='+f.detail.value.userInput,
    });
  },

  // startRequest(f){
  //   wx.navigateTo({
  //     url: '/pages/request/request?kwd='+f.detaile.value.userInput,
  //   })
  // }



})