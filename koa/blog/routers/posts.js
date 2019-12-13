const router = require('koa-router')();
const controller = require('../controller/c-post')
router.get('/', controller.getRedirectPosts);
router.get('/posts', controller.getPosts);
module.exports = router;