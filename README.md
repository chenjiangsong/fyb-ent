# fyb-ent

> A Vue.js project

# 安装redis

```
brew install redis 

//开机启动redis
ln -sfv /usr/local/opt/redis/*.plist ~/Library/LaunchAgents

//使用launchctl启动redis server 
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.redis.plist

//使用配置文件启动redis server
redis-server /usr/local/etc/redis.conf

//停止redis server的自启动 
launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.redis.plist

//redis 配置文件的位置 
/usr/local/etc/redis.conf

//卸载redis和它的文件 
rm ~/Library/LaunchAgents/homebrew.mxcl.redis.plist

//测试redis server是否启动 
redis-cli ping
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
