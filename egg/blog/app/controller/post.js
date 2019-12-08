const Controller = require('egg').Controller;

class PostController extends Controller {
    async new() {
        // this.ctx.body = 'hi,post'
        await this.ctx.render('new.tpl')
            // 渲染一个模板
    }
    async create() {
        // this.ctx.body = 'hi,post'
        // this.ctx.body = '在这里';
        // 渲染一个模板
        const { ctx } = this;
        let { title, body } = ctx.request.body; //请求
        // console.log(title, body);
        await ctx.service.post.newPost(title, body);
        // this.ctx.body = '在这里处理表单';
        ctx.redirect('/posts');
    }
    async index() {
        await this.ctx.render('index.tpl');
    }
}
module.exports = PostController;