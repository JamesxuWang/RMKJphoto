// pages/indexmusic/indexmusic.js
var app = getApp()  
Page({  
  data: {  
    navbar: ['热门', '流行', '网络','怀旧','童真','纯音乐'],  
    currentTab: 0, 
    musicitem:{
      hot:[{'music':'光辉岁月','id':'0'},{'music':'光辉碎月','id':'1'},{'music':'光辉碎玉','id':'2'},{'music':'光辉约束','id':'3'}],
      fashion:[],
      online:[],
      old:[],
      child:[],
      simple:[]
    }
  },  
  navbarTap: function(e){
    console.log(e)  
    this.setData({  
      currentTab: e.currentTarget.dataset.idx  
    })  
  },
  choosemusic:function(e){
    var musicid = e.currentTarget.dataset.idx;
    app.globalData.music = musicid;
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
}) 