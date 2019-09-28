//index.js
//获取应用实例
const app = getApp()
let interval; // 定时器
Page({
  data: {
    num:1
  },
  //事件处理函数
  show:function(){
    interval = setInterval(this.drawModel, 1000/8,1);   
  },
  stop:function(){
    clearInterval(interval)
  },
  drawModel:function(idx){
    let num = this.data.num;
    num = num+idx;
    if(num>23){
      num = 1;
    }
    this.setData({
      num:num
    })
    const ctx = wx.createCanvasContext("myCanvas");
    ctx.drawImage("/images/"+num+".jpg",90,20,150,300);
    ctx.draw();
    //console.log("idx:"+idx+",num:"+num);
  },
  onLoad: function () {
    const ctx = wx.createCanvasContext("myCanvas");
    ctx.drawImage("/images/1.jpg",90,20,150,300);
    ctx.draw();
  }
})
