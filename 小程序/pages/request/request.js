// pages/request/request.js
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
    wx.request({
      url: 'https://houyuqin.czwhcloud.cn/search',
      data: this.options,
      success: (res) => {
        this.setData({
          list: res.data.list
        });
      }
    });


// //GET请求
//     wx.request({
//       url:'https://awy.d5h5.com/search',//域名路径
//       data:{
//         a:123,
//         b:234,
//         c:345
//       },
//       dataType:'text',//返回数据类型text，不进行JSON.parse处理
//       success:(res)=>{
//         this.setData({
//           getReturn:res.data
//         });
//       }
//     });
// //POST请求
//     wx.request({
//       url:'https://awy.d5h5.com/search',
//       method:'POST',
//       //data:{name:'brave'},
//       data:'hello node.js',
//       header:{
//         'content-type':'text/plain',
//         //'content-type': 'application/x-www-form-urlencoded'
//       },
//       dataType:'text',
//       success:(res)=>{
//         this.setData({
//           postReturn:res.data
//         });
//       }
//     });
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

  }
})