# dao-vue
基于vue搭建的全家桶项目



### 1.初始化项目并提交github
```
1.初始化项目
$ mkdir dao-vue && cd dao-vue
$ npm init

2. 初始化git仓库
$ git init

3.提交github
$ git status (查看状态)
$ git add . (将项目的所有文件添加到仓库中)
$ git commit -m "第一次提交" （提交评论）
$ git remote add origin git@github.com:liuhangbiao/dao-vue.git （github创建后拷贝地址）
$ git pull --rebase origin master （代码合并【注：pull=fetch+merge]）
$ git push -u origin master （完成代码上传到github）
# 后续提交
$ git add .
$ git commit -m 修改...
$ git pull
$ git push
```

### 2. 基于webpack4构建项目基本结构
```
1. 安装webpack
$ yarn add webpack webpack-cli -g

2.安装vue webpack webpack-dev-server
$ yarn add vue （--save可省略）
$ yarn add webpack webpack-dev-server --
//--save 的意思是将模块安装到项目目录下，并在package文件的dependencies节点写入依赖。
//--dev的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖。

3. 项目基本结构
___________________
├─build
│  ├─config
│  └─loaders
├─node_modules
├─public
└─src
    ├─assets
    │  ├─css
    │  ├─font
    │  ├─images
    │  ├─js
    │  └─less
    ├─components
    │  ├─global
    │  │  ├─footer
    │  │  └─header
    │  ├─ui
    │  └─unit
    └─views
        ├─index
        └─public

```

### 3. Build Setup
```
# 初始化开发环境
npm install 或 npm i

# 启动服务到localhost:8080
npm run serve

# 打包到本地静态资源
npm run build

# 打包到本地静态资源（并发布到生产环境）
npm run deploy-build

测试查询        踩踩踩踩踩踩踩踩踩踩踩踩从               ollll
```

