- 浏览器端的js 最大的boss是 window BOM browser OBject 
Model 天空
DOM
  bouns 声明在全局范围内
  window.bouns 卫星
  ...... 对全局变量的污染问题

  - JS的编写，其实在页面加载之后，JS只有在html，css 在加载完成后，再去运行， 生命周期 window.onload
  - window.onload 的执行函数 内部创造一个局部的作用域 
   bouns 函数不会污染全局作用域 window 
   - 如果有了新的type后， 你怎么改这个函数。
   - 把事情做复杂了？ 把switch case ,拆分成了多个函数来做。
   设计模式： 策略模式
   发工资 策略 复杂，
   - 随意加新的等级 
   - 将策略细节隐去