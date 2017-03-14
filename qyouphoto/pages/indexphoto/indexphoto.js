var appInstance = getApp();

var pageData    = {
  data: {
    "free_vessel4":{"content":[{"content":"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",'time':'2017','theme_detail':'123','found_time':'',"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10002\\\/page10002\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"content":"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",'name':'exlm','theme_detail':'123','found_time':'',"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10002\\\/page10002\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},]}
  },
  onLoad: function (e) {
    var that =this;
    try {
        var photo = wx.getStorageSync('photo')
        if (photo) {
          var content=[];
          for(var key in photo){
            var content_obj = {};
            var _this = photo[key];
            content_obj.content=_this[0].img;
            content_obj.found_time = _this[0].add_time;
            content_obj.eventParams = "{\"inner_page_link\":\"\\\/pages\\\/page10002\\\/page10002\",\"is_redirect\":0}";
            content_obj.eventHandler = "tapInnerLinkHandler";
            content.push(content_obj);
          }
        }
        that.setData({
          free_vessel4:{
            'content':content
          }
        })
      } catch (e) {
      console.log(e)
    }
    // var content=[];
    // if(photo_length!=0){
    //   for(var i=0;i++;i<photo_length){
    //     var content_obj={}
    //     content_obj.content = photo[i][0].img;
    //     content_obj.name = photo[i][0].add_time;
    //     }
    //   }else{
    //     appInstance.showModal({
    //         content:'暂无数据'
    //       })
    //   }
     },
  onShow: function(){ 
  },
  tapInnerLinkHandler:function(e){
    console.log(e);
    var tapeven = e.currentTarget.dataset.eventParams;
    console.log(tapeven);
    if(tapeven!=null){
      appInstance.sendRequest({
            url:'templet',
            data:{
              id:tapeven
            },
            method:'POST',
            success: function(res){
              var data = res.data;
              console.log(data)  
              wx.navigateBack({
                  delta: 1, // 回退前 delta(默认为1) 页面
                  success: function(res){
                    appInstance.globalData.theme=tapeven;
                  },
                  fail: function() {
                    // fail
                  },
                  complete: function() {
                    // complete
                  }
                })
              },
            fail: function(res){
              console.log('getmode fail');
            },
            complete: function(res){
            }
          },'https://chaye.j8j0.com/api/img/') 
      }
    // var tab = JSON.parse(tapeven);
    // console.log(tab.inner_page_link);
  }
};
Page(pageData);