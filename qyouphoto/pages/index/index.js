//flip/flipInX/flipInY翻转//rotation/zoom//rotateInDownLeft//  slideIn//slide弹性上下（相框）
//zoom/fadeOutUp/fadeOutDown/fadeOutleansU D上移 下移 (小动画)
//swing (大动画)
//index.js 
//获取应用实例
var playon=false
var app = getApp()
Page({
  data: {
    theme:'',
    //music  AND  background AND rabit_box
    rabit:{
        src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      background_img:'background-image: url(../../images/1.2.png)',
      //rabit_box:'../../images/rabit.png',
      rabit_position:['position: absolute;bottom: 338rpx;right: 100rpx;','width: 104px;height: 158px;'],
      rabit_box:'../../images/pinkfl.png'
       },
      //music旋转
    rotation:'animation-play-state: running',
    //爱心特效1是闪星 2是落叶 3是上升
    bling_box:1,
    bling:{
      love_style:'fadeOutDown',
      lover_src:'../../images/1.2.2.png'
    },
    bling2:{
      love_style:'fadeOutDown',
      lover_src:'../../images/1.2.2.png'
    },
    //如果是slide效果加'overflow: hidden;'
    overflow:'width: 488rpx;height: 867rpx;top:150rpx;position:absolute;right:178rpx;z-index:100',
    //白色邮票相框配置
    pbox_style:"border:13px solid #fff;border-image:url(../../images/border.png) repeat 13;",
    iframe:{
      iframe_style1:'rotateInDownLeft',
      iframe_style2:'flipInY'
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
        //console.log('iframesetInterval'+i);
          setTimeout(function(){
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
  if(this.playon = true){
   this.pausemusi();
   }
  },
initiatlizate:function(){
  var that= this;
  var components={};
  var theme = app.globalData.theme;
  var theme_old = this.data.theme;
    console.log(theme);
  //通讯获取mude
    if(theme!=theme_old){
      app.sendRequest({
          url:'img',         
          method:'POST',
          success: function(res){
            var data = res.data;
            console.log(data)
            for(var i=0,l=data.length;i<l;i++){
              if(data[i].type==1){
                components.url = 'background-image: url('+data[i].img+')'; 
                components.music = data[i].music;
              }
              if(data[i].type==2){
                components.pbox_style = 'border:13px solid #fff;border-image:url('+data[i].img+') repeat 13;'; 
              }
              if(data[i].type==3){
                var img = data[i].img;
                if(img.length!=1){
                components.bling = img[0];
                components.bling1 = img[1]; 
                }else{
                  components.bling = img[0];
                  components.bling2= '../../images/2.1.png'
                }
              }
              if(data[i].type==4){
                components.rabit_box = data[i].img; 
              }
              if(data[i].type==5){
                components.photo = data[i].img; 
              }
            }
          },
          fail: function(res){
            console.log('getmode fail');
          },
          complete: function(res){
          }
        },'https://chaye.j8j0.com/api/img/')  
    }
    console.log(components);  //setData有问题
    var data = {
          theme:'7',
          rabit:{
            src: components.music,
            background_img:components.url,
            //rabit_box:'../../images/rabit.png',
            rabit_position:['position: absolute;bottom: 338rpx;right: 100rpx;','width: 104px;height: 158px;'],
            rabit_box:components.rabit_box
            },
          rotation:'animation-play-state: running',
          bling_box:1,
          bling:{
            love_style:'zoom',
            lover_src:components.bling
          },
          bling2:{
            love_style:'zoom',
            lover_src:components.bling2
          },
          //如果是slide效果加'overflow: hidden;'
          overflow:'width: 488rpx;height: 867rpx;top:150rpx;position:absolute;right:178rpx;z-index:100',
          //白色邮票相框配置
          pbox_style:components.pbox_style,
          iframe:{
            iframe_style1:'rotateInDownLeft',
            iframe_style2:'flipInY'
          },
          //图片
          photo:app.globalData.photo_line,
          photo_right:0
      }
      that.setData({
        data:data
      })
},
onShow:function(e){
    this.initiatlizate();    
    var rotation = this.data.iframe.iframe_style2;
    var zoom = this.data.iframe.iframe_style1;
    this.audioCtx = wx.createAudioContext('myAudio');
    this.iframe_animate(rotation,zoom,6000, 12000);
    this.pausemusi();
  }
})
