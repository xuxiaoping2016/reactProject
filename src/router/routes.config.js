/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-19 11:28:54
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-19 18:47:18
 * @Desc: 
 */

const routesList = [
    {
        path: '/',
        menuCode:"page1",
        name:"page1",
        loader: () => import('pages/page1/index'),
        exact: true
    },
    {
        path: '/page2',
        menuCode:"page2",
        name:"page2",
        loader: () => import('pages/page2/index'),
        exact: true
    }
]

export default routesList