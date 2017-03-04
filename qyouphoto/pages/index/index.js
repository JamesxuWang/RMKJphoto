//flip/flipX/flipY翻转 fadeOutUp/fadeOutDown 
//index.js 
//获取应用实例
var app = getApp()
Page({
  data: {
    random:Math.floor(Math.random()),
    name:'rabit',
    //music  AND  background AND rabit_box
    rabit:{
        src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'   ,
      background_img:'background-image: url(../../images/1.png)',
      //rabit_box:'../../images/rabit.png',
      rabit_position:''
       },
      //music旋转
    rotation:'animation-play-state: running',
    //爱心特效
    bling_box:2,
    bling:{
      love_style:'fadeOutDown',
      lover_src:'../../images/2.png'
    },
    bling2:{
      love_style:'fadeOutDown',
      lover_src:'../../images/3.png'
    },
    //如果是slide效果加'overflow: hidden;'
    overflow:'width: 488rpx;height: 867rpx;margin: 140rpx auto;',
    pbox_style:"border:20px solid #fff;border-image:url(../../images/1111.png) stretch 90;",
    //相框特效
    iframe:{
      iframe_style1:'zoom',
      iframe_style2:'rotation'
    },
    //图片
    photo:[],
    photo_right:0
  },
  //事件处理函数
pausemusi: function() {
    if(this.playon == true){
      this.audioCtx.pause();  
      this.playon = false;
      this.setData({
        rotation:'animation-play-state: paused'
      })
    }else{
        this.audioCtx.play();
        this.playon = true;
        this.setData({
        rotation:'animation-play-state: running'
      })
    }    
  },   //animate("选择器","动画","次数","时延")
love_animate: function (animation_one,animation_twi, delay_onc,delay_twi) {
     var that = this;
      // var target = document.querySelectorAll(seletor)
      var timer = null;
      timer = setInterval( function() {
        that.setData({
          bling:{
            love_style:animation_one            
          }
        })
        console.log('setInterval');
        setTimeout(function(){
          that.setData({
          bling:{
            love_style:animation_twi
          }
        })
        },delay_onc)
      }, delay_twi)
  },
iframe_animate: function (animation_one,animation_twi, delay_onc,delay_twi) {
     var that = this;
     var timer = null;
     var i = 0 ;
     var photo_length = app.globalData.photo_loca.length;
      console.log(photo_length);    
      timer = setInterval( function() {
        if(i!=photo_length-1){
           i++;
          }else{i=0}
        that.setData({
          iframe:{
            iframe_style1:animation_one,
            iframe_style2:'rotation'
            },
          photo_right:i 
          })
        console.log('iframesetInterval'+i);
          (function(){
          that.setData({
          iframe:{
              iframe_style1:animation_twi,
              iframe_style2:'rotation'
            },
          })
        },delay_onc)
      }, delay_twi)
  },
randomInteger:function (low, high) {
      return low + Math.floor(Math.random() * (high - low));
        },
randomFloat: function (low, high) {
            return low + Math.random() * (high - low);
        },
pixelValue :function (value) {
            return value + 'px';
        },
durationValue: function (value) {
            return value + 's';
        },
create_animate:function(){
  //image.src ='images/petal'+ randomInteger(1, 10) + '.png';
},
navtomodel:function(){
    wx.navigateTo({
      url: '../indexmodel/indexmodel',
      success: function(res){
        console.log(res)
      },
    })
  },
navtomusic:function(){
    wx.navigateTo({
      url: '../indexmusic/indexmusic',
      success: function(res){
        console.log(res)
      },
    })
  },
navtophoto:function(){
    wx.navigateTo({
      url: '../indexadd/indexadd',
      success: function(res){
        console.log(res)
      },
    })
  },
navtokeep:function(){
  },
   
onLoad: function () {
    console.log('onLoad')
    var that = this;
    //console.log(that.data.userInfo)
  },
onReady:function(e){
  },
onHide:function(){
    this.pausemusi();
  },
onShow:function(e){
    console.log(app.globalData.theme);
    console.log(app.globalData.music);
    console.log(app.globalData.photo_loca);
    //通讯获取mude
     this.setData({
      photo: app.globalData.photo_loca,
    })
    var rotation = this.data.iframe.iframe_style2;
    var zoomIn = this.data.iframe.iframe_style1;
    this.audioCtx = wx.createAudioContext('myAudio');
    this.iframe_animate(zoomIn,rotation,6000, 12000);
    this.pausemusi();
  }
})
