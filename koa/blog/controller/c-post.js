exports.getPosts = async ctx => {
        //中间件处理函数

        await ctx.render('posts', {

        })
    }
    //向外返回文件
exports.getRedirectPosts = async ctx => {
    ctx.redirect('/posts');
}