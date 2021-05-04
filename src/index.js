/*
 * @Author: xiaoping.xu
 * @Date: 2021-04-30 15:33:46
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-05 01:50:39
 * @Desc: 
 */
import _ from 'lodash';
  import printMe from './print.js';

  function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hellonnn', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }

  // document.body.appendChild(component());
  let element = component();
  document.body.appendChild(element);

 if (module.hot) {
     console.log(module.hot)
   module.hot.accept( function() {
     console.log('Accepting the updated printMe module!');
    //  printMe();
    document.body.removeChild(element);
    let element = component();
    document.body.appendChild(element);
   })
 }