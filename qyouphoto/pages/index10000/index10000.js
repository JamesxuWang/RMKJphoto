// pages/index10000/index10000.js
var appInstance = getApp();
Page({
  data:{
    real_value:true,
  },
  foundphoto:function(){
    wx.navigateTo({
      url: '../index10001/index10001',
      success: function(res){
        console.log(res);
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onLoad:function(options){
     appInstance.setPageUserInfo();
   // var data = appInstance.getUserInfo();
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})