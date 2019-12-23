process.on('message', (str) => {
    //process node 进程的全局对象
    console.log('child' + str);
    //子进程 把活给干了 偷偷跑到另外一个cpu 挂载一个进程 
    //把多核能力运用起来
    process.send('hehe');
})