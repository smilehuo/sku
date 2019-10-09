//index.js
Page({
  data:{
    propsList: [
    //   {
    //   "standardListName": "成色",
    //   "standardInfoList": [{
    //     "standardName": "未激活",
    //     "attrValueId": 33,
    //     "isSelect": 0
    //   }, {
    //     "standardName": "99成新",
    //     "attrValueId": 34,
    //     "isSelect": 0
    //   }, {
    //     "standardName": "95成新",
    //     "attrValueId": 35,
    //     "isSelect": 0
    //   }, {
    //     "standardName": "9成新",
    //     "attrValueId": 36,
    //     "isSelect": 0
    //   }, {
    //     "standardName": "8成新",
    //     "attrValueId": 37,
    //     "isSelect": 0
    //   }]
    // }, {
    //   "standardListName": "容量",
    //   "standardInfoList": [{
    //     "standardName": "16G",
    //     "attrValueId": 26,
    //     "isSelect": 0
    //   }, {
    //     "standardName": "64G",
    //     "attrValueId": 28,
    //     "isSelect": 0
    //   }, {
    //     "standardName": "128G",
    //     "attrValueId": 29,
    //     "isSelect": 0
    //   }]
    // }, {
    //   "standardListName": "机身颜色",
    //   "standardInfoList": [{
    //     "standardName": "银色",
    //     "attrValueId": 15,
    //     "isSelect": 0
    //   }, {
    //     "standardName": "金色",
    //     "attrValueId": 16,
    //     "isSelect": 0
    //   }, {
    //     "standardName": "深空灰",
    //     "attrValueId": 18,
    //     "isSelect": 0
    //   }]
    // }, {
    //   "standardListName": "购买渠道",
    //   "standardInfoList": [{
    //     "standardName": "国行",
    //     "attrValueId": 9,
    //     "isSelect": 0
    //   }, {
    //     "standardName": "港澳版",
    //     "attrValueId": 10,
    //     "isSelect": 0
    //   }, {
    //     "standardName": "其他版",
    //     "attrValueId": 11,
    //     "isSelect": 0
    //   }]
    // }, {
    //   "standardListName": "网络制式",
    //   "standardInfoList": [{
    //     "standardName": "移动4G/联通4G/电信4G",
    //     "attrValueId": 2,
    //     "isSelect": 0
    //   }, {
    //     "standardName": "移动2G/联通4G/电信4G",
    //     "attrValueId": 3,
    //     "isSelect": 0
    //   }, {
    //     "standardName": "移动4G/联通4G",
    //     "attrValueId": 4,
    //     "isSelect": 0
    //   }, {
    //     "standardName": "移动2G/联通4G",
    //     "attrValueId": 5,
    //     "isSelect": 0
    //   }, {
    //     "standardName": "移动4G/联通2G",
    //     "attrValueId": 6,
    //     "isSelect": 0
    //   }, {
    //     "standardName": "移动4G",
    //     "attrValueId": 7,
    //     "isSelect": 0
    //   }]
    // }
  ],//属性数据
    skuData: {
      // "34;26;15;9;2": {
      //   "price": "2250.00",
      //   "stocksNumber": 10,
      //   "productId": 812
      // },
      // "34;29;15;9;2": {
      //   "price": "2399.00",
      //   "stocksNumber": 10,
      //   "productId": 822
      // },
      // "34;26;16;9;2": {
      //   "price": "2450.00",
      //   "stocksNumber": 10,
      //   "productId": 827
      // },
      // "34;28;16;9;2": {
      //   "price": "2499.00",
      //   "stocksNumber": 10,
      //   "productId": 832
      // },
      // "34;26;18;9;2": {
      //   "price": "2650.00",
      //   "stocksNumber": 10,
      //   "productId": 842
      // },
      // "34;29;18;9;2": {
      //   "price": "2650.00",
      //   "stocksNumber": 10,
      //   "productId": 852
      // },
      // "34;28;15;11;4": {
      //   "price": "2799.00",
      //   "stocksNumber": 10,
      //   "productId": 1177
      // },
      // "34;26;16;11;4": {
      //   "price": "2700.00",
      //   "stocksNumber": 10,
      //   "productId": 1187
      // }
    },//商品对应的sku组合
  },
  onLoad:function(){
    wx.request({
      // url: `https://md-1258040608.file.myqcloud.com/spu/20.json`,
      url: `https://md-1258040608.file.myqcloud.com/spu/20.json`,
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      success: (res) => {
        console.log(res)
        if (res.data.code == 0) {
          this.setData({
            propsList:res.data.data.propsList,
            skuData:res.data.data.skuData
          })
        }
      },
      fail: () => {},
      complete: () => {}
    });
      
  },
  ///选择弹窗
  buttonClick:function(){
    var specwindow = this.selectComponent("#specwindow");
    specwindow.showModal();
  }
})
