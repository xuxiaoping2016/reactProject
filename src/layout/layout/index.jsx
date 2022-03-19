/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-19 15:06:59
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-19 19:32:38
 * @Desc: 
 */

import React from 'react'
import { Layout } from 'antd';
import MenuComponent from '../menu/index'
import Header from '../header/index'
import style from '../style.less'

const {Sider: AntSider,Content} = Layout
const BasicPageLayout = (props) => (
    <Layout style={{ flexDirection: 'row' }}>
        <AntSider>
            <MenuComponent/>
        </AntSider>
        <Layout style={{ width: 'calc(100vw - 120px)' }}>
          <Header />
          <Content>
                {/* {React.cloneElement(, props)} */}
                {props.children}
          </Content>
        </Layout>
    </Layout>
)

export default BasicPageLayout