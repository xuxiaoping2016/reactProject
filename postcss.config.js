/*
 * @Author: xiaoping.xu
 * @Date: 2021-05-07 00:53:22
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-07 16:39:15
 * @Desc: 
 */
// module.exports = {
//     plugins: [
//         // ['postcss-preset-env',{
//         //     stage: 0
//         // }],
//         // require('autoprefixer')
//         require("postcss-preset-env")()
//     ]
// };

module.exports = {
    plugins: [
      require('postcss-preset-env'),
      require('autoprefixer')
    ]
  };