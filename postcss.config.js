/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-20 00:05:07
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-20 13:01:44
 * @Desc: 
 */
module.exports = {
  plugins: [
    [
      'postcss-preset-env',

      {
        stage: 0,
        browsers: [
          'last 7 versions',
          "ie > 6",
          ">1%",
          // "not dead",
          "not op_mini all"
        ]
        // autoprefixer: { grid: true }
      },
    ],
  ],
};

// module.exports = {
//   plugins: [
//     require('postcss-preset-env'),
//     require('autoprefixer')
//   ]
// };


// module.exports = {
//   plugins: {
//     // 'postcss-flexbugs-fixes': {},
//     'postcss-preset-env': {
//       autoprefixer: {
//         // flexbox: 'no-2009',
//         grid: true 
//       },
//       stage: 3,
//     },
//     // cssnano 配合 css-modules 有 bug
//     // cssnano: {},
//   },
// };