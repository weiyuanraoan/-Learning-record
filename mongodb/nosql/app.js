// // mongodb 数据库驱动
// var MongodbClient = require('mongodb').MongodbClient;
//mongodb  连接时用mongodb:// 协议来 27017
// mysql 3306
// var url = 'mongodb://192.168.31.128:27017//runoob';
// MongoClient.connect(url,{
//     useNewUrlPaser:true,function(err,db){
//         if(err){
//             throw err;
//         }
        
//     console.log('数据库已创建！')
    // var dbbase = db.db("runoob");
    //查询数据库是异步的？ 回调方案
    // dbbase.createCollection('pzw_site',function(err,res){
    //     if(err){

    //     }
    // }) 
    
    //    db.close();}
    // })
    
// mongodb 数据库驱动 mysql
var MongoClient = require('mongodb').MongoClient;
// mongodb 连接是用mongodb:// 协议来  27017端口
// mysql 3306
var url = 'mongodb://192.168.31.128:27017/runoob';
MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(err, db) {
  if (err) {
    throw err;
  }
  //console.log('数据库已创建！');
  var dbbase = db.db("runoob");
    // 查询数据库是异步的？ 回调方案
    //js 是异步的
    // dbbase.createCollection('pzw_site',function(err,res){
    //     if(err){
    //         throw err;
    //     }
    //     console.log('创建了集合');
    //     db.close();
    // }) 
    // 插入数据
    // // JSON object
    // var myObj = {name:'潘志伟',url:'www.runoob'};
    // dbbase
    //     .collection("pzw_site")
    //     .insertOne(myObj,function(err,res){
    //         if(err){
    //         throw err;
    //     }
    //         console.log('文档插入成功');
    //         db.close();
    //     })
    dbbase.collection("pzw_site")
    .find({"name":"潘志伟"})
    .toArray(function(err,result){
        if(err){ throw err;}
        console.log(result);
        db.close();
    })
})