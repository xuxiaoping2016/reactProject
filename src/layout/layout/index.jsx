/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-19 15:06:59
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-19 23:54:03
 * @Desc: 
 */

import React from 'react'
import { Layout } from 'antd';
import MenuComponent from '../menu/index'
import Header from '../header/index'
import style from './style.less'

const {Sider: AntSider,Content} = Layout
const BasicPageLayout = (props) => (
    <Layout className={style.layout}>
        <AntSider>
            <MenuComponent/>
        </AntSider>
        <Layout style={{ width: 'calc(100vw - 120px)' }}>
          <Header />
          <Content className={style.content}>
                {/* {React.cloneElement(, props)} */}
                {props.children}
          </Content>
        </Layout>
    </Layout>
)

export default BasicPageLayout