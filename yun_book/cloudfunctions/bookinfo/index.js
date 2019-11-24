// // 云函数入口文件
// const cloud = require('wx-server-sdk');//云服务器

// var rp = require('request-promise');//npm 各api发出请求
// cloud.init();

// esports.main = async(event,context)=>{
//   console.log(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=30320e738b459062e00934a9c2deff14`);
//   var res = rp(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=30320e738b459062e00934a9c2deff14`).than(html =>{
//     return html;
//   })
//   return res;
// }
var cloud = require('wx-server-sdk'); //云服务器

var rp = require('request-promise');  // npm 向API发出请求

cloud.init();

exports.main = async(event,context) => {
  console.log(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=30320e738b459062e00934a9c2deff14`);
  var res = rp(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=30320e738b459062e00934a9c2deff14`).then(html =>{
    return html;
  })
  return res;
}
