var appInstance = getApp();

var pageData    = {
  data: {"free_vessel4":{"type":"free-vessel","style":"background-color:rgb(255, 255, 255);margin:auto;","content":[{"type":"picture","content":"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10002\\\/page10002\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","content":"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10002\\\/page10002\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","content":"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10018\\\/page10018\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","content":"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/20\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":[],"animations":[],"page_form":"","compId":"free_vessel4"}},
  app_title: '人马科技',
  app_description: '科技改变一切',
  page_router: 'page10010',
  page_router1: '10010',
  page_form: 'none',
  list_compids_params: [],
  goods_compids_params: [],
  relobj_auto: [],
  bbsCompIds: [],
  dynamicVesselComps: [],
  onLoad: function (e) {
    //appInstance.setPageUserInfo();   
    // appInstance.checkLogin();
     },
  onShareAppMessage: function(){
    var pageRouter = this.page_router;
    var pageRouter1 = this.page_router1;
    return {
      title: this.app_title || '产品设计',
      desc: this.app_description || '',
      path: '/pages/'+pageRouter+'/'+pageRouter1
    }
  },
  onShow: function(){ 
  },
  tapInnerLinkHandler:function(e){
    console.log(e);
    var tapeven = e.currentTarget.dataset.eventParams;
    console.log(tapeven);
    var tab = JSON.parse(tapeven);
    console.log(tab.inner_page_link);
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function(res){
        appInstance.globalData.theme=tab.inner_page_link;
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
};
Page(pageData);