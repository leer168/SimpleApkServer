# SimpleApkServer
Update apk.

### 方式1：
> 切换到根目录
> node file_server.js 启动程序
> ctrl + c 关闭程序

### 方式2：
> 切换到根目录
> pm2 start file_server.js 启动程序
> pm2 stop file_server 关闭程序

### 测试服务是否运行
> 访问 121.42.193.103:3000/version