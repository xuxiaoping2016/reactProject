# reactProject



WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. 
Learn more: https://webpack.js.org/concepts/mode/


一、
npm i -D webpack-cli  webpack webpack-dev-derver

npm install --save-dev babel-loader @babel/core  @babel/preset-env   @babel/preset-react

npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime
### 知识点
babel-plugin-transform-runtime 和 babel-polyfill的关系
https://blog.csdn.net/chiuwingyan/article/details/80777016
https://www.cnblogs.com/L-xmin/p/12493824.html
https://www.cnblogs.com/nixiaolei/p/11980520.html


npm install --save react react-dom react-router-dom

配置服务器
Nginx, Apache, IIS等配置启动一个简单的的WEB服务器。
serve 命令
使用webpack-dev-server来配置启动WEB服务器。
知识点
webpack-dev-server使用方法，看完还不会的来找我~

追溯 React Hot Loader 的实现
https://www.cnblogs.com/ikcamp/p/8521145.html

安装mobx
npm install mobx mobx-react --save
Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option in your 'tsconfig' or 'jsconfig' to remove this warning
https://blog.csdn.net/lydia_liuY/article/details/81462208

Support for the experimental syntax 'decorators-legacy' isn't currently enabled
npm i @babel/plugin-proposal-decorators --save-dev

The decorators plugin requires a 'decoratorsBeforeExport' option, whose value must be a boolean. If you want to use the legacy decorators semantics, you can set the 'legacy: true' option
https://babeljs.io/docs/en/babel-plugin-proposal-decorators

React + MobX 状态管理入门及实例（一）
https://www.jianshu.com/p/bea658a8b721



devtool优化
mode: 'development' 打包出来的依然可以看是哪个文件报错
mode:"production"  只展示bundle.js 报错

webpack中devtool的配置方案[开发模式]---[线上模式]
https://www.cnblogs.com/ladybug7/p/12321254.html

显微镜下的webpack4的新特性：mode详解
https://www.cnblogs.com/cherryvenus/p/9808320.html

配置less
npm install style-loader css-loader less-loader postcss-loader autoprefixer --save-dev
https://www.cnblogs.com/RoadAspenBK/p/9342850.html

配置scss
npm install node-sass sass-loader css-loader style-loader postcss-loader autoprefixer -D
样式配置
https://www.npmjs.com/package/postcss-loader
PostCSS以及cssnext语法

browserslist详解
https://www.jianshu.com/p/d45a31c50711


css-loader中importLoaders的理解
https://zhuanlan.zhihu.com/p/94706976


postcss-loader的插件
autoprefixer   https://github.com/postcss/autoprefixer
解决wepacke配置postcss-loader时autoprefixer失效问题
https://www.cnblogs.com/ellen-mylife/p/12408879.html

postcss-import
cssnano

postcss-cssnext  //postcss-cssnext has been deprecated in favor of postcss-preset-env
postcss-preset-env   https://www.dazhuanlan.com/2020/03/12/5e69f574c1bef/
   2者的关系  https://moox.io/blog/deprecating-cssnext/

postcss-modules
postcss-sprites


"browserslist": [
    "> 1%",
    "last 7 versions",
    "not ie <= 8",
    "ios >= 8",
    "android >= 4.0"
  ]

MiniCssExtractPlugin    npm i mini-css-extract-plugin -D
  "browserslist": {
              // 开发环境 --> 设置node环境变量：process.env.NODE_ENV = development
              "development": [
                "last 1 chrome version",//兼容最新版
                "last 1 firefox version",
                "last 1 safari version"
              ],
              // 生产环境：默认是看生产环境
              "production": [
                ">0.2%",
                "not dead",
                "not op_mini all"
              ]
            }
原文链接：https://blog.csdn.net/weixin_44523860/java/article/details/105529729
使用mini-css-extract-plugin 报错ReferenceError:xxx is not defined
https://www.cnblogs.com/zhouhui231/p/12688496.html
大专栏
https://www.dazhuanlan.com/mobile/


二、babel5 和 babel6 的区别
https://www.cnblogs.com/sker/p/5482400.html

三、webpack Dev Server Invalid Options
options.historyApiFallback should be {Boolean} 
(https://webpack.js.org/configuration/dev-server/#devserver-historyapifallback)

四、webpack配置react-hot-loader热加载局部更新
https://blog.csdn.net/huangpb123/article/details/78556652

https://gaearon.github.io/react-hot-loader/getstarted/

五、redux原理
https://blog.csdn.net/juhaotian/article/details/79509053
https://github.com/reduxjs/redux

https://blog.csdn.net/weixin_42420703/article/details/82227734     import  很详细
中文文档
http://cn.redux.js.org/docs/recipes/reducers/BasicReducerStructure.html

六、ERROR in ./src/pages/Counter/Counter.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: F:/reactfm/src/pages/Counter/Counter.js: Decorators are not officially supported yet in 6.x pending a proposal update.
However, if you need to use them you can install the legacy decorators transform with:

npm install babel-plugin-transform-decorators-legacy --save-dev

and add the following line to your .babelrc file:

{
  "plugins": ["transform-decorators-legacy"]
}

The repo url is: https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy.


七、file-loader 和 url-loader的区别
https://blog.csdn.net/qq_38652603/article/details/73835153
https://blog.csdn.net/hdchangchang/article/details/80175782

相关问题：我使用的是file-loader，当我在项目中使用webpack-dev-server开始完毕后，页面所有图片浏览正常。然后使用webpack将项目打包出来后，页面中的所有图片加载失败。
https://blog.csdn.net/WEB_YH/article/details/79325182?utm_source=blogxgwz9

八、react 按需加载 的实现及原理
https://segmentfault.com/a/1190000009539836

九、提取公共代码使用webpack.optimize.CommonsChunkPlugin报错
webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead

https://blog.csdn.net/github_36487770/article/details/80228147
详解CommonsChunkPlugin的配置和用法
https://segmentfault.com/a/1190000012828879


十、代码压缩
UglifyJSPlugin   vendor 直接从2600KB 变为330多kb
webpack.DefinePlugin  vendor 直接从330KB 变为209kb

十一、在使用extract-text-webpack-plugin给webpack打包时出现报错
(node:14844) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
(node:14844) DeprecationWarning: Tapable.apply is deprecated. Call apply on the plugin directly instead

问题原因：extract-text-webpack-plugin目前版本不支持webpack4。
解决方案：使用extract-text-webpack-plugin的最新的beta版
        npm install extract-text-webpack-plugin@next
参考 ：https://blog.csdn.net/u011215669/article/details/81269386

同类问题参考  Vue项目升级到Webpack 4.x初步踩坑总结
              https://blog.csdn.net/harsima/article/details/80819747


终极解决方案
webpack 插件 mini-css-extract-plugin 配置项请教 https://segmentfault.com/q/1010000015723367/a-1020000015729448


十二、nginx 配置解决 react 、vue 单页面刷新404问题
https://blog.csdn.net/a20023930/article/details/80436663
https://www.jianshu.com/p/b4f004bb8b66

react单页面应用本地开发环境下刷新会停留在当页，部署在服务器上刷新404
https://segmentfault.com/q/1010000011004310

apache服务器开启rewrite模式总结 解决404错误

通过比对本地wampserver的配置文件和服务器上的apache配置文件，解决了404错误


十三、测试环境和正式环境接口地址不同应该怎么处理？

十四、CSS MODULES
https://www.w3cplus.com/blog/tags/555.html


十五、json-server 详解
https://www.cnblogs.com/fly_dragon/p/9150732.html