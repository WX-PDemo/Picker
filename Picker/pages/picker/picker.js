//引入资源
var source = require('../../data/source.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:false,
    isHidden:true,
    provinceName:[],
    provinceCode:[],
    provinceIndex:'',

    cityName:[],
    cityCode:[],
    cityIndex:'',

    countyName:[],
    countyCode:[],
    countyIndex:'',

    pro:0,
    cit:0,
    cou:0,
  },

  setSource: function (pro, cit){
    var pro = pro || 0;
    var cit = cit || 0;

    var province = source['100000'];
    var provinceName = [];
    var provinceCode = [];
    for(var item in province){
      provinceCode.push(item)
      provinceName.push(province[item])
    }

    var city = source[provinceCode[pro]];
    var cityCode = [];
    var cityName = [];
    for(var item in city){
      cityCode.push(item);
      cityName.push(city[item])
    }

    var county = source[cityCode[cit]];
    var countyCode = [];
    var countyName = [];
    for(var item in county){
      countyCode.push(item);
      countyName.push(county[item]);
    }

    this.setData({
      provinceCode: provinceCode,
      provinceName: provinceName,
      cityCode: cityCode,
      cityName: cityName,
      countyCode: countyCode,
      countyName: countyName,
    })
  },
  showPicker:function(){
    this.setData({
      isHidden:false
    })
  },
  cancleClick:function(){
    this.setData({
      isHidden: true
    })
  },
  pickerChange:function(e){
    var pro =e.detail.value[0];
    var cit = e.detail.value[1];
    var cou = e.detail.value[2];
    this.setSource(pro, cit, cou);
    this.setData({
      pro: pro,
      cit: cit,
      cou: cou,
    })
  },
  sureClick:function(){
    this.setData({
      provinceIndex:this.data.pro,
      cityIndex:this.data.cit,
      countyIndex:this.data.cou,
      flag:true,
    })
    this.cancleClick();
  },
  upClick:function(){
    console.log("提交:", this.data.provinceName[this.data.provinceIndex], this.data.cityName[this.data.cityIndex], this.data.countyName[this.data.countyIndex]);
  },
  onLoad:function(){
    this.setSource();
  }
})