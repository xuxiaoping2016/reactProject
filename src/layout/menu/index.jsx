/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-19 13:45:47
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-19 18:53:44
 * @Desc: 
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { Menu} from 'antd'
import routeList from '../../router/routes.config'

const MenuComponent = () => {
    return (
        <Menu>
            {routeList.map(route =>  {
                return (
                    <Menu.Item key={route.menuCode}>
                        <Link to={route.path}>{route.name}</Link>
                    </Menu.Item>
                )
            })}
            <Menu.Item key="resource">
                <Link to="/resource">resource</Link>
            </Menu.Item>
        </Menu>
    )
}

export default MenuComponent