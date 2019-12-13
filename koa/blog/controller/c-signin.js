// exports.getPosts = async ctx => {
//     //中间件处理函数
//     ctx.body = {
//             posts: []
//         }
//         //向外返回文件
// }

exports.getSignin = async(ctx) => {
    // ctx.body = 'form'
    await ctx.render('signin', {

    })
}
exports.postSignin = async(ctx) => {
    ctx.body = '登录成功'
}