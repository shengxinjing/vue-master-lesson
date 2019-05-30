1. jwt

想老师讲一下登录校验的一些常用方式，比如token和cookie之类的

created也可以哈

为什么Vue 实例 要用$mount（"#app"）而用 vue-cli 并没有

怎么打包之后 ，怎么自动上传到服务器？



Npm run build  dist包   



线上机器有一个nginx目录 

1. 前端要有一个部署机 jekins 跑build copy代码 上线 
2. push后，jekin点按钮，打包 ssh到机器上 解压
3. push之后，github或者gitlab的webhook  重新发布docker



面试，webpack会问哪些问题，老师简单说下



也不理解出了chainwebpack，configwebpack有什么存在必要吗





jwt

机器1                            机器2

前端                             后端

​           通过json交互(jwt) json web token

1. 用户登录  ===》  后端接受用户名密码，返回一个token （包含用户id，过期时间）
2. 登录成功，拿到token 存储storage
3. axios拦截器
   1. 每次发发请求钱，都获取storage里面的token，放在http 的header上
   2. 后端接受请求，会校验header 根据你接口的是否需要权限
      1. 需要权限，token过期，前端跳转
   3. 用户通过了，返回userInfo，包含用户名，路由权限表(addRouter)