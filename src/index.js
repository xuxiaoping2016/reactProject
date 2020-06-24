import React from 'react';
import ReactDom from 'react-dom';
// import Hello from './component/Hello/Hello';
import getRouter from './router/router';
import {AppContainer} from 'react-hot-loader';


/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
    module.hot.accept('./router/router', () => {
        const getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            {RootElement}
        </AppContainer>,
        document.getElementById('app')
    )
};

// document.getElementById('app').innerHTML = "Webpack works"

// const es6 = () => {
//     console.log('fdfdf')
// }

// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     showName(){
//         console.log(console.log(this.name))
//     }
// }

// const p = new Person('xuxiaoping',12);

// const arr = [1,2,3];
// console.log(arr.includes(1))